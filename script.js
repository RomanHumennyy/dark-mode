document.addEventListener('DOMContentLoaded', (event) => {
    const toggleButton = document.getElementById('mode-toggle');
    const body = document.body;

    toggleButton.addEventListener('click', () => {
        if (body.classList.contains('light-mode')) {
            body.classList.replace('light-mode', 'dark-mode');
            toggleButton.textContent = 'Light Mode';
        } else {
            body.classList.replace('dark-mode', 'light-mode');
            toggleButton.textContent = 'Dark Mode';
        }
    });

    // Initial mode setup
    body.classList.add('light-mode');
});
