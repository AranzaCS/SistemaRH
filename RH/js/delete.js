window.onload = init;

function init() {
    if (localStorage.getItem("token")) {
        document.querySelector('.btn-secondary').addEventListener('click', function () {
            window.location.href = "RH.html"
        });
        document.querySelector('.btn-primary').addEventListener('click', deleteEmployee());
    } else {
        window.location.href = "RH.html";
    }
}

function deleteEmployee() {
    var id = document.getElementById('input-id').value;

    axios({
        method: 'delete',
        url: 'http://localhost:3000/employee/' + id,
        data: {
            emp_id: id
        },
        headers: {
            'Authorization': "bearer " + localStorage.getItem("token")
        }
    }).then(function (res) {
        console.log(res);
        alert("Empleado eliminado con exito");
        window.location.href = "RH.html";
    }).catch(function (err) {
        console.log(err);
    });
}
