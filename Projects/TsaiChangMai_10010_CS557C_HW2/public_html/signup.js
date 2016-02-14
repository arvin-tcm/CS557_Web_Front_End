/*  
 * Student Info: Name=Tsai-Chang Mai, ID=10010
 * Subject: CS557(C)_HW2_Spring_2016
 * Author: Arvin 
 * Filename: signup.js 
 * Date and Time: Feb 13, 2016 4:12:52 PM 
 * Project Name: TsaiChangMai_10010_CS557C_HW2 
 */
function validate(userForm) {
    // email validation
    div = document.getElementById("emailmsg");
    div.style.color = "red";
    if (div.hasChildNodes())
    {
        div.removeChild(div.firstChild);
    }
    // RE for email address
    regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    match = regex.exec(userForm.emailaddress.value);
    if (!match)
    {
        div.appendChild(document.createTextNode("Invalid Email"));
        userForm.emailaddress.focus();
        return false;
    }

    // password validation
    div = document.getElementById("passwdmsg");
    div.style.color = "red";
    if (div.hasChildNodes())
    {
        div.removeChild(div.firstChild);
    }
    if (userForm.password.value.length <= 5)
    {
        div.appendChild(document.createTextNode("The password should be of at least size 6"));
        userForm.password.focus();
        return false;
    }
    div = document.getElementById("repasswdmsg");
    div.style.color = "red";
    if (div.hasChildNodes())
    {
        div.removeChild(div.firstChild);
    }
    if (userForm.password.value !== userForm.repassword.value)
    {
        div.appendChild(document.createTextNode("The two passwords don't match"));
        userForm.password.focus();
        return false;
    }

    // name validation
    var div = document.getElementById("usrmsg");
    div.style.color = "red";
    if (div.hasChildNodes())
    {
        div.removeChild(div.firstChild);
    }
    if (userForm.fullname.value.length === 0)
    {
        div.appendChild(document.createTextNode("Name cannot be blank"));
        userForm.fullname.focus();
        return false;
    }

    // zip code validation
    div = document.getElementById("zipmsg");
    div.style.color = "red";
    if (div.hasChildNodes())
    {
        div.removeChild(div.firstChild);
    }
    if (userForm.zipcode.value.length === 0)
    {
        div.appendChild(document.createTextNode("Zip Code cannot be blank"));
        userForm.zipcode.focus();
        return false;
    }

    // RE for zip code
    regex = /(^\d{5}$)|(^\d{5}-\d{4}$)/;
    match = regex.exec(userForm.zipcode.value);
    if (!match)
    {
        div.appendChild(document.createTextNode("Invalid Zip Code"));
        userForm.zipcode.focus();
        return false;
    }

    // phone number validation
    div = document.getElementById("phonemsg");
    div.style.color = "red";
    if (div.hasChildNodes())
    {
        div.removeChild(div.firstChild);
    }
    if (userForm.phoneno.value.length === 0)
    {
        div.appendChild(document.createTextNode("Phone Number cannot be blank"));
        userForm.phoneno.focus();
        return false;
    }

    // RE for phone number
    regex = /^[(]{0,1}[0-9]{3}[)]{0,1}[-\s\.]{0,1}[0-9]{3}[-\s\.]{0,1}[0-9]{4}$/;
    match = regex.exec(userForm.phoneno.value);
    if (!match)
    {
        div.appendChild(document.createTextNode("Invalid Phone Number"));
        userForm.phoneno.focus();
        return false;
    }

    return true;
}

function addcustomer(userForm) {
    var customer = {};
    customer.email = userForm.emailaddress.value;
    customer.password = userForm.password.value;
    customer.fullname = userForm.fullname.value;
    customer.address = userForm.address.value;
    customer.city = userForm.city.value;
    customer.state = userForm.state.value;
    customer.country = userForm.country.value;
    customer.zipcode = userForm.zipcode.value;
    customer.phoneno = userForm.phoneno.value;

    // Convert the customer object into JSON data  
    localStorage["customer"] = JSON.stringify(customer);
    //alert(localStorage.customer);
    return true;
}

function getCustomer() {
    var customerString = "";
    if (localStorage.customer !== undefined) {
        customerString = localStorage.customer;
        customer = JSON.parse(localStorage.customer);
        return customer;
    }
    return customerString;
}
function showCustomer() {
    var divCustomer = document.getElementById("customer");
    customer = getCustomer();
    divCustomer.innerHTML = JSON.stringify(customer);
}
function printTable() {
    customer = getCustomer();
    document.writeln("<br>");
    document.writeln("<table border='1' cellspacing='1' cellpadding='3'");

    // Email
    document.writeln("<tr>");
    document.writeln("<td>Email</td>");
    document.writeln("<td>" + customer.email + "</td>");
    document.writeln("</tr>");

    // password
    document.writeln("<tr>");
    document.writeln("<td>Password</td>");
    document.writeln("<td>" + customer.password + "</td>");
    document.writeln("</tr>");

    // full name
    document.writeln("<tr>");
    document.writeln("<td>Full Name</td>");
    document.writeln("<td>" + customer.fullname + "</td>");
    document.writeln("</tr>");

    // address
    document.writeln("<tr>");
    document.writeln("<td>Address</td>");
    document.writeln("<td>" + customer.address + "</td>");
    document.writeln("</tr>");

    // city
    document.writeln("<tr>");
    document.writeln("<td>City</td>");
    document.writeln("<td>" + customer.city + "</td>");
    document.writeln("</tr>");

    // state
    document.writeln("<tr>");
    document.writeln("<td>State</td>");
    document.writeln("<td>" + customer.state + "</td>");
    document.writeln("</tr>");

    // country
    document.writeln("<tr>");
    document.writeln("<td>Country</td>");
    document.writeln("<td>" + customer.country + "</td>");
    document.writeln("</tr>");

    // zip
    document.writeln("<tr>");
    document.writeln("<td>zip</td>");
    document.writeln("<td>" + customer.zipcode + "</td>");
    document.writeln("</tr>");

    // phone number
    document.writeln("<tr>");
    document.writeln("<td>Phone</td>");
    document.writeln("<td>" + customer.phoneno + "</td>");
    document.writeln("</tr>");

    document.writeln("</table>");
}
