import app from './src/app.js';

const port = 3000;

app.listen(port, () => {
    console.log("escuchando el puerto "+port);
});

console.log("APP:", app);
