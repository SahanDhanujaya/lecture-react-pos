# Json Format Relatet to order

{
  "id": 1001,
  "items": [
    {
      "customer": {
        "id": 1,
        "name": "Alice Johnson",
        "email": "alice.johnson@example.com",
        "phone": "+1-555-123-4567"
      },
      "product": {
        "id": 101,
        "name": "Wireless Bluetooth Headphones",
        "category": "Electronics",
        "price": 79.99
      },
      "qty": 2,
      "discount": 10,
      "discountType": "percentage",
      "price": 143.98
    },
    {
      "customer": {
        "id": 1,
        "name": "Alice Johnson",
        "email": "alice.johnson@example.com",
        "phone": "+1-555-123-4567"
      },
      "product": {
        "id": 205,
        "name": "USB-C Charging Cable",
        "category": "Accessories",
        "price": 14.99
      },
      "qty": 3,
      "discount": 5,
      "discountType": "fixed",
      "price": 39.97
    }
  ],
  "customerName": "Alice Johnson",
  "totalAmount": 183.95,
  "date": "2025-01-15T10:30:00Z"
}