function expandPublishers() {
 document.getElementById("products-list-publishers").style.display = "block";
 document.getElementById("expand-publishers-button").classList.add("icon-minus");
 document.getElementById("expand-publishers-button").classList.remove("icon-plus");
 document.getElementById("expand-publishers-button").setAttribute("onclick", "javascript: unexpandPublishers();");
}

function unexpandPublishers() {
 document.getElementById("products-list-publishers").style.display = "none";
 document.getElementById("expand-publishers-button").classList.add("icon-plus");
 document.getElementById("expand-publishers-button").classList.remove("icon-minus");
 document.getElementById("expand-publishers-button").setAttribute("onclick", "javascript: expandPublishers();");
}