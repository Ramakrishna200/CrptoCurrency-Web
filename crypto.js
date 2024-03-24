// var set={
//     "async":true,
//     "scroosDomain":true,
//     "url":"https://api.coingecko.com/api/v3/simple/price?ids=bitcoin%2Cethereum%2Cdogecoin&vs_currencies=usd",
//     "method":"GET",
//     "headers":{}

// }
// const bit= document.getElementById("bit")
// const eth=document.getElementById("eth")
// const dog=document.getElementById("dog")


// $.ajax(set).done(function(res){
//      bit.innerHTML=res.bitcoin.usd;
//     eth.innerHTML=res.ethereum.usd;
//      dog.innerHTML=res.dogecoin.usd;
//     console.log(res)
// })

const bit = document.getElementById("bit");
const eth = document.getElementById("eth");
const dog = document.getElementById("dog");

async function fetchData() {
    try {
        const response = await fetch("https://api.coingecko.com/api/v3/simple/price?ids=bitcoin%2Cethereum%2Cdogecoin&vs_currencies=usd");
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error fetching data:', error);
        throw error;
    }
}

async function fetchAndLogData() {
    try {
        const data = await fetchData();
        console.log(data);
        // Update HTML elements with fetched data
        bit.innerHTML = data.bitcoin.usd;
        eth.innerHTML = data.ethereum.usd;
        dog.innerHTML = data.dogecoin.usd;
    } catch (error) {
        console.error('An error occurred while fetching data:', error);
    }
}

fetchAndLogData();

// Get the hamburger icon and close icon
const menuIcon = document.getElementById('menuIcon');
const closeIcon = document.getElementById('closeIcon');
// Get the side menu
const sideMenu = document.getElementById('sidemenu');

// Function to open the side menu
function openMenu() {
    sideMenu.style.right = '0';
}

// Function to close the side menu
function closeMenu() {
    sideMenu.style.right = '-200px';
}

// Add event listener to the hamburger icon to open the menu
menuIcon.addEventListener('click', openMenu);

// Add event listener to the close icon to close the menu
closeIcon.addEventListener('click', closeMenu);
