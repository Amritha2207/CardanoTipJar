import pandas as pd
from openpyxl import Workbook
import json

# Load transaction data from the JSON file
with open("transactions.json", "r") as json_file:
    data = json.load(json_file)

# Create a Pandas DataFrame from the JSON data
df = pd.DataFrame(data)

# Create a new Excel writer object
writer = pd.ExcelWriter("transaction_history.xlsx", engine="openpyxl")

# Write the DataFrame to the Excel file
df.to_excel(writer, sheet_name="Transaction History", index=False)

# Save the Excel file
writer.save()

print("Transaction history exported to transaction_history.xlsx")
