document.addEventListener("DOMContentLoaded", () => {
    const tipForm = document.getElementById("tip-form");
    const transactionList = document.getElementById("transaction-list");
    const commentsList = document.getElementById("comments-list");
    const tipHistoryList = document.getElementById("tip-list");
    const visitCountElement = document.getElementById("visit-count"); // Updated

    // Function to fetch and display historical data
    const displayHistoricalData = () => {
        // Fetch historical transaction data (You can fetch from a server or local storage)
        fetch("/transactions")
            .then((response) => {
                if (!response.ok) {
                    throw new Error("Network response was not ok");
                }
                return response.json();
            })
            .then((data) => {
                transactionList.innerHTML = '';
                data.forEach((transaction) => {
                    const transactionItem = document.createElement("li");
                    transactionItem.textContent = `Sent ${transaction.tipAmount} ADA to ${transaction.recipientAddress}`;
                    transactionList.appendChild(transactionItem);
                });
            })
            .catch((error) => {
                console.error("Error fetching transaction data:", error);
            });

        // Fetch historical comment data (You can fetch from a server or local storage)
        fetch("/comments")
            .then((response) => {
                if (!response.ok) {
                    throw new Error("Network response was not ok");
                }
                return response.json();
            })
            .then((data) => {
                commentsList.innerHTML = '';
                data.forEach((comment) => {
                    const commentItem = document.createElement("li");
                    commentItem.textContent = `Comment: ${comment.text}`;
                    commentsList.appendChild(commentItem);
                });
            })
            .catch((error) => {
                console.error("Error fetching comment data:", error);
            });

        // Fetch and display tip data
        fetch("/tips")
            .then((response) => {
                if (!response.ok) {
                    throw new Error("Network response was not ok");
                }
                return response.json();
            })
            .then((data) => {
                tipHistoryList.innerHTML = '';
                data.forEach((tip) => {
                    const tipItem = document.createElement("li");
                    tipItem.textContent = `Address: ${tip.address}, Tip Amount: ${tip.tipAmount} ADA`;
                    tipHistoryList.appendChild(tipItem);
                });
            })
            .catch((error) => {
                console.error("Error fetching tip data:", error);
            });
    };

    // Function to update and display the visit count
    const updateVisitCount = () => {
        let visitCount = localStorage.getItem("visitCount") || 0;
        visitCount = parseInt(visitCount) + 1;
        localStorage.setItem("visitCount", visitCount);

        visitCountElement.textContent = `Visits: ${visitCount}`; // Updated
    };

    // Call the function to update and display the visit count
    updateVisitCount();

    tipForm.addEventListener("submit", async (e) => {
        e.preventDefault();
        const recipientAddress = document.getElementById("recipient-address").value;
        const tipAmount = document.getElementById("tip-amount").value;
        const comment = document.getElementById("comment").value;

        // You would need to implement the actual tip-sending logic here.
        // For simplicity, we'll just add a transaction and comment to the history.

        const transactionItem = document.createElement("li");
        transactionItem.textContent = `Sent ${tipAmount} ADA to ${recipientAddress}`;
        transactionList.appendChild(transactionItem);

        const commentItem = document.createElement("li");
        commentItem.textContent = `Comment: ${comment}`;
        commentsList.appendChild(commentItem);

        // Clear the form fields
        document.getElementById("recipient-address").value = "";
        document.getElementById("tip-amount").value = "";
        document.getElementById("comment").value = "";

        // Save the transaction and comment data to the server or local storage
        saveDataToServer({ tipAmount, recipientAddress }, "/transactions");
        saveDataToServer({ text: comment }, "/comments");

        // Save the tip data to the server
        saveDataToServer({ address: recipientAddress, tipAmount }, "/tips");
    });

    // Function to save data to the server
    const saveDataToServer = (data, endpoint) => {
        fetch(endpoint, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
        })
            .then((response) => {
                if (!response.ok) {
                    throw new Error("Network response was not ok");
                }
                return response.json();
            })
            .then((result) => {
                console.log(result.message);
            })
            .catch((error) => {
                console.error("Error saving data to server:", error);
            });
    };
    document.addEventListener("DOMContentLoaded", () => {
        const tipForm = document.getElementById("tip-form");
        const coinEmoji = document.getElementById("coin-emoji"); // Get a reference to the coin emoji
    
        // Add a click event listener to the "Send Tip" button
        document.getElementById("send-tip-button").addEventListener("click", () => {
            // Add the "jiggle" class to the coin emoji
            coinEmoji.classList.add("jiggle");
    
            // Remove the "jiggle" class after the animation completes
            setTimeout(() => {
                coinEmoji.classList.remove("jiggle");
            }, 500); // Adjust the timeout to match the animation duration
        });
    
        // Rest of your code...
    });
    document.addEventListener("DOMContentLoaded", () => {
        const transactionList = document.getElementById("transaction-list");
    
        // Function to fetch and display transaction history
        const displayTransactionHistory = () => {
            // Fetch transaction data from your JSON file
            fetch("/transactions.json")
                .then((response) => {
                    if (!response.ok) {
                        throw new Error("Network response was not ok");
                    }
                    return response.json();
                })
                .then((data) => {
                    // Clear the transaction list
                    transactionList.innerHTML = '';
    
                    // Iterate through the data and create list items for each transaction
                    data.forEach((transaction) => {
                        const transactionItem = document.createElement("li");
                        transactionItem.textContent = `Sent ${transaction.tipAmount} ADA to ${transaction.recipientAddress}`;
                        transactionList.appendChild(transactionItem);
                    });
                })
                .catch((error) => {
                    console.error("Error fetching transaction data:", error);
                });
        };
    
        // Call the function to display transaction history
        displayTransactionHistory();
    });
    
    
});
