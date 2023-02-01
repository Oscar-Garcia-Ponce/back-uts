const router = require('express').Router()

router.post('/register', async(req, res) => {
    res.json({
        error: null,
        data: 'Aqui Vamos a poner los datos'
    })
})

module.exports = router