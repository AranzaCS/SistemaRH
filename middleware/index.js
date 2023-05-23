module.exports = (req, res, next) => {
    return res.status(200).json({ code: 1, message: 'Bienvenid@ al Sistema de Recursos Humanos de la empresa Taller de Node.js S.A. de C.V.'});
}