// Define variables for light-Dark mode toggle
const displaychange = document.getElementById('displaychange');
const lightmode = document.querySelector('.lightmode');

// set default mode to light mode
let mode = 'light';

// Event to change the theme based on user preference
displaychange.addEventListener('click', function() {
    //  if light mode, change to dark mode
    if (mode === 'light') {
        mode = 'dark';
        lightmode.className = 'dark';
        displaychange.textContent = '🌒'
        console.log('dark mode');
    } 
    //  if dark mode, change to light mode
    else {
        mode = 'light';
        lightmode.className = 'light';
        displaychange.textContent = '☀️'
        console.log('light mode');
    }
});