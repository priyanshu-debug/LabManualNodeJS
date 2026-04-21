const {generateUrl} = require('../Controllers/urlController');
const express = require('express');
const app = express();
const router = express.Router();
router.post('/url',generateUrl);

app.get('/',()=>{
    console.log("Hello JI")
})
module.exports = router;