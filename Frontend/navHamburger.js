// Get elements
const hamburger = document.getElementById('hamburger');
const sidebar = document.getElementById('sidebar');

// Toggle the sidebar on click
hamburger.addEventListener('click', function() {
  sidebar.classList.toggle('active');
});
