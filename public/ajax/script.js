var url = "https://api.axios.react.dev.br/v1/users/1";
var xhr = null;
if (window.XMLHttpRequest) {
  xhr = new XMLHttpRequest();
} else if (window.ActiveXObject) {
  xhr = new ActiveXObject("Microsoft.XMLHTTP");
}

if (xhr) {
  xhr.onreadystatechange = function () {
    if (xhr.readyState == 4 && xhr.status == 200) {
      var data = JSON.parse(xhr.responseText);
      console.log(data);
    }
  };
  xhr.open("GET", url, true);
  xhr.send(null);
}
