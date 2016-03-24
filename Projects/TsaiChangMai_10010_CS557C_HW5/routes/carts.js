var express = require('express');
var router = express.Router();

/* GET home page. */
router.all('/', function (req, res, next) {
    var cartTgt = [];

    var action = req.param('act');
    if (action === "update") {
        var itemname = req.param('itemname');
        var quantity = req.param('quantity');
        //console.log(action);
        for (var i = 0; i < req.session.cart.length; i++) {
            if (req.session.cart[i].itemname === itemname) {
                req.session.cart[i].quantity = quantity;
                break;
            }
        }
    } else if (action === "delete") {
        var itemname = req.param('itemname');
        for (var i = 0; i < req.session.cart.length; i++) {
            if (req.session.cart[i].itemname === itemname) {
                req.session.cart.splice(i, 1);
                break;
            }
        }
    }
    if (req.session.cart !== undefined) {
        cartTgt = req.session.cart;
    }
    res.render('cart', {title: 'Your Cart', cart: cartTgt});
});

module.exports = router;
