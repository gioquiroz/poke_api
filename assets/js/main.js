const fetchData = async () => {
    let pokeApi = 'https://pokeapi.co/api/v2/pokemon/56';
    try {
        const response = await fetch(pokeApi)
        const data = await response.json()
        let pokeCard = `
            <div class="col-12 col-md-3">
                <img src="">
                <span>${id}</span>
                <h3>Nombre: ${name}</h3>

            </div>
        `
    } catch (error) {
        console.log(error);
    }
}
fetchData()