//? when DOM is load the functions starts.
document.addEventListener("DOMContentLoaded", () => {
    //body to insert cards 
    const  tableBody = document.getElementById('tableMainBody')

    // loop of ID of the pokemon, limit 100
    let limit = 100
    const bucleIdPokemon = async () => {
        for (let i = 1; i <= limit; i++) {
            console.log(i)
            await getDataPokemon(i)
        }
    }

    const getDataPokemon = async (id) => {
        // url api
        let pokeApi = `https://pokeapi.co/api/v2/pokemon/${id}`;
        console.log(pokeApi)
        try {
            //! llamada a la api
            const response = await fetch(pokeApi)
            //! respuesta de la api
            const data = await response.json()
            console.log(data)
            printPokemon(data)
        } catch (error) {
            console.log('Encontre el siguiente error: ' + error);
        }
    }
    

    // function to print pokemon on cards
    const printPokemon = (pokemon) => {
        const pokeCard = `
                <div class="mainCard">
                    <div class="contentCard">
                        <img src="${pokemon.sprites.other.dream_world.front_default}" alt="${pokemon.name}" class="poke-image">
                        <div class="textCard">
                            <span class="pokeId">${pokemon.id}</span>
                            <span class="pokeName">${pokemon.name}</span>
                            <span class="pokeUrl">${pokemon.height}</span>
                        </div>
                    </div>
                </div>
            `
        tableBody.innerHTML += pokeCard
    }
    bucleIdPokemon()
})

    
