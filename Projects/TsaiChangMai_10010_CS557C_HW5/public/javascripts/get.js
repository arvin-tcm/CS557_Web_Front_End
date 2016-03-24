/*  
 * Student Info: Name=Tsai-Chang Mai, ID=10010
 * Subject: CS557(C)_HW5_Spring_2016
 * Author: Arvin-tcm 
 * Filename: get.js 
 * Date and Time: Mar 23, 2016 4:53:34 PM 
 * Project Name: site 
 */
function myFunc(item, url, action) {
    console.log(item.id);
    console.log(url);
    var quantity = document.getElementById("quantity_" + item.id);
    console.log(quantity.value);
    var xmlhttp = new XMLHttpRequest();
    url = url + "?itemname=" + item.id + "&quantity=" + quantity.value;
    if (action === 'update') {
        url = url + "&act=update";
    } else if (action === 'delete') {
        url = url + "&act=delete";
    }
    xmlhttp.open("GET", url, true);
    xmlhttp.send();
    location.reload();
}



