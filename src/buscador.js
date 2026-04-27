
function buscarPokemon() {
  const nombre = document.getElementById("pokemonInput").value;

  fetch(`/pokemon/${nombre}`)
    .then(res => res.json())
    .then(data => {
      if (data.error) {
        document.getElementById("resultado").innerHTML = `<p>${data.error}</p>`;
        return;
      }

      document.getElementById("resultado").innerHTML = `
        <h2>${data.nombre}</h2>
        <img src="${data.imagen}" />
        <p>Altura: ${data.altura}</p>
        <p>Peso: ${data.peso}</p>
      `;
    })
    .catch(err => {
  document.getElementById("resultado").innerHTML = `<p>Error: ${err.message}</p>`;
});
}
window.buscarPokemon = buscarPokemon;
export default buscarPokemon;
