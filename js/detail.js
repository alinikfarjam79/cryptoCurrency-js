const params = new URLSearchParams(window.location.search);
const name = params.get("name");
const img = params.get("img");
const currentPrice = params.get("currentPrice");
const high_24h = params.get("high_24h");
const low_24h = params.get("low_24h");
const market_cap_rank = params.get("market_cap_rank");
const header = document.querySelector('header');
const logo = document.querySelector('header  img');
console.log(img);

logo.addEventListener('click', () => {
    window.location.href = 'index.html';
})

{/* <section class="data w-full flex flex-col justify-center items-center">
<figure class="flex flex-col  items-center">
    <img src="assets/img/logo.png" alt="" class="w-[300px]">
    <figcaption class="text-5xl text-white">Btc</figcaption>
    </figure>
    <div class="flex flex-col text-white p-2">
    <div class="flex border-b justify-between items-center w-96 p-2">
        <p>Crypto Market Rank</p>
        <p>1</p>
    </div>
    <div class="flex border-b justify-between items-center w-96 p-2">
        <p>Crypto Market Rank</p>
        <p>1</p>
    </div>
    <div class="flex border-b justify-between items-center w-96 p-2">
        <p>Crypto Market Rank</p>
        <p>1</p>
    </div>
    <div class="flex border-b justify-between items-center w-96 p-2">
        <p>Crypto Market Rank</p>
        <p>1</p>
    </div>
    
    </div>
</section> */}

{/* <section class="data w-full flex flex-col justify-center items-center">
<figure>
    <img src="" alt="">
</figure>
</section> */}
window.addEventListener('DOMContentLoaded', () => {
    const dataSection = document.createElement('section');
    dataSection.classList.add('w-full', 'flex', 'flex-col', 'justify-evenly', 'items-center', 'h-[700px]');
    dataSection.innerHTML = `
    <figure class="flex flex-col  gap-4  items-center">
    <img src="${img}" alt="" class="w-[300px]">
    <figcaption class="text-5xl text-white">${name}</figcaption>
    </figure>
    <div class="flex flex-col items-center justify-center text-white p-2">
    <div class="flex border-b justify-between items-center w-96 p-2">
        <p>Crypto Market Rank</p>
        <p>${market_cap_rank}</p>
    </div>
    <div class="flex border-b justify-between items-center w-96 p-2">
        <p>Current Price
        </p>
        <p>${currentPrice}</p>
    </div>
    <div class="flex border-b justify-between items-center w-96 p-2">
        <p>24 Hour high
        </p>
        <p>${high_24h}</p>
    </div>
    <div class="flex border-b justify-between items-center w-96 p-2">
        <p>24 Hour low
        </p>
        <p>${low_24h}</p>
    </div>
    
    </div>
    `
    console.log(dataSection);
    header.insertAdjacentElement('afterend', dataSection)
})