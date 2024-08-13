const tableBody = document.getElementById('tableMainBody')
const fetchData = async () => {
    let pokeApi = 'https://pokeapi.co/api/v2/pokemon?limit=1000&offset=0';
    try {
        const response = await fetch(pokeApi)
        const data = await response.json()
        console.log(data)
        let pokeCard
        arrayData.forEach(element, data => {
            console.log("entré " + element + data);
        })
        /* tableBody.innerHTML = pokeCard */
    } catch (error) {
        console.log('Encontre el siguiente error: ' + error);
    }
}
fetchData()
// !PRIMER ACERCAMIENTO A COMO SERÍA EL HTML
/* pokeCard = `
    <div class="mainCard">
        <div class="contentCard">
            <img src="" alt="">
            <div class="textCard">
                <span class="pokeId">${element.id}</span>
                <span class="pokeName">${element.name}</span>
                <span class="pokeGroup"></span>
            </div>
        </div>
    </div>
` */