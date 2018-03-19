const path = require("path");

module.exports = {
    //production or development
    env:"production",
    path:{
        rootpath:(this.env === "production"?path.join(__dirname,"../"):path.join(__dirname,"../")),
    },

}