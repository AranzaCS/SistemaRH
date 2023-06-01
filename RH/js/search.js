window.onload = init;

function init() {
    if (localStorage.getItem("token")) {
        document.querySelector('.btn-secondary').addEventListener('click', function () {
            window.location.href = "RH.html"
        });
        document.querySelector('.btn-outline-dark').addEventListener('click', loadEmployee);
        document.querySelector('.btn-primary').addEventListener('click', loadEmployeeX);
    } else {
        window.location.href = "index.html";
    }
}

function loadEmployee() {
    axios({
        method: 'get',
        url: 'http://localhost:3000/employee',
        headers: {
            'Authorization': "bearer " + localStorage.getItem("token")
        }
    }).then(function (res) {
        console.log(res);
        displayEmployee(res.data.message);
    }).catch(function (err) {
        console.log(err);
    });
}

function loadEmployeeX() {
    var name = document.getElementById('input-name').value;

    axios({
        method: 'get',
        url: 'http://localhost:3000/employee/' + name,
        data: {
            emp_name: name
        },
        headers: {
            'Authorization': "bearer " + localStorage.getItem("token")
        }
    }).then(function (res) {
        if (name == !null) {
            console.log(res);
            displayEmployee(res.data.message);
        }
    }).catch(function (err) {
        console.log(err);
    });
}

function displayEmployee(employee) {
    //HTMLBodyElement.reset;
    var body = document.querySelector("body");
    var aux = 0;

    if (aux == 0) {
        window.location.reload("search.html");
    }
    for (var i = 0; i < employee.length; i++) {
        aux = 1;
        if (aux == 1) {
            body.innerHTML += `<h6 class="mt-3">${employee[i].emp_id} ${employee[i].emp_name} ${employee[i].emp_surnames} ${employee[i].emp_phone} ${employee[i].emp_email} ${employee[i].emp_address}</h6>`;
        }
    }
}
