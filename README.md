# &#x20;Pokédex Web App

Aplicación web simple que consume la API de PokéAPI para buscar Pokémon por nombre y mostrar información relevante.

---

## Endpoints utilizados

Se utilizó el siguiente endpoint de la API:

* `https://pokeapi.co/api/v2/pokemon/{name}`

Este endpoint permite obtener información de un Pokémon específico a partir de su nombre.

---

## Estructura del proyecto

```
/TP05-DAI
│── index.html     # Estructura principal de la página
│── styles.css     # Estilos de la aplicación
│── script.js      # Lógica y consumo de la API
```

---

##  Decisiones tomadas

* Se utilizó `fetch` con `async/await` para manejar las peticiones HTTP de forma clara.
* Se separó el código en funciones para mejorar la organización y legibilidad.
* Se implementó validación del input para permitir solo búsquedas por nombre (no por ID).
* Se agregó un indicador de *loading* para mejorar la experiencia de usuario.
* Se manejan errores tanto de red como de datos inexistentes.

---

##  Dificultades encontradas

* Inicialmente, se produjo un error al intentar acceder a `data.name` debido a que la variable del input no estaba correctamente definida.
* Se tuvo que validar correctamente la respuesta de la API para evitar errores al renderizar datos inexistentes.
* La API devuelve peso y altura en unidades no estándar (hectogramos y decímetros), por lo que fue necesario convertirlos a kg y metros.

---

##  Funcionalidades

Búsqueda de Pokémon por nombre

Visualización de:

* Nombre
* Imagen
* Tipo(s)
* Peso
* Altura

Manejo de errores

Indicador de carga
