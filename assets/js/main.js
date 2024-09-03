//? when DOM is load the functions starts.
document.addEventListener("DOMContentLoaded", () => {
    //body to insert cards 
    const tableBody = document.getElementById('tableMainBody')
    const inptPokeBall = document.getElementById('pokeball')
    const optionsTypePokemon = document.getElementById('typePokemon')
    const footerNextPrev = document.getElementById('mainFooter')
    /* let morePokemon = "https://pokeapi.co/api/v2/pokemon?offset=20&limit=20"
    let lessPokemonn = "https://pokeapi.co/api/v2/pokemon?offset=0&limit=20" */

    // url api
    let pokeApi = 'https://pokeapi.co/api/v2/pokemon?limit=21'



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
    const getDataPokemon = async (url) => {

        console.log(url)
        try {
            //! llamada a la api
            const response = await fetch(url)
            console.log(response);

            //! respuesta de la api
            const data = await response.json()
            nextPokemon = data.next
            console.log("upa", nextPokemon);

            console.log(data)
            //! uso del metodo for...of para ejecutar acción en cada elemento de un objeto iterable (string, array)
            for (let index of data.results) {
                const pokeResults = await fetch(index.url).then(res => res.json())

                //printPokemon(data)
                printPokemon(pokeResults)
            }
            /* loopPokeData(data) */
        } catch (error) {
            console.log('Encontre el siguiente error: ' + error);
        }
    }

    // botones de mas o menos pokemon en el footer
    footerNextPrev.innerHTML += `
        <button class="footBtn me-2" id="btn-next">Cargar mas <i class="fa-solid fa-angle-down"></i></button>
        <button class="footBtn ms-2" id="btn-prev">Cargar menos <i class="fa-solid fa-angle-up"></i></button>
        `

    /* const buttonPrevious = document.getElementById('btn-prev') */
    let buttonNext = document.getElementById('btn-next')
    buttonNext.addEventListener('click', (e) => {
        getDataPokemon(nextPokemon)
    })


    // function to print pokemon on cards
    const printPokemon = (pokemon) => {
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

    // function to UpperCase the the firstLetter 
    const capitalizeFirstLetterPokeName = (pokename) => {
        return pokename.charAt(0).toUpperCase() + pokename.slice(1)
    }

    // Función para hacer la llamada de la aparición del popUp para busqueda de pokemon
    inptPokeBall.addEventListener('click', async (e) => {
        e.preventDefault()
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
    // function call's to pokemon type
    getDataPokemon(pokeApi)
})
