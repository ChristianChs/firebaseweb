import { Router } from "express"

const router = Router()

router.get('/', (req, res) => {res.render('index',{title:"SEMILLERO"})})


router.get('/menu', (req, res) => res.render('menu'))


export default router