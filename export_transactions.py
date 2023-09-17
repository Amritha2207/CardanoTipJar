import json

def view_transaction_data(transactions.json):
    try:
        with open(transactions.json, 'r') as file:
            data = json.load(file)
            # Process the data as needed
            for transaction in data:
                print(transaction)
    except FileNotFoundError:
        print(f"File '{transactions.json}' not found.")

if __name__ == "__main__":
    view_transaction_data("transactions.json")
