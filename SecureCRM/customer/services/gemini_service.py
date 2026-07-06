import google.generativeai as genai

from django.conf import settings


# Configure Gemini using the API key from settings.py
genai.configure(api_key=settings.GEMINI_API_KEY)


# Load the Gemini model
model = genai.GenerativeModel("gemini-2.5-flash")


def generate_customer_summary(customer):

    prompt = f"""
    You are an AI assistant inside an Enterprise CRM.

    Generate a professional customer summary.

    Customer Details

    Name: {customer.name}

    Email: {customer.email}

    Phone: {customer.phone}

    Address: {customer.address}

    Keep the response within 80 words.
    """

    response = model.generate_content(prompt)

    return response.text