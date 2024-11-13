let availableBooks = [];

function addBook(book) {
    // Add the book to the available books array
    availableBooks.push(book);
    // Update the available books display
    updateAvailableBooksDisplay();
}

function updateAvailableBooksDisplay() {
    const booksTable = document.getElementById('availableBooksTable');
    booksTable.innerHTML = ''; // Clear the current table

    availableBooks.forEach(book => {
        const row = booksTable.insertRow();
        const cell = row.insertCell(0);
        cell.textContent = book.title; // Assuming book has a title property
    });
}

// Example usage
addBook({ title: 'The Great Gatsby' });
addBook({ title: '1984' });