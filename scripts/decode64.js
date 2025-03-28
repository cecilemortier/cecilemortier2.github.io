var encodedStr = "MDQ3MyA2NCA2NCAyNA==";
var decodedStr = atob(encodedStr);

document.getElementById('coded').innerHTML = '<a href="tel:' + decodedStr.replace(/\s+/g, '') + '">' + decodedStr + '</a>';