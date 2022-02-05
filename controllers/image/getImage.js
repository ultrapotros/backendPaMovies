const Image = require('../../models/image.js')
function getImage(req, res){
    let image = new Image ();
    let result = image.getImage();
    res.status(200).json(result);
    }
module.exports = getImage;