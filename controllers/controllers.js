const  { v4 : uuidV4} = require('uuid')
module.exports = {
    index : function(req, res){
        res.redirect(`/${uuidV4()}`)
    },
    room : function(req, res){
        res.render('room', { roomId : req.params.room })
    }
}