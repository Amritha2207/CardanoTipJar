import json

# Function to load tip data from a JSON file
def load_tip_data(tips.json):
    try:
        with open(tips.json, 'r') as file:
            return json.load(file)
    except FileNotFoundError:
        return []

# Function to save tip data to a JSON file
def save_tip_data(filename, data):
    with open(filename, 'w') as file:
        json.dump(data, file, indent=4)

# Example usage:

# Load existing tip data
tip_data = load_tip_data('tips.json')

# Add a new tip to the data
new_tip = {
    "address": "recipient_address",
    "tipAmount": 10.0
}
tip_data.append(new_tip)

# Save the updated tip data
save_tip_data('tips.json', tip_data)
