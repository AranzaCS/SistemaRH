window.onload = init;
var headers = {};
var url = "http://localhost:3000";

function init() {
    if (localStorage.getItem("token")) {
        navBar();
        document.querySelector('.btn-primary').addEventListener('click', loadEmployee());
        document.querySelector('.btn-secondary').addEventListener('click', loadEmployee());
    } else {
        window.location.href = "RH.html";
    }
}

function loadEmployee() {
    axios.get(url + "/employee", headers).then(function (res) {
        console.log(res);
        displayEmployee(res.data.message);
    }).catch(function (err) {
        console.log(err);
    });
}

function displayEmployee(employee) {
    var body = document.querySelector("body");
    for (var i = 0; i < employee.length; i++) {
        body.innerHTML += `<h3>${employee[i].emp_id} ${employee[i].emp_name} ${employee[i].emp_surnames} ${employee[i].emp_phone} ${employee[i].emp_email} ${employee[i].emp_address}</h3>`;
    }
}

function navBar() {
    document.querySelector('.btn-outline-success').addEventListener('click', function () {
        window.location.href = "signin.html"
    });
    document.querySelector('.btn-outline-primary').addEventListener('click', function () {
        window.location.href = "search.html"
    });
    document.querySelector('.btn-outline-info').addEventListener('click', function () {
        window.location.href = "edit.html"
    });
    document.querySelector('.btn-outline-danger').addEventListener('click', function () {
        window.location.href = "delete.html"
    });
}