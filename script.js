const cryptos = [
    {name: 'Bitcoin', symbol: 'BTC', amount: 0.5, price: 45000},
    {name: 'Ethereum', symbol: 'ETH', amount: 5, price: 2500},
    {name: 'Cardano', symbol: 'ADA', amount: 1000, price: 0.5}
];

function updatePortfolio() {
    const total = cryptos.reduce((sum, c) => sum + (c.amount * c.price), 0);
    document.getElementById('total-value').textContent = '$' + total.toFixed(2);
    
    document.getElementById('cryptos').innerHTML = cryptos.map(c => `
        <div class="crypto-item">
            <h3>${c.name} (${c.symbol})</h3>
            <p>Amount: ${c.amount}</p>
            <p>Price: $${c.price}</p>
            <p>Value: $${(c.amount * c.price).toFixed(2)}</p>
        </div>
    `).join('');
}

updatePortfolio();