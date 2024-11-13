// Function to save book data and store it in local storage
function saveBookData(event) {
    event.preventDefault(); // Prevent form from submitting normally

    // Get form values
    const rollNumber = document.getElementById("rollNumber").value;
    const contactNumber = document.getElementById("contactNumber").value;
    const bookName = document.getElementById("bookName").value;
    const sNo = document.getElementById("sNo").value;
    const returnDate = document.getElementById("returnDate").value;

    // Create a book object
    const book = { rollNumber, contactNumber, bookName, sNo, returnDate };

    // Retrieve existing book data from local storage or initialize as an empty array
    const bookData = JSON.parse(localStorage.getItem("bookData")) || [];

    // Add the new book to the array
    bookData.push(book);

    // Save the updated array back to local storage
    localStorage.setItem("bookData", JSON.stringify(bookData));

    // Clear form fields
    document.getElementById("returnForm").reset();

    // Optional: alert user of successful submission
    alert("Book return details saved successfully!");
}

// Function to display the book data in the table
function displayBookData() {
    // Retrieve book data from local storage or default to an empty array if no data exists
    const bookData = JSON.parse(localStorage.getItem("bookData")) || [];
    const tableBody = document.getElementById("tableBody");
    
    // Clear any existing rows in the table
    tableBody.innerHTML = "";

    // Populate the table with each book's data
    bookData.forEach(book => {
        const row = document.createElement("tr");
        row.innerHTML = `
            <td>${book.rollNumber}</td>
            <td>${book.contactNumber}</td>
            <td>${book.bookName}</td>
            <td>${book.sNo}</td>
            <td>${book.returnDate}</td>
        `;
        tableBody.appendChild(row);
    });
}

// Function to clear the table data from local storage and refresh the display
function clearTableData() {
    // Remove the book data from local storage
    localStorage.removeItem("bookData");
    
    // Refresh the table display to show an empty state
    displayBookData();
}

// Call displayBookData on page load to populate the table
window.onload = displayBookData;
