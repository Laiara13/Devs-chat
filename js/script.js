document.addEventListener('DOMContentLoaded', function() {
    const addNicknameBtn = document.getElementById('add-nickname-btn');
    const nicknameContainer = document.getElementById('nickname-container');

    addNicknameBtn.addEventListener('click', function() {
        nicknameContainer.classList.toggle('d-none');
        // Focar o campo de entrada quando ele é mostrado
        if (!nicknameContainer.classList.contains('d-none')) {
            document.getElementById('nickname-input').focus();
        }
    });
});
