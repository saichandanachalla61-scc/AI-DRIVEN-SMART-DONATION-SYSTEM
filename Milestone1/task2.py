import json

# Model used for image analysis
model_name = "gemini-3.1-flash-lite"

# Given image analysis results
data = [
    {
        "image": "images.jpeg",
        "objects": [
            {
                "object": "book",
                "quantity": 4,
                "confidence_percentage": 100.0
            }
        ]
    },
    {
        "image": "stack-clothes-11072239.jpg",
        "objects": [
            {
                "object": "T-shirt",
                "quantity": 20,
                "confidence_percentage": 98.0
            }
        ]
    }
]

# Print model name
print("Model Used:", model_name)
print("-" * 40)

# Print image analysis results
for item in data:
    print("Image:", item["image"])

    for obj in item["objects"]:
        print("Object Name:", obj["object"])
        print("Quantity:", obj["quantity"])
        print(
            "Confidence Percentage:",
            obj["confidence_percentage"], "%"
        )
        print()

