// Select the necessary elements from the DOM
const input = document.querySelector('#favchap');
const button = document.querySelector('#addChapterBtn');
const list = document.querySelector('#list');

// Add a click event listener to the "Add Chapter" button
button.addEventListener('click', () => {
    // Trim input value and check if it is empty
    const chapter = input.value.trim();
    
    if (chapter === '') {
        alert('Please enter a book and chapter.');
        input.focus();
        return;
    }

    // Create list item (li) and delete button
    const li = document.createElement('li');
    const deleteButton = document.createElement('button');

    // Assign input value to the <li> and set delete button text
    li.textContent = chapter;
    deleteButton.textContent = '❌';
    deleteButton.classList.add('delete');

    // Append the delete button to the list item
    li.appendChild(deleteButton);
    list.appendChild(li);

    // Add event listener to the delete button
    deleteButton.addEventListener('click', () => {
        list.removeChild(li);
        input.focus();
    });

    // Clear the input field and refocus
    input.value = '';
    input.focus();
});