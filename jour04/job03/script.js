$(document).ready(function () {
    function filterData() {
        let id = document.getElementById('id').value;
        let name = document.getElementById('name').value;
        let type = document.getElementById('type').value;

        const url = './pokemon.json';

        fetch(url)
            .then(response =>response.json())
            .then(data => {
                const filteredData = data.filter(pokemon => {
                    if (id && pokemon.id !== id) {
                        return false;
                    }
                    if (name && pokemon.name !== name) {
                        return false;
                    }
                    if (type && pokemon.type !== type) {
                        return false;
                    }
                    return true;
                });
                displayResults(filteredData);
            })
            .catch(error => console.error('Erreur lors de la récupération des données :', error));
    }

    function displayResults(data) {
        const resultsDiv = document.getElementById('results');

        resultsDiv.innerHTML = '';

        data.forEach(pokemon => {
            const pokemonDiv = document.createElement('div');
            pokemonDiv.innerHTML = `<p>ID: ${pokemon.id}</p>
                                <p>Nom: ${pokemon.name}</p>
                                <p>Type: ${pokemon.type}</p>
                                <hr>`;
            resultsDiv.appendChild(pokemonDiv);
        })
    }
})