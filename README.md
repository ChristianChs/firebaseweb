# Creando una aplicación en NodeJS

## Configurando el proyecto

Como primer paso crear el archivo packaje.json
```
npm init -y
```
Instalar las dependencias
```
npm i express morgan ejs
```
* Opcional
```
npm i nodemon -D
```

## Creando servidor web básico con framework Express
```
//Creando una instancia de Express
const app = express()
//Se define una variable para obtener el directorio actual
const __dirname = dirname(fileURLToPath(import.meta.url))
//configuración de la aplicacion
app.set('views', join(__dirname, 'views'));
app.set('view engine', 'ejs');
//rutas de inicio
app.get('/', (req, res) => {
    res.render('index');
});
//inicio del server
app.listen(3000)
```
