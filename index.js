const express = require('express')

const app = express()

const router = express.Router();

router.get('/', (req, res)=>{
    require('sleep').sleep(1)

    res.send('teste')
})

app.use(router)

app.listen(3333, () => {console.log('run')})