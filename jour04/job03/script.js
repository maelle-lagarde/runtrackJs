function filterData() {
    // Obtention des valeurs des champs de formulaire
    const id = document.getElementById('id').value;
    const name = document.getElementById('name').value;
    const type = document.getElementById('type').value;

    // Construction de l'URL pour récupérer le fichier JSON
    const url = './pokemon.json';

    // Utilisation de l'API Fetch pour récupérer les données du fichier JSON
    fetch(url)
        .then(response => response.json())
        .then(data => {
            // Filtrage des données en fonction des critères sélectionnés
            const filteredData = data.filter(pokemon => {
                if (id && pokemon.id !== parseInt(id)) {
                    return false;
                }
                if (name && pokemon.name.french.toLowerCase() !== name.toLowerCase()) {
                    return false;
                }
                if (type && !pokemon.type.includes(type)) {
                    return false;
                }
                return true;
            });

            // Affichage des résultats sur la page HTML
            displayResults(filteredData);
        })
        .catch(error => console.error('Erreur lors de la récupération des données:', error));
}

function displayResults(data) {
    const resultsDiv = document.getElementById('results');

    // Effacer les résultats précédents
    resultsDiv.innerHTML = '';

    // Création des éléments HTML pour chaque Pokémon filtré
    data.forEach(pokemon => {
        const pokemonDiv = document.createElement('div');
        pokemonDiv.innerHTML = `<p>ID: ${pokemon.id}</p>
                                <p>Nom: ${pokemon.name.french}</p>
                                <p>Type: ${pokemon.type.join(', ')}</p>
                                <hr>`;
        resultsDiv.appendChild(pokemonDiv);
    });
}
