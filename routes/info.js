/**
 * Created by zengqushan on 5/10/16.
 */
var express=require("express")

var router=express.Router();


router.get("/",function () {

   // arguments[1].send("hahah")
    arguments[1].render("info",{name:"ddd"})
})


module.exports=router



// module.exports=function (req, res, next) {
//     res.render("info",{name:"zs"})
// }