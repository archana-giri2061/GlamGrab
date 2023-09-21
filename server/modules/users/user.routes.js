const router = require("express").Router();

router.get("/", (req, res, next)=>{
    try{
         res.json({data:" ", msg:"user routes is working"});
    }catch(e){
        next(e);
    }
        });


module.exports = router;