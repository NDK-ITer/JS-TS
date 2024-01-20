const express = require('express');
const router = express.Router();

router.get('/',(req, res) => {
    res.json('nope hi');
});

router.post('/login',(req, res) =>{
    res.json(req.body.userName);
});

router.get('/:id',(req, res) =>{
    res.json('id:' + req.params.id);
})

module.exports = router;