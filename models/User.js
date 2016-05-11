/**
 * Created by zengqushan on 5/11/16.
 */
var mongoose = require("./dbUtil")


var schema = mongoose().Schema


module.exports = function () {

    var userSchema = new schema({
        uname: String,
        password: String


    })
    var MyModel = mongoose().model("users", userSchema)

    this.addUser = function () {

        var instance = new MyModel()
        instance.password = "123"//({uname:"admin",password:"123"})
        instance.uname = "admin"
        instance.save(function (err) {

        })

    }

    this.getUser = function (uName, pwd,callback) {

        "use strict";


        MyModel.find({uname: uName, password: pwd}, function (err, docs) {

            callback(docs)

        })



    }


    this.createUser = function () {

        new MyModel().save(function (err) {

        })
    }
}

