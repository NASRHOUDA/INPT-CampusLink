document.addEventListener('DOMContentLoaded', function () {
    // Ajouter une nouvelle publication
    const createPostButton = document.querySelector('.btn-create-post');
    const postBoxTextarea = document.querySelector('.post-box textarea');
    const postsContainer = document.querySelector('.posts');

    createPostButton.addEventListener('click', function () {
        const postContent = postBoxTextarea.value.trim();

        if (postContent !== "") {
            const newPost = document.createElement('div');
            newPost.classList.add('post');

            const postHeader = document.createElement('div');
            postHeader.classList.add('post-header');

            const userImage = document.createElement('img');
            userImage.src = 'profile-pic.jpg';  // Image de profil
            userImage.alt = 'User';
            postHeader.appendChild(userImage);

            const userName = document.createElement('strong');
            userName.textContent = 'Nom de l\'utilisateur';  // Nom de l'utilisateur
            postHeader.appendChild(userName);

            const postTime = document.createElement('span');
            postTime.textContent = 'Il y a quelques secondes';  // Heure
            postHeader.appendChild(postTime);

            newPost.appendChild(postHeader);

            const postText = document.createElement('p');
            postText.textContent = postContent;  // Contenu de la publication
            newPost.appendChild(postText);

            const postActions = document.createElement('div');
            postActions.classList.add('post-actions');

            const likeButton = document.createElement('button');
            likeButton.textContent = 'J\'aime';
            postActions.appendChild(likeButton);

            const commentButton = document.createElement('button');
            commentButton.textContent = 'Commenter';
            postActions.appendChild(commentButton);

            const shareButton = document.createElement('button');
            shareButton.textContent = 'Partager';
            postActions.appendChild(shareButton);

            newPost.appendChild(postActions);

            postsContainer.prepend(newPost);  // Ajouter la publication en haut de la liste des posts

            // Réinitialiser le champ de texte après la publication
            postBoxTextarea.value = '';
        } else {
            alert('Veuillez écrire quelque chose avant de publier !');
        }
    });

    // Ajouter une notification
    const notificationsButton = document.querySelector('.fas.fa-bell');
    const notificationsContainer = document.createElement('div');
    notificationsContainer.classList.add('notifications-container');

    notificationsButton.addEventListener('click', function () {
        const newNotification = document.createElement('div');
        newNotification.classList.add('notification');
        newNotification.textContent = 'Nouvelle notification: Mise à jour du statut de votre candidature.';

        notificationsContainer.appendChild(newNotification);

        // Afficher les notifications dans la barre latérale
        document.body.appendChild(notificationsContainer);

        // Retirer la notification après 5 secondes
        setTimeout(function () {
            notificationsContainer.removeChild(newNotification);
        }, 5000);
    });

    // Recherche simple (affichage de suggestions basées sur ce que l'utilisateur tape)
    const searchButton = document.querySelector('.fas.fa-search');
    const searchContainer = document.createElement('div');
    searchContainer.classList.add('search-suggestions');
    const searchInput = document.createElement('input');
    searchInput.type = 'text';
    searchInput.placeholder = 'Rechercher...';
    searchContainer.appendChild(searchInput);

    searchButton.addEventListener('click', function () {
        if (!document.body.contains(searchContainer)) {
            document.body.appendChild(searchContainer);
        } else {
            searchContainer.remove();
        }
    });

    // Suggestions basées sur la recherche
    searchInput.addEventListener('input', function () {
        const query = searchInput.value.toLowerCase();
        const suggestions = ['Formation IoT', 'Stage en Cloud Computing', 'Offre d\'emploi', 'Annonce alumni'];
        const filteredSuggestions = suggestions.filter(function (suggestion) {
            return suggestion.toLowerCase().includes(query);
        });

        searchContainer.innerHTML = '';  // Réinitialiser les suggestions
        searchContainer.appendChild(searchInput);

        filteredSuggestions.forEach(function (suggestion) {
            const suggestionElement = document.createElement('div');
            suggestionElement.classList.add('suggestion');
            suggestionElement.textContent = suggestion;
            searchContainer.appendChild(suggestionElement);
        });
    });
});
