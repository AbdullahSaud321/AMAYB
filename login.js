document.addEventListener('DOMContentLoaded', function () {
    const loginButton = document.getElementById('login');
    const registerButton = document.getElementById('register');
    const mobileSignUpButton = document.getElementById('mobile-sign-up'); // Existing mobile sign-up button
    const mobileSignInButton = document.getElementById('mobile-sign-in'); // New mobile sign-in button
    const signInButton = document.getElementById('sign-in-btn'); // Sign in button
    const container = document.getElementById('container');

    // Function to handle Sign In button click
    const handleSignInClick = () => {
        container.classList.remove('active');
        if (window.innerWidth <= 768) {
            document.querySelector('.sign-up').style.display = 'none';
            document.querySelector('.sign-in').style.display = 'block';
        }
    };

    // Function to handle Sign Up button click
    const handleSignUpClick = () => {
        container.classList.add('active');
        if (window.innerWidth <= 768) {
            document.querySelector('.sign-in').style.display = 'none'; 
            document.querySelector('.sign-up').style.display = 'block';
        }
    };

    // Function to handle the actual sign-in process
    const handleSignIn = () => {
        const email = document.getElementById('login-email').value;
        const password = document.getElementById('login-password').value;

        // Simulate login process and redirect based on email
        if (email === 'student@amayb.com' && password ==='student123') {
            window.location.href = 'index_student.html';
        } else if (email === 'admin@amayb.com' && password === 'admin123') {
            window.location.href = 'index_admin.html';
        } else if (email === 'librarian@amayb.com' && password === 'librarian123') {
            window.location.href = 'index_librarian.html';
        } else {
            alert('Invalid email or password');
        }
    };

    // Adding event listeners
    loginButton?.addEventListener('click', handleSignInClick);
    mobileSignInButton?.addEventListener('click', handleSignInClick);

    registerButton?.addEventListener('click', handleSignUpClick);
    mobileSignUpButton?.addEventListener('click', handleSignUpClick);

    signInButton?.addEventListener('click', handleSignIn);

    // Handle window resize event
    window.addEventListener('resize', () => {
        if (window.innerWidth > 768) {
            document.querySelector('.sign-up').style.display = '';
            document.querySelector('.sign-in').style.display = '';
        } else {
            if (!container.classList.contains('active')) {
                document.querySelector('.sign-up').style.display = 'none';
                document.querySelector('.sign-in').style.display = 'block';
            } else {
                document.querySelector('.sign-in').style.display = 'none';
                document.querySelector('.sign-up').style.display = 'block';
            }
        }
    });

    // Ensure correct display on page load
    window.addEventListener('load', () => {
        if (window.innerWidth <= 768) {
            if (!container.classList.contains('active')) {
                document.querySelector('.sign-up').style.display = 'none';
                document.querySelector('.sign-in').style.display = 'block';
            } else {
                document.querySelector('.sign-in').style.display = 'none';
                document.querySelector('.sign-up').style.display = 'block';
            }
        }
    });
});