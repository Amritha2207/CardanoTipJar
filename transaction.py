import json

# Function to load and display transaction data
def view_transaction_data(transactions.json):
    try:
        with open(transactions.json, 'r') as file:
            transaction_data = json.load(file)
            for transaction in transaction_data:
                print(f"Sent {transaction['tipAmount']} ADA to {transaction['recipientAddress']}")
    except FileNotFoundError:
        print("Transaction data file not found.")

# Example usage:

# View transaction data from 'transactions.json'
view_transaction_data('transactions.json')
