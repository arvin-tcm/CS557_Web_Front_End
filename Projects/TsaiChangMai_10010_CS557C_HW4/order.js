/* 
 * Student Info: Name=TsaiChangMai, ID=10010
 * Subject: CS557C_HW4_Spring_2016
 * Author: Arvin-tcm 
 * Filename: order.js 
 * Date and Time: Mar 10, 2016 6:16:37 PM 
 * Project Name: TsaiChangMai_10010_CS557C_HW4 
 */
var submit = "";
var price = {
    hardcopy: [8.99, 9.99, 10.99],
    poster: [9.99, 10.99, 11.99],
    mug: [10.99, 11.99, 12.99],
    tshirt: [11.99, 12.99, 13.99]
};
var glossyFinishCheck = [false, false, false, false];
//localStorage.clear();

function clicked(button) {
    submit = button.name;
}

function checkForm(form) {
    //console.log(submit);
    switch (submit) {
        case "go":
            return true;
        case "add":
            add();
            return false;
        case "calculate":
            calculate();
            return false;
    }
    return false;
}

function calculate() {
    console.log("cal start");
    var div = document.getElementById("result");
    var customer, total = 0;

    if (localStorage.customer === undefined) {
        div.innerHTML = "no record yet!";
        return false;
    }
    var customerString = localStorage.customer;
    console.log(customerString);
    customer = JSON.parse(localStorage.customer);
    printObject(customer);
    console.log(calculateTotalPrice(customer));
    console.log(timeToDeliver());
}

function add() {
    var customer;
    var quantity = document.getElementById("quantity").value;
    var item = validateItem();
    var quality = document.getElementById("img_quality");
    console.log(quantity);
    console.log(item);
    console.log(quality.options[quality.selectedIndex].text);
    if (localStorage.customer === undefined) {
        customer = {};
        customer.hardcopy = {
            good: 0,
            veryGood: 0,
            excellent: 0
        };
        customer.poster = {
            good: 0,
            veryGood: 0,
            excellent: 0
        };
        customer.mug = {
            good: 0,
            veryGood: 0,
            excellent: 0
        };
        customer.tshirt = {
            good: 0,
            veryGood: 0,
            excellent: 0
        };
    } else {
        customer = JSON.parse(localStorage.customer);
    }
    switch (item) {
        case "hardcopy":
            addByQuality(customer.hardcopy, quality.options[quality.selectedIndex].text, quantity);
            glossyFinishCheck[0] = true;
            break;
        case "poster":
            addByQuality(customer.poster, quality.options[quality.selectedIndex].text, quantity);
            glossyFinishCheck[1] = true;
            break;
        case "mug":
            addByQuality(customer.mug, quality.options[quality.selectedIndex].text, quantity);
            glossyFinishCheck[2] = true;
            break;
        case "tshirt":
            addByQuality(customer.tshirt, quality.options[quality.selectedIndex].text, quantity);
            glossyFinishCheck[3] = true;
            break;
    }
    localStorage["customer"] = JSON.stringify(customer);
}

function addByQuality(item, quality, quantity) {
    switch (quality) {
        case "Good":
            item.good += +quantity;
            break;
        case "Very Good":
            item.veryGood += +quantity;
            break;
        case "Excellent":
            item.excellent += +quantity;
            break;
    }
}

function validateItem() {
    var items = document.getElementsByName("item");
    for (var i = 0; i < items.length; i++) {
        if (items[i].checked) {
            return items[i].value;
        }
    }
}

function printObject(obj) {
    for (var key in obj) {
        console.log(key);
        for (var value in obj[key]) {
            console.log(value, obj[key][value]);
        }
    }
}

function calculateTotalPrice(customer) {
    var total = 0;
    for (var key in customer) {
        switch (key) {
            case "hardcopy":
                total += +calculateItemPrice(customer[key], "hardcopy");
                break;
            case "poster":
                total += +calculateItemPrice(customer[key], "poster");
                break;
            case "mug":
                total += +calculateItemPrice(customer[key], "mug");
                break;
            case "tshirt":
                total += +calculateItemPrice(customer[key], "tshirt");
                break;
        }
    }
    if (document.getElementById("glossy").checked === true) {
        for (var i = 0; i < glossyFinishCheck.length; i++) {
            if (glossyFinishCheck[i])
                total += +2;
        }
    }
    return total;
}

function calculateItemPrice(item, type) {
    var total = 0;
    for (var key in item) {
        switch (key) {
            case "good":
                total += +price[type][0] * +item[key];
                break;
            case "veryGood":
                total += +price[type][1] * +item[key];
                break;
            case "excellent":
                total += +price[type][2] * +item[key];
                break;
        }
    }
    return total;
}

function timeToDeliver() {
    var date = new Date();
    var days;
    for (var i = glossyFinishCheck.length - 1; i >= 0; i--) {
        if (glossyFinishCheck[i]) {
            days = i + 1;
            break;
        }
    }
    return new Date(date.getTime() + 24 * 60 * 60 * 1000 * days);
}