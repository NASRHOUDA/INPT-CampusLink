document.addEventListener('DOMContentLoaded', function () {
    const addPostButton = document.querySelector('.add-post-btn');
    const content = document.querySelector('.content');

    // Lorsque l'utilisateur clique sur le bouton "+" (add-post-btn)
    addPostButton.addEventListener('click', function () {
        content.style.display = 'block'; // Afficher la zone de publication
        addPostButton.style.display = 'none'; // Masquer le bouton "+"
    });

    const createPostButton = document.querySelector('.btn-create-post');
    const postBoxTextarea = document.querySelector('.post-box textarea');
    const postsContainer = document.querySelector('.posts');

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
            commentsSection.classList.add('comments-section', 'hidden');

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
        } else {
            alert('Veuillez écrire quelque chose avant de publier !');
        }
    });

    // Gestion des interactions
    postsContainer.addEventListener('click', function (e) {
        // Afficher/Masquer les commentaires
        if (e.target.classList.contains('reaction') && e.target.innerHTML === '💬') {
            const commentsSection = e.target.closest('.post').querySelector('.comments-section');
            commentsSection.classList.toggle('hidden');
        }

        // Ajouter un commentaire
        if (e.target.classList.contains('btn-comment')) {
            const commentBox = e.target.previousElementSibling;
            const commentContent = commentBox.value.trim();

            if (commentContent !== '') {
                const comment = document.createElement('div');
                comment.classList.add('comment');

                const userImage = document.createElement('img');
                userImage.src = 'https://via.placeholder.com/50';
                userImage.alt = 'User';
                userImage.classList.add('profile-pic');
                comment.appendChild(userImage);

                const commentText = document.createElement('p');
                commentText.innerHTML = `<strong>Vous:</strong> ${commentContent}`;
                comment.appendChild(commentText);

                const commentsSection = e.target.closest('.comments-section');
                commentsSection.insertBefore(comment, commentBox);

                commentBox.value = ''; // Réinitialiser la zone de texte après le commentaire
            } else {
                alert('Veuillez écrire un commentaire !');
            }
        }
    });
});
