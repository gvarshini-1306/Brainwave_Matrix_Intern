function showPage(pageId) {
    const pages = document.querySelectorAll('.page');
    pages.forEach(page => {
        page.classList.add('hidden');
    });
    document.getElementById(pageId).classList.remove('hidden');
}

function addMedication() {
    const name = document.getElementById('medication-name').value;
    const dosage = document.getElementById('medication-dosage').value;
    if (name && dosage) {
        const listItem = document.createElement('li');
        listItem.textContent = `${name} - ${dosage}`;
        document.getElementById('medication-list').appendChild(listItem);
        document.getElementById('medication-name').value = '';
        document.getElementById('medication-dosage').value = '';
    } else {
        alert('Please enter both medication name and dosage.');
    }
}

// Initialize the app by showing the home page
document.addEventListener('DOMContentLoaded', () => {
    showPage('home');
});
