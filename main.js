let loading = document.querySelector('.lds-ring');
let table = document.querySelector('table')
let tbody = document.querySelector('tbody');
let input = document.querySelector('input');
let button = document.querySelector('button');
const header = document.querySelector('header');
const logo = document.querySelector('header  img');
let displayCoins;


logo.addEventListener('click', () => {
    window.location.href = 'index.html';
})
let loadingHtml = `
<div class="lds-ring text-white mt-8 ">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
        </div>`
let AllCoins = fetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=50&page=1&sparkline=true')
    .then(res => res.json())
    .then(data => {
        // loading.classList.add('hidden');
        loading.remove()
        displayCoins = data;
        // loading.classList.add('opacity-0');
        table.classList.remove('hidden');

        return data;
    });
// <tr class="border-t border-t-gray-600 *:p-3 ">
//                 <td class="">1</td>
//                 <td>asdfasdfas</td>
//                 <td>12341234</td>
//                 <td>sdfdasdfasfda</td>
//                 <td>213333331321212</td>
//             </tr>

window.addEventListener('DOMContentLoaded', () => {
    AllCoins.then(coins => {
        displayCoins.slice(0, 10).map((coin, index) => {
            let row = document.createElement('tr');
            row.classList.add('border-t', 'border-t-gray-600', '*:p-3', 'cursor-pointer');
            row.innerHTML = `
                <td>${index + 1}</td>
                <td>
                <div class="flex  gap-4">
                <img src='${coin.image}' class="w-7"/>
                ${coin.name}</div>
                </td>
                <td class="text-left">$ ${coin.current_price.toLocaleString()}</td>
                <td class='${textColor(Math.floor(coin.market_cap_change_percentage_24h * 100) / 100)}'>${Math.floor(coin.market_cap_change_percentage_24h * 100) / 100}</td>
                <td>$ ${coin.market_cap.toLocaleString()}</td>
            `;
            tbody.appendChild(row);
            row.addEventListener('click', () => {
                window.location.href = `detail.html?name=${coin.name}&img=${coin.image}&currentPrice=${coin.current_price}&high_24h=${coin.high_24h}&market_cap_rank=${coin.market_cap_rank}&low_24h=${coin.low_24h}`;
            });
        })
        console.log(coins);
    })

})


function textColor(price) {
    if (price > 0) {
        return 'text-green-600'
    } else {
        return 'text-red-600';
    }
}

input.addEventListener('change', (e) => {
    let searchTerm = e.target.value.toLowerCase();
    let filteredCoins = displayCoins.filter(coin => coin.name.toLowerCase().includes(searchTerm));
    tbody.innerHTML = '';
    filteredCoins.slice(0, 10).map((coin, index) => {
        let row = document.createElement('tr');
        row.classList.add('border-t', 'border-t-gray-600', '*:p-3', 'cursor-pointer');
        row.innerHTML = `
            <td>${index + 1}</td>
            <td>
            <div class="flex  gap-4">
            <img src='${coin.image}' class="w-7"/>
            ${coin.name}</div>
            </td>
            <td class="text-left">$ ${coin.current_price.toLocaleString()}</td>
            <td class='${textColor(Math.floor(coin.market_cap_change_percentage_24h * 100) / 100)}'>${Math.floor(coin.market_cap_change_percentage_24h * 100) / 100}</td>
            <td>$ ${coin.market_cap.toLocaleString()}</td>
        `;
        tbody.appendChild(row);
        row.addEventListener('click', () => {
            window.location.href = `detail.html?name=${coin.name}&img=${coin.image}&currentPrice=${coin.current_price}&high_24h=${coin.high_24h}&market_cap_rank=${coin.market_cap_rank}&low_24h=${coin.low_24h}`;
        });
    })
});