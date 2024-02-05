function toggleTheme() {
    if (document.body.style.backgroundColor === 'white' || document.body.style.backgroundColor === '') {
        document.body.style.backgroundColor = 'black';
        document.body.style.color = 'white';
        const darkModeSpan = document.getElementById('dark');
        darkModeSpan.style.backgroundColor = 'white';
        darkModeSpan.style.color = 'black';
    } else {
        document.body.style.backgroundColor = 'white';
        document.body.style.color = 'black';
        const darkModeSpan = document.getElementById('dark');
        darkModeSpan.style.backgroundColor = 'black';
        darkModeSpan.style.color = 'white';
    }
}
