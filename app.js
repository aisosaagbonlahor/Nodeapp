const axios = require('axios');


async function axiosGet() {
const header = {
    'X-CoinAPI-Key': '5a7d3d86-ab1a-49d4-beb0-166065872aac'
};
axios.get('https://rest.coinapi.io/v1/exchangerate/ETH/USD', {header})
.then(response => console.log(response.data))
.catch(error => {
    console.log(error)
})

};

axiosGet();

async function fetchGet() {
    const response = await fetch('https://rest.coinapi.io/v1/exchangerate/ETH/USD', {
        method: 'GET',
        header: {

            'X-CoinAPI-Key': '5a7d3d86-ab1a-49d4-beb0-166065872aac'
        }
    });
    let answer = await response.json();
    console.log(answer);
};
fetchGet();

async function axiosPost() {
 
}

async function fetchPost() {

}