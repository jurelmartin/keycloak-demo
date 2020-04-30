const express = require("express");
const app = express();
const cors = require('cors');
const session = require('express-session');
const Keycloak = require('keycloak-connect');
  

const memorySore = new session.MemoryStore();


app.use(session({
    secret: 'mySecret',
    resave: false,
    saveUninitialized: true,
    store: memorySore
}));
app.use(cors());

const keycloak = new Keycloak({
    store: memorySore
});

app.use(keycloak.middleware({
    logout: '/logut',
    admin: '/'
}));


app.get("/products", keycloak.protect(), (req, res, next) => {
    res.json(['IPhone', 'Macbook', 'IPad']);
});


app.listen(process.env.PORT || 8080, () => {
    console.log("Server running on port 8080");
});