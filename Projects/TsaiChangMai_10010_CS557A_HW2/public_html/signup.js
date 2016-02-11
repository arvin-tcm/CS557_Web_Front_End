function validate(userForm) {
    // email validation
    div = document.getElementById("emailmsg");
    div.style.color = "red";
    if (div.hasChildNodes())
    {
        div.removeChild(div.firstChild);
    }
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
    localStorage.customer = JSON.stringify(customer);
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
