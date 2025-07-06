import json
import random

names = ["Kaviya", "Satner", "Arun", "Priya", "Divya", "Ravi"]
users = []

for i in range(1, 6):
    user = {
        "id": i,
        "name": random.choice(names),
        "email": f"user{i}@example.com"
    }
    users.append(user)

with open("db.json", "w") as f:
    json.dump({"users": users}, f, indent=2)

print("✅ db.json generated with sample users.")
