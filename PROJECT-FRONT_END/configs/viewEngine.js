const express = require("express");

module.exports = function(app) {
    app.use(express.static("public"));
    app.set("view engine", "ejs");
};