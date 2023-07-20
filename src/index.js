import express from 'express'
import { dirname, join } from 'path'
import { fileURLToPath } from 'url'

const app = express()

const __dirname = dirname(fileURLToPath(import.meta.url))

app.set('views',join(__dirname,'views'))
//set :para indicarle alguna caracteristica al server
app.set('view engine','ejs')
app.get('/',(req,res)=>{
    res.render('index')
})
app.listen(3000)
console.log("server port ",3000)


