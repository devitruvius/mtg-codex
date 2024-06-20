document.getElementById('search-form').addEventListener('submit', function(e) {
    e.preventDefault();
    const query = document.getElementById('query').value;
    const color = document.getElementById('color').value;
    const type = document.getElementById('type').value;
    const effect = document.getElementById('effect').value;
    const rarity = document.getElementById('rarity').value;
    const cmc = document.getElementById('cmc').value;
    const power = document.getElementById('power').value;
    const toughness = document.getElementById('toughness').value;

    const colors = color.split(',').map(c => c.trim()).filter(c => c !== '');

    const queryParams = [
        `query=${encodeURIComponent(query)}`,
        ...colors.map(c => `color=${encodeURIComponent(c)}`),
        `type=${encodeURIComponent(type)}`,
        `effect=${encodeURIComponent(effect)}`,
        `rarity=${encodeURIComponent(rarity)}`,
        `cmc=${encodeURIComponent(cmc)}`,
        `power=${encodeURIComponent(power)}`,
        `toughness=${encodeURIComponent(toughness)}`
    ];

    const queryString = queryParams.join('&');

    fetch(`/search?${queryString}`)
        .then(response => response.json())
        .then(data => {
            let resultsDiv = document.getElementById('results');
            resultsDiv.innerHTML = '';
            if (data.data && data.data.length > 0) {
                data.data.forEach(card => {
                    let cardDiv = document.createElement('div');
                    cardDiv.classList.add('card');

                    let cardContent = `
                        <div class="card-content">
                            <img src="${card.image_uris.normal}" alt="${card.name}" class="card-image">
                            <div class="card-details">
                                <h3>${card.name}</h3>
                                <p>${card.type_line}</p>
                                <p>${card.oracle_text}</p>
                                <a href="/card_details/${card.id}" class="view-details-link">View Details</a>
                            </div>
                        </div>
                    `;
                    cardDiv.innerHTML = cardContent;
                    resultsDiv.appendChild(cardDiv);
                });
                resultsDiv.style.display = 'block';
            } else {
                resultsDiv.innerHTML = `<p>No cards found.</p>`;
                resultsDiv.style.display = 'none';
            }
        })
        .catch(error => {
            console.error('Error fetching data:', error);
            resultsDiv.innerHTML = `<p>Failed to fetch data. Please try again later.</p>`;
            resultsDiv.style.display = 'none';
        });
});