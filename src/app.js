import express from "express";

import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();

app.use(express.static(path.join(__dirname, "../src")));


app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, "../src/index.html"));
});

app.get("/pokemon/:name", (req, res) => {
  const name = req.params.name.toLowerCase();

  fetch(`https://pokeapi.co/api/v2/pokemon/${name}`)
    .then(response => {
      if (!response.ok) {
        throw new Error("Pokémon no encontrado");
      }
      return response.json();
    })
    .then(data => {
      res.json({
        nombre: data.name,
        altura: data.height,
        peso: data.weight,
        imagen: data.sprites.front_default
      });
    })
    .catch(error => {
      res.status(404).json({ error: error.message });
    });
});



export default app;