//? when DOM is load the functions starts.
document.addEventListener("DOMContentLoaded", () => {
    //body to insert cards 
    const tableBody = document.getElementById('tableMainBody')
    const inptPokeBall = document.getElementById('pokeball')
    const optionsTypePokemon = document.getElementById('typePokemon')

    // loop of ID of the pokemon, limit 100
    let limit = 8
    const bucleIdPokemon = async () => {
        for (let i = 1; i <= limit; i++) {
            console.log(i)
            await getDataPokemon(i)
        }
    }

    // Function to get pokemon Type using Fetch
    const getPokemonType = async () => {
        let pokeTypeApi = `https://pokeapi.co/api/v2/type`
        try {
            //! llamada a la api
            const response = await fetch(pokeTypeApi)
            //! respuesta de la api
            const data = await response.json()
            console.log(data)
            printOptionsPokemon(data)
        } catch (error) {
            console.log("Este es el error " + error)
        }
    }
    getPokemonType()

    const printOptionsPokemon = (typesPokemon) => {
        typesPokemon.results.forEach(pokeType => {
            const typeOptions = `
                <option value="${pokeType.name}">${pokeType.name}</option>
            `
            optionsTypePokemon.innerHTML += typeOptions
        });
    }
    // Function to get pokemon using fetch
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
            /* printOptionsPokemon(dataType) */
        } catch (error) {
            console.log('Encontre el siguiente error: ' + error);
        }
    }

    // function to print pokemon on cards
    const printPokemon = (pokemon) => {
        let lenArrType = pokemon.types.length
        console.log(lenArrType)
        const pokeCard = `
            <div class="mainCard">
                <div class="contentCard">
                    <span class="circle-bg-behind"></span>
                    <img src="${pokemon.sprites.other.dream_world.front_default}" alt="${pokemon.name}" class="poke-image">
                    <div class="textCard pt-5">
                        <span class="pokeId">Id #${pokemon.id}</span>
                        <span class="pokeName">${capitalizeFirstLetterPokeName(pokemon.name)}</span>
                        <span class="height">Peso: ${pokemon.height}</span>
                    </div>
                </div>
            </div>
        `
        tableBody.innerHTML += pokeCard

    }

    // function to UpperCase the name of pokemon

    const capitalizeFirstLetterPokeName = (pokename) => {
        return pokename.charAt(0).toUpperCase() + pokename.slice(1)
    }

    // Función para hacer la llamada de la aparición del popUp para busqueda de pokemon
    inptPokeBall.addEventListener('click', async (e) => {
        e.preventDefault
        const { value: formValues } = await Swal.fire({
            title: "Busca tu Pokémon",
            html: `
                <input id="swal-input1" class="swal2-input" placeholder="Nombre...">
            `,
            focusConfirm: false,
            confirmButtonText: "Buscar",
            preConfirm: () => {
                return ("Estas buscando " + " " + document.getElementById("swal-input1").value)
            }
        });
        if (formValues) {
            Swal.fire(JSON.stringify(formValues));
        }
    })
    bucleIdPokemon()
})


