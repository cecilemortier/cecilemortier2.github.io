var encodedStr = document.getElementById('coded').innerHTML;
var decodedStr = atob(encodedStr);

document.getElementById('coded').innerHTML = decodedStr;