const express = require("express")
const router = express.Router();

router.get('/', (req, res) =>{
    res.render('index', {title: 'My APP', message: 'Hello'});
})
module.exports = router