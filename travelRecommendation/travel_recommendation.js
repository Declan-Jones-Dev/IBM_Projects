// Fetch the data from the JSON file
fetch('travel_recommendation_api.json')
    .then(response => response.json())
    .then(data => {
        // Log the data to check the structure
        console.log(data);

        // Add the event listener to handle the search button click
        document.getElementById('search-btn').addEventListener('click', function() {
            let keyword = document.getElementById('search-input').value.toLowerCase();
            let results = [];

            // Search for the keyword in different categories (beach, temple, country)
            if (keyword.includes('beach')) {
                results = data.beaches; // Accessing the "beaches" data directly
            } else if (keyword.includes('temple')) {
                results = data.temples; // Accessing the "temples" data directly
            } else if (keyword.includes('country')) {
                results = data.countries; // Accessing the "countries" data directly
            }

            // Display the results
            displayResults(results);
        });
    })
    .catch(error => console.log('Error fetching data:', error));

// Function to display the search results on the page
function displayResults(results) {
    const resultsContainer = document.getElementById('results');
    resultsContainer.innerHTML = ''; // Clear previous results

    if (results.length === 0) {
        resultsContainer.innerHTML = 'No recommendations found for your search.';
    } else {
        results.forEach(item => {
            const div = document.createElement('div');
            div.classList.add('recommendation-item');
            
            // Check if the item has a "cities" property (for countries)
            if (item.cities) {
                item.cities.forEach(city => {
                    div.innerHTML += `
                        <h3>${city.name}</h3>
                        <img src="${city.imageUrl}" alt="${city.name}" />
                        <p>${city.description}</p>
                    `;
                });
            } else {
                div.innerHTML = `
                    <h3>${item.name}</h3>
                    <img src="${item.imageUrl}" alt="${item.name}" />
                    <p>${item.description}</p>
                `;
            }

            resultsContainer.appendChild(div);
        });
    }
}

// Reset functionality
document.getElementById('reset-btn').addEventListener('click', function() {
    document.getElementById('search-input').value = '';
    document.getElementById('results').innerHTML = ''; // Clear displayed recommendations
});
