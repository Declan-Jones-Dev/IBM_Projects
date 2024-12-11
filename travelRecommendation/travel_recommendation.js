fetch('travel_recommendation_api.json')
    .then(response => response.json())
    .then(data => {
        console.log(data);
        // Process the data for recommendations
    })
    .catch(error => console.log('Error fetching data:', error));

// Implement logic to handle search keywords and variations.

document.getElementById('search-btn').addEventListener('click', function() {
    let keyword = document.getElementById('search-input').value.toLowerCase();
    let results = [];
    
    if (keyword.includes('beach')) {
        results = recommendations.filter(item => item.category === 'beach');
    } else if (keyword.includes('temple')) {
        results = recommendations.filter(item => item.category === 'temple');
    } else if (keyword.includes('country')) {
        results = recommendations.filter(item => item.category === 'country');
    }

    displayResults(results);
});

//Filter and display recommendations based on user input.

function displayRecommendations(keyword, data) {
    const results = data.filter(item => item.category.toLowerCase().includes(keyword));
    const resultsContainer = document.getElementById('results');
    
    results.forEach(result => {
        const div = document.createElement('div');
        div.innerHTML = `
            <h3>${result.name}</h3>
            <img src="${result.imageUrl}" alt="${result.name}">
            <p>${result.description}</p>
        `;
        resultsContainer.appendChild(div);
    });
}

//Implement the logic for the "Clear" button to reset the search results.

document.getElementById('reset-btn').addEventListener('click', function() {
    document.getElementById('search-input').value = '';
    document.getElementById('results').innerHTML = ''; // Clear displayed recommendations
});

//Display the current time in the country you recommend.

function displayTimeInCountry(timezone) {
    const options = { timeZone: timezone, hour12: true, hour: 'numeric', minute: 'numeric', second: 'numeric' };
    const currentTime = new Date().toLocaleTimeString('en-US', options);
    console.log(`Current time in ${timezone}:`, currentTime);
}