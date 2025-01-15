window.onload = function () {
    const welcomeSection = document.getElementById('welcomeSection');
    const registrationSection = document.getElementById('registrationSection');
    const startButton = document.getElementById('startButton');
    const registerForm = document.getElementById('registerForm');
    const loginLink = document.getElementById('loginLink');

    // Afficher la section d'enregistrement après le clic sur "Start"
    startButton.addEventListener('click', function () {
        welcomeSection.classList.add('hidden'); // Masquer la section de bienvenue
        registrationSection.classList.remove('hidden'); // Afficher la section d'enregistrement
    });



    // Lors de la soumission du formulaire d'inscription
    registerForm.addEventListener('submit', function (event) {
        event.preventDefault(); // Empêche l'envoi du formulaire
        const name = document.getElementById('registerName').value;
        const email = document.getElementById('registerEmail').value;
        const password = document.getElementById('registerPassword').value;
        const confirmPassword = document.getElementById('registerConfirmPassword').value;

        // Validation des champs
        if (password !== confirmPassword) {
            alert('Passwords do not match!');
            return;
        }

        if (name && email && password && confirmPassword) {
            alert('Registration successful!');
            // Vous pouvez ajouter des actions ici (par exemple, rediriger l'utilisateur)
        } else {
            alert('Please fill in all fields.');
        }
    });

    // Rediriger vers la page de connexion si l'utilisateur a déjà un compte
    loginLink.addEventListener('click', function (event) {
        event.preventDefault();
        alert('Redirecting to login page...');
        // Redirection vers la page de connexion (si implémentée)
    });
};


function idkwtthat(){
    window.location.href = 'PAGE 3.html';
}
