window.onload = init;
var headers = {};
var url = "http://localhost:3000";

function init() {
    if (localStorage.getItem("token")) {
        document.querySelector('.btn-secondary').addEventListener('click', function () {
            window.location.href = "RH.html"
        });
        document.querySelector('.btn-primary').addEventListener('click', loadEmployee());
    } else {
        window.location.href = "RH.html";
    }
}