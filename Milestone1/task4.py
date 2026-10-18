from pathlib import Path
from collections import defaultdict
import json

import torch
from PIL import Image
from transformers import pipeline
from ultralytics import RTDETR


# 1. Project paths
PROJECT_FOLDER = Path(__file__).resolve().parents[1]
IMAGES_FOLDER = PROJECT_FOLDER / "images"
OUTPUT_FOLDER = PROJECT_FOLDER / "task4_results"

OUTPUT_FOLDER.mkdir(parents=True, exist_ok=True)

JSON_FILE = OUTPUT_FOLDER / "results.json"

# 2. Select CPU or GPU
DEVICE = 0 if torch.cuda.is_available() else -1

# 3. Image extensions
IMAGE_EXTENSIONS = {".jpg", ".jpeg", ".png", ".webp"}

# 4. Labels for OWLv2
OBJECT_LABELS = [
    "apple",
    "bag",
    "book",
    "bottle",
    "chair",
    "laptop",
    
    
]


# 5. Check image folder
if not IMAGES_FOLDER.exists():
    raise FileNotFoundError(
        f"Images folder not found: {IMAGES_FOLDER}"
    )

image_files = sorted(
    file for file in IMAGES_FOLDER.iterdir()
    if file.is_file()
    and file.suffix.lower() in IMAGE_EXTENSIONS
)

if not image_files:
    raise FileNotFoundError(
        f"No images found in: {IMAGES_FOLDER}"
    )


# 6. Load OWLv2 model
print("Loading OWLv2 model...")

owl_detector = pipeline(
    "zero-shot-object-detection",
    model="google/owlv2-base-patch16-ensemble",
    device=DEVICE
)


# 7. Load RT-DETR-L model
print("Loading RT-DETR-L model...")

rtdetr_model = RTDETR("rtdetr-l.pt")


# 8. Store all results
all_results = []


# 9. Process each image
for image_path in image_files:
    print(f"\nProcessing: {image_path.name}")

    try:
        with Image.open(image_path) as img:
            image = img.convert("RGB")

        image_result = {
            "image": image_path.name,
            "models": {}
        }

        # --------------------------------
        # OWLv2 object detection
        # --------------------------------
        owl_predictions = owl_detector(
            image,
            candidate_labels=OBJECT_LABELS,
            threshold=0.10
        )

        owl_objects = defaultdict(list)

        for detection in owl_predictions:
            name = detection["label"]
            confidence = float(detection["score"])

            owl_objects[name].append(
                round(confidence * 100, 2)
            )

        owl_json = []

        for name, scores in sorted(owl_objects.items()):
            owl_json.append({
                "object": name,
                "quantity": len(scores),
                "confidence_percentage": round(
                    sum(scores) / len(scores), 2
                )
            })

        image_result["models"]["OWLv2"] = owl_json

        # --------------------------------
        # RT-DETR-L object detection
        # --------------------------------
        predictions = rtdetr_model.predict(
            source=str(image_path),
            conf=0.25,
            verbose=False
        )

        result = predictions[0]
        rtdetr_objects = defaultdict(list)

        if result.boxes is not None:
            for box in result.boxes:
                class_id = int(box.cls.item())
                name = result.names[class_id]
                confidence = float(box.conf.item())

                rtdetr_objects[name].append(
                    round(confidence * 100, 2)
                )

        rtdetr_json = []

        for name, scores in sorted(rtdetr_objects.items()):
            rtdetr_json.append({
                "object": name,
                "quantity": len(scores),
                "confidence_percentage": round(
                    sum(scores) / len(scores), 2
                )
            })

        image_result["models"]["RT-DETR-L"] = rtdetr_json

        # 10. Save annotated image
        annotated_path = (
            OUTPUT_FOLDER / f"{image_path.stem}_detected.jpg"
        )

        result.save(filename=str(annotated_path))

        image_result["annotated_image"] = annotated_path.name
        all_results.append(image_result)

        print(json.dumps(image_result, indent=4))

    except Exception as error:
        print(f"Error processing {image_path.name}: {error}")


# 11. Save results as JSON
with open(JSON_FILE, "w", encoding="utf-8") as file:
    json.dump(all_results, file, indent=4, ensure_ascii=False)

print("\nTask 4 completed!")
print(f"JSON results saved to: {JSON_FILE}")
print(f"Detected images saved in: {OUTPUT_FOLDER}")
