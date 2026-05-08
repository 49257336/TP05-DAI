const boton = document.getElementById('btnBuscar');
boton.addEventListener('click', buscarPokemon);

async function buscarPokemon(){
    try{
        const nombre = document.getElementById('pokemonInput').value.toLowerCase();
        const resultado = document.getElementById('resultado');
        
        resultado.innerHTML = '<p class="loading">Cargando...</p>';
          if (!isNaN(nombre)) {
            throw new Error("Pokémon no encontrado");
        }
        const respuesta = await fetch(`https://pokeapi.co/api/v2/pokemon/${nombre}`);
        if (!respuesta.ok) {
          throw new Error("Pokémon no encontrado");
        }
        const data = await respuesta.json();

        resultado.innerHTML = `
        <h2>${data.name.toUpperCase()}</h2>
        <img src="${data.sprites.front_default}" alt="${data.name}">
      
        <p><strong>Tipo(s):</strong> 
            ${data.types.map(t => t.type.name).join(', ')}
        </p>

        <p><strong>Peso:</strong> ${data.weight / 10} kg</p>
        <p><strong>Altura:</strong> ${data.height / 10} m</p>
        `;
    }catch(error){
        document.getElementById('resultado').innerHTML = `<p class="error">${error.message}</p>`;
    }
}
