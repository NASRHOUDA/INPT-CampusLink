window.onload = function () {
    // Variables pour la section d'enregistrement
    const welcomeSection = document.getElementById('welcomeSection');
    const registrationSection = document.getElementById('registrationSection');
    const startButton = document.getElementById('startButton');
    const registerForm = document.getElementById('registerForm');
    const loginLink = document.getElementById('loginLink');

    // Variables pour la section de publication
    const addPostButton = document.querySelector('.add-post-btn');
    const content = document.querySelector('.content');
    const createPostButton = document.querySelector('.btn-create-post');
    const postBoxTextarea = document.querySelector('.post-box-textarea');
    const postsContainer = document.querySelector('.posts');

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
            alert('Les mots de passe ne correspondent pas !');
            return;
        }

        if (name && email && password && confirmPassword) {
            alert('Inscription réussie!');
            // Vous pouvez ajouter des actions ici (par exemple, rediriger l'utilisateur)
        } else {
            alert('Veuillez remplir tous les champs.');
        }
    });

    // Rediriger vers la page de connexion si l'utilisateur a déjà un compte
    loginLink.addEventListener('click', function (event) {
        event.preventDefault();
        alert('Redirection vers la page de connexion...');
        // Redirection vers la page de connexion (si implémentée)
    });

    // Lorsque l'utilisateur clique sur le bouton "+" pour créer une publication
    addPostButton.addEventListener('click', function () {
        content.style.display = 'block'; // Afficher la zone de publication
        addPostButton.style.display = 'none'; // Masquer le bouton "+"
    });

    // Créer une publication
    createPostButton.addEventListener('click', function () {
        const postContent = postBoxTextarea.value.trim();

        if (postContent !== "") {
            const newPost = document.createElement('div');
            newPost.classList.add('post');

            // En-tête du post
            const postHeader = document.createElement('div');
            postHeader.classList.add('post-header');

            const userImage = document.createElement('img');
            userImage.src = 'https://via.placeholder.com/50'; // Image utilisateur
            userImage.alt = 'User';
            userImage.classList.add('profile-pic');
            postHeader.appendChild(userImage);

            const userInfo = document.createElement('div');
            const userName = document.createElement('strong');
            userName.textContent = 'Nom de l\'utilisateur';
            const postTime = document.createElement('span');
            postTime.classList.add('time');
            postTime.textContent = 'Il y a quelques secondes';
            userInfo.appendChild(userName);
            userInfo.appendChild(postTime);
            postHeader.appendChild(userInfo);

            newPost.appendChild(postHeader);

            // Contenu du post (texte)
            const postContentDiv = document.createElement('div');
            const postText = document.createElement('p');
            postText.textContent = postContent;
            postContentDiv.appendChild(postText);
            newPost.appendChild(postContentDiv);

            // Réactions du post
            const postActions = document.createElement('div');
            postActions.classList.add('post-actions');

            const reactions = ['👍', '❤️', '😂', '😡', '💬', '🔗'];

            reactions.forEach(symbol => {
                const button = document.createElement('button');
                button.classList.add('reaction');
                button.innerHTML = symbol;
                postActions.appendChild(button);
            });

            newPost.appendChild(postActions);

            // Section des commentaires (initialement masquée)
            const commentsSection = document.createElement('div');
            commentsSection.classList.add('comments-section', 'hidden'); // section masquée

            const commentBox = document.createElement('textarea');
            commentBox.classList.add('comment-box');
            commentBox.placeholder = 'Écrire un commentaire...';
            commentsSection.appendChild(commentBox);

            const commentButton = document.createElement('button');
            commentButton.classList.add('btn-comment');
            commentButton.textContent = 'Publier';
            commentsSection.appendChild(commentButton);

            newPost.appendChild(commentsSection);

            postsContainer.prepend(newPost);

            // Réinitialiser la zone de texte
            postBoxTextarea.value = '';

            // Réafficher le bouton "+" après la publication
            addPostButton.style.display = 'block';
            content.style.display = 'none'; // Masquer la zone de publication après publication
        } else {
            alert('Veuillez écrire quelque chose avant de publier !');
        }
    });

    // Gestion des interactions (réactions et commentaires)
    postsContainer.addEventListener('click', function (e) {
        // Afficher/Masquer les commentaires quand on clique sur l'icône des commentaires (💬)
        if (e.target.classList.contains('reaction') && e.target.innerHTML === '💬') {
            const commentsSection = e.target.closest('.post').querySelector('.comments-section');
            commentsSection.classList.toggle('hidden');
        }

        // Ajouter un commentaire
        if (e.target.classList.contains('btn-comment')) {
            const commentBox = e.target.closest('.comments-section').querySelector('.comment-box');
            const commentText = commentBox.value.trim();

            if (commentText !== "") {
                const commentDiv = document.createElement('div');
                commentDiv.classList.add('comment');
                commentDiv.textContent = commentText;
                e.target.closest('.comments-section').appendChild(commentDiv);

                // Réinitialiser la boîte de commentaire
                commentBox.value = '';
            } else {
                alert('Veuillez écrire un commentaire avant de publier !');
            }
        }
    });
};
