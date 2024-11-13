document.getElementById('returnForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission

    // Get form values
    const rollNumber = document.getElementById('rollNumber').value;
    const contactNumber = document.getElementById('contactNumber').value;
    const bookName = document.getElementById('bookName').value;
    const sNo = document.getElementById('sNo').value;
    const returnDate = document.getElementById('returnDate').value;

    // Create an object to hold the return details
    const returnDetails = {
        rollNumber,
        contactNumber,
        bookName,
        sNo,
        returnDate
    };

    // Get existing returns from local storage
    let returnedBooks = JSON.parse(localStorage.getItem('returnedBooks')) || [];
    
    // Add the new return detail to the array
    returnedBooks.push(returnDetails);
    
    // Save back to local storage
    localStorage.setItem('returnedBooks', JSON.stringify(returnedBooks));

    // Clear the form
    this.reset();

    // Update the displayed details
    displayReturnedBooks();
});

// Function to display returned books
function displayReturnedBooks() {
    const detailsBody = document.getElementById('detailsBody');
    detailsBody.innerHTML = ''; // Clear previous entries

    const returnedBooks = JSON.parse(localStorage.getItem('returnedBooks')) || [];
    
    returnedBooks.forEach(book => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${book.rollNumber}</td>
            <td>${book.contactNumber}</td>
            <td>${book.bookName}</td>
            <td>${book.sNo}</td>
            <td>${book.returnDate}</td>
        `;
        detailsBody.appendChild(row);
    });
}

// Call the function to display data on page load
displayReturnedBooks();
