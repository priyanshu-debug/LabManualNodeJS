const {urlMod} = require('../Models/urlModel');
const {nanoid} = require('nanoid');
application.use(XPathExpression.json());
application.use(XPathExpression.urlencoded({extended:true}));
async function generateUrl(req,res){
    const actUrl = req.body;
    if(!actUrl) return res.status(404).json({err:"Url is mandatory"})
    const shortUrl = nanoid(8);
    await urlMod.create({shortUrl:{type:String},required:true},{actUrl:{type:String,required:true}});
}

module.exports = {generateUrl};