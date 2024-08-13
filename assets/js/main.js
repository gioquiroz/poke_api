//? en cuanto cargue el documeto se hace la llamada de la api.


    //cuerpo principal de la llamada de la api
    const  tableBody = document.getElementById('tableMainBody')

    // recorrido de cada ID de los pokemon
    let limit = 10
    const bucleIdPokemon = async () => {
        for (let i = 1; i <= limit; i++) {
            console.log(i)
            await getDataPokemon(i)
        }
    }

    const getDataPokemon = async (id) => {
        // url api
        let pokeApi = `https://pokeapi.co/api/v2/pokemon/${id}`;
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
    

    // función para printiar los pokemon
    const printPokemon = (pokemon) => {
        const pokeCard = `
                <div class="mainCard">
                    <div class="contentCard">
                        <img src="" alt="">
                        <div class="textCard">
                            <span class="pokeId">${pokemon.id}</span>
                            <span class="pokeName">${pokemon.name}</span>
                            <span class="pokeUrl">${pokemon.height}</span>
                        </div>
                    </div>
                </div>
            `
        tableBody.innerHTML = pokeCard
        /* pokemon.abilities.forEach(element => {
            console.log(element)
            const pokeCard = `
                <div class="mainCard">
                    <div class="contentCard">
                        <img src="" alt="">
                        <div class="textCard">
                            <span class="pokeId">${element.id}</span>
                            <span class="pokeName">${element.name}</span>
                            <span class="pokeUrl">${element.url}</span>
                        </div>
                    </div>
                </div>
            `
            tableBody.innerHTML = pokeCard
        }) */
        
    }
    bucleIdPokemon()
    /* getDataPokemon() */


