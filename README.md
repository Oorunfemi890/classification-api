# 📊 Number Classification API

## 🚀 Overview
This API classifies numbers based on mathematical properties and provides a fun fact.

## 🔧 Features
- Prime number check
- Perfect number check
- Armstrong number check
- Odd/Even classification
- Digit sum calculation
- Retrieves a fun fact from Numbers API
- CORS enabled

## 📡 API Endpoint
### GET `/api/classify-number?number=<your_number>`

### ✅ Example Response (200 OK)
```json
{
  "number": 371,
  "is_prime": false,
  "is_perfect": false,
  "properties": ["armstrong", "odd"],
  "digit_sum": 11,
  "fun_fact": "371 is an Armstrong number because 3^3 + 7^3 + 1^3 = 371"
}
