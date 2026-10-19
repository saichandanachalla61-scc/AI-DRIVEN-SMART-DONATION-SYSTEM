import os
from dotenv import load_dotenv
from google import genai
from langchain_google_genai import ChatGoogleGenerativeAI

# Step 1: Load API key from .env
load_dotenv()
api_key = os.getenv("GOOGLE_API_KEY")

if not api_key:
    raise ValueError("GOOGLE_API_KEY is missing in .env")

# Step 2: Connect to Gemini API
client = genai.Client(api_key=api_key)

# Step 3: List all available models
print("Available Gemini API models:\n")

model_names = []

for model in client.models.list():
    print(model.name)

    # Keep only Gemini text generation models
    if (
        model.name
        and "gemini" in model.name.lower()
        and "generateContent" in (model.supported_actions or [])
    ):
        model_names.append(model.name)

# Step 4: Select a model
if not model_names:
    raise RuntimeError("No Gemini generation models found.")

print("\nModels supporting text generation:")
for index, name in enumerate(model_names, start=1):
    print(f"{index}. {name}")

choice = int(input("\nEnter model number: "))

if not 1 <= choice <= len(model_names):
    raise ValueError("Invalid model number")

selected_model = model_names[choice - 1]
selected_model = selected_model.removeprefix("models/")

# Step 5: Initialize LangChain model
llm = ChatGoogleGenerativeAI(
    model=selected_model,
    google_api_key=api_key
)

# Step 6: Ask a question
question = input("\nEnter your question: ")

# Step 7: Get response
response = llm.invoke(question)

# Step 8: Print response
print("\nGemini Response:\n")
print(response.text)
