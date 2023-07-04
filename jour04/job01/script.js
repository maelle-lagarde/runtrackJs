$(document).ready(function() {
    const button = document.getElementById('button');
    const expression = document.getElementById('message');
    console.log('coucou');
    button.addEventListener('click', function() {
        fetch('expression.txt')
            .then(response => response.text())
            .then(data => {
                expression.textContent = data;
                document.body.appendChild(expression);
            });
    });
});
