from ultralytics import YOLO
import os
import json
import cv2

# ==========================================
# TASK 3: OBJECT DETECTION USING YOLO26l-seg.pt
# ==========================================

# 1. Load YOLO26l-seg.pt model
model = YOLO("yolo26l-seg.pt")

# 2. Input images
image_paths = [
    "images/bag.jpg",
    "images/books.png",
    "images/bottles.jpg",
    "images/chairs.jpg",
    "images/laptop.jpg",
    "images/apples.jpg",
    
    ]

# 3. Create output folder
output_folder = "output/task3"
os.makedirs(output_folder, exist_ok=True)

# 4. Store results
all_results = []

# 5. Process each image
for image_path in image_paths:

    if not os.path.exists(image_path):
        print(f"Image not found: {image_path}")
        continue

    print(f"\nProcessing: {image_path}")

    # Run object detection
    results = model.predict(
        source=image_path,
        conf=0.25,
        verbose=False
    )

    detected_objects = {}

    for result in results:

        # Save image with bounding boxes
        annotated_image = result.plot()

        output_image = os.path.join(
            output_folder,
            os.path.basename(image_path)
        )

        cv2.imwrite(output_image, annotated_image)

        # Extract detected objects
        for box in result.boxes:

            class_id = int(box.cls.item())
            class_name = model.names[class_id]
            confidence = float(box.conf.item())

            if class_name not in detected_objects:
                detected_objects[class_name] = {
                    "quantity": 0,
                    "confidence_percentage": []
                }

            detected_objects[class_name]["quantity"] += 1

            detected_objects[class_name]["confidence_percentage"].append(
                round(confidence * 100, 2)
            )

    # Prepare JSON result
    image_result = {
        "image": os.path.basename(image_path),
        "objects": [
            {
                "object": name,
                "quantity": details["quantity"],
                "confidence_percentage": details["confidence_percentage"]
            }
            for name, details in detected_objects.items()
        ]
    }

    all_results.append(image_result)

    print(json.dumps(image_result, indent=4))

# 6. Save JSON output
json_path = os.path.join(output_folder, "task3_output.json")

with open(json_path, "w", encoding="utf-8") as file:
    json.dump(all_results, file, indent=4)

print("\n======================================")
print("TASK 3 COMPLETED SUCCESSFULLY!")
print("Model Used: YOLO26l-seg.pt")
print(f"Images Processed: {len(all_results)}")
print(f"JSON Results: {json_path}")
print(f"Detected Images: {output_folder}")
print("======================================")