// Handle form submission on return-enter.html (submit or update return details)
document.getElementById('returnForm')?.addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission
  
    // Get form values
    const rollNumber = document.getElementById('rollNumber').value;
    const contactNumber = document.getElementById('contactNumber').value;
    const bookName = document.getElementById('bookName').value;
    const bookId = document.getElementById('bookId').value; // Updated to bookId
    const returnDate = document.getElementById('returnDate').value;
  
    // Create an object to hold the return details
    const returnDetails = {
      rollNumber,
      contactNumber,
      bookName,
      bookId, // Updated to bookId
      returnDate
    };
  
    // Get existing returns from localStorage
    let returnedBooks = JSON.parse(localStorage.getItem('returnedBooks')) || [];
  
    // Check if we are editing an existing book (using an ID or index)
    const isEditing = localStorage.getItem('editingIndex') !== null;
    if (isEditing) {
      const editingIndex = localStorage.getItem('editingIndex');
      returnedBooks[editingIndex] = returnDetails; // Update the book at the specified index
      localStorage.removeItem('editingIndex'); // Clear the editingIndex from localStorage
    } else {
      // Add the new return details to the array
      returnedBooks.push(returnDetails);
    }
  
    // Save the updated list to localStorage
    localStorage.setItem('returnedBooks', JSON.stringify(returnedBooks));
  
    // Clear the form and reset editing mode
    this.reset();
    alert("Return details saved!");
  });
  
  // Load books from localStorage and display on return-records.html
  function displayReturnedBooks() {
    const detailsBody = document.getElementById('detailsBody');
    detailsBody.innerHTML = ''; // Clear previous entries
  
    const returnedBooks = JSON.parse(localStorage.getItem('returnedBooks')) || [];
    returnedBooks.forEach((book, index) => {
      const row = document.createElement('tr');
      row.innerHTML = `
        <td>${book.rollNumber}</td>
        <td>${book.contactNumber}</td>
        <td>${book.bookName}</td>
        <td>${book.bookId}</td> <!-- Updated to bookId -->
        <td>${book.returnDate}</td>
        <td>
          <a href="return-enter.html?edit=true&index=${index}">Edit</a>
          <button class="delete-btn" onclick="deleteReturnBook(${index})">Delete</button>
        </td>
      `;
      detailsBody.appendChild(row);
    });
  }
  
  // Call display function to show data on return-records.html
  if (document.getElementById('detailsBody')) {
    displayReturnedBooks();
  }
  
  // Load query parameters on return-enter.html and pre-fill the form for editing
  const urlParams = new URLSearchParams(window.location.search);
  const editingIndex = urlParams.get('index');
  if (editingIndex !== null) {
    const returnedBooks = JSON.parse(localStorage.getItem('returnedBooks')) || [];
    const bookToEdit = returnedBooks[editingIndex];
    
    // Prefill form fields
    document.getElementById('rollNumber').value = bookToEdit.rollNumber;
    document.getElementById('contactNumber').value = bookToEdit.contactNumber;
    document.getElementById('bookName').value = bookToEdit.bookName;
    document.getElementById('bookId').value = bookToEdit.bookId; // Updated to bookId
    document.getElementById('returnDate').value = bookToEdit.returnDate;
  
    // Set the editing index in localStorage
    localStorage.setItem('editingIndex', editingIndex);
  }
  
  // Function to delete a return record
  function deleteReturnBook(index) {
    // Get existing returns from localStorage
    let returnedBooks = JSON.parse(localStorage.getItem('returnedBooks')) || [];
  
    // Remove the book at the specified index
    returnedBooks.splice(index, 1);
  
    // Save the updated list to localStorage
    localStorage.setItem('returnedBooks', JSON.stringify(returnedBooks));
  
    // Refresh the page to show the updated list
    displayReturnedBooks();
  }
  