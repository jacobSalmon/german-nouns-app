/*document.getElementById('add-noun-form').addEventListener('submit', async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const nounData = {
        noun: formData.get('noun'),
        artikel: formData.get('artikel'),
        sentence: formData.get('sentence'),
        grammar: formData.get('grammar'),
        translation: formData.get('translation'),
    };

    try {
        const response = await fetch('/create-noun', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(nounData),
        });

        const result = await response.json();
        document.getElementById('message').textContent = 'The new noun is stored!';
    } catch (error) {
        document.getElementById('message').textContent = 'Error storing the noun!';
        console.error('Error storing the noun:', error);
    }
});

document.getElementById('back-to-main').addEventListener('click', () => {
    window.location.href = '/';
});
*/
