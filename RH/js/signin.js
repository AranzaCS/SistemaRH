window.onload = init;

function init() {
    if (localStorage.getItem("token")) {
        document.querySelector('.btn-secondary').addEventListener('click', function () {
            window.location.href = "RH.html"
        });
        document.querySelector('.btn-primary').addEventListener('click', signin);
    } else {
        window.location.href = "index.html";
    }
}

function signin() {
    var name = document.getElementById('input-name').value;
    var surname = document.getElementById('input-surname').value;
    var mail = document.getElementById('input-mail').value;
    var address = document.getElementById('inputAddress').value;
    var phone = document.getElementById('inputZip').value;

    axios({
        method: 'post',
        url: 'http://localhost:3000/employee',
        data: {
            emp_name: name,
            emp_surnames: surname,
            emp_email: mail,
            emp_address: address,
            emp_phone: phone
        },
        headers: {
            'Authorization': "bearer " + localStorage.getItem("token")
        }
    }).then(function (res) {
        console.log(res);
        alert("Registro exitoso");
        window.location.href = "RH.html";
    }).catch(function (err) {
        console.log(err);
    });
}
