// This is a simple script.js file for a personal website

// Function to show CV
function showCV() {
    var cvContent = document.getElementById('cvContent');
    cvContent.style.display = 'block';
}

// Function to show Publications
function showPublications() {
    var publicationsContent = document.getElementById('publicationsContent');
    publicationsContent.style.display = 'block';
}

// Add event listeners to buttons
document.getElementById('cvButton').addEventListener('click', showCV);
document.getElementById('publicationsButton').addEventListener('click', showPublications);
