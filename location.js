document.getElementById('locationLink').addEventListener('click', function(event) {
    event.preventDefault();
    document.getElementById('locationInfo').style.display = 'block';
});

document.getElementById('closeLocationBtn').addEventListener('click', function() {
    document.getElementById('locationInfo').style.display = 'none';
});