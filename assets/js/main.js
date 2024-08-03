const tableBody = document.getElementById('tableMainBody')
const fetchData = async () => {
    let pokeApi = 'https://pokeapi.co/api/v2/pokemon';
    try {
        const response = await fetch(pokeApi)
        const data = await response.json()
        console.log(data)
        let pokeCard = ''
        data.forEach(element => {
            console.log("entre" + element);
        })
        /* tableBody.innerHTML = pokeCard */
    } catch (error) {
        console.log('Encontre el siguiente error: ' + error);
    }
}
fetchData()