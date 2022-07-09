const {Router} = require ("express")
const router = Router();
const apiRoute = '/api'
const notas= require('../controller/indice.js')

router.post(apiRoute+'/notas', notas.create)

module.exports = router;