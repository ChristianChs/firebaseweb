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
## Creando Enrutadores

Crear en el directorio principal una carpeta routes para configurar las rutas de nuestra aplicación
```
my-react-project/
├── node_modules/
├── src/
│   ├── routes/
│   │   └── index.js
│   ├── views/
│   │   └── index.ejs
│   └── index.js
├── package-lock.json
├── README.md
└──.gitignore
```

## Trabajando con EJS
Para evitar escribir codigo repetitivo se opta por separar tanto header, footer y otros en archivos ejs para luego llamarlos en donde se necesite.
Por conveniencia se da la siguiente ruta:

```
views/partials/*.ejs
```