module.exports = () => {
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