/**
 * Created by zengqushan on 5/11/16.
 */


var express = require("express")

var router = express.Router()

var user = require("../models/User")


var userDal = new user()
router.get("/", function (req, res, next) {


    // var uName = req.query.uname
    //
    // console.info(uName)


    res.render('login', {
        status:"2"

    })
})


router.post("/", function (req, res, next) {

    var uName = req.param("uname")

    var pwd = req.param("pwd")


    var result = userDal.getUser(uName, pwd, function (result) {
        if (result.length > 0) {
            res.redirect("/")


        } else {

            // res.redirect("/login")
            res.render('login', {
                status: 0,
                msg: "用户名或者密码错误"

            })

        }


    })


})

module.exports = router