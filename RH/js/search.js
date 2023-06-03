window.onload = init;
var aux = 1;

function init() {
    if (localStorage.getItem("token")) {
        document.querySelector('.btn-secondary').addEventListener('click', function () {
            window.location.href = "RH.html"
        });
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
        alert("Empleado no encontrado");
    });
}

function loadEmployeeX() {
    let name = document.getElementById('input-name').value;
    
    axios({
        method: 'get',
        url: 'http://localhost:3000/employee/' + name,
        headers: {
            'Authorization': "bearer " + localStorage.getItem("token")
        }
    }).then(function (res) {
        console.log(res);
        displayEmployee(res.data.message);
    }).catch(function (err) {
        console.log(err);
        alert("Empleado no encontrado");
    });
}

function displayEmployee(employee) {
    if (aux == 0) {
        window.location.reload("search.html");
        aux = 1;
    }

    if (aux == 1) {
        buildTable(employee);
        aux = 0;
    }
}

function buildTable(data) {
    var table = document.getElementById('empTable');

    for (var i = 0; i < data.length; i++) {
        var row = `<tr>
                    <td>${data[i].emp_id}</td>
                    <td>${data[i].emp_name}</td>
                    <td>${data[i].emp_surnames}</td>
                    <td>${data[i].emp_phone}</td>
                    <td>${data[i].emp_email}</td>
                    <td>${data[i].emp_address}</td>
                </tr>`;
        table.innerHTML += row;
    }
}