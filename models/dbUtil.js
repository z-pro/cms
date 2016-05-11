/**
 * Created by zengqushan on 5/11/16.
 */

var mongoose = require("mongoose")
mongoose.connect('mongodb://localhost:27017/test');

module.exports = function () {


    return mongoose;


}