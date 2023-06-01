const express = require('express');
const employee = express.Router();
const db = require('../config/database');

employee.post('/', async (req, res, next) => {
    const { emp_name, emp_surnames, emp_phone, emp_email, emp_address } = req.body;
    if (req.body) {
        let query = "INSERT INTO employees(emp_name, emp_surnames, emp_phone, emp_email, emp_address)";
        query += `VALUES ('${emp_name}', '${emp_surnames}', '${emp_phone}', '${emp_email}', '${emp_address}')`;
        const rows = await db.query(query);

        (rows.affectedRows == 1) ?
            res.status(201).json({ code: 201, message: "Empleado insertado correctamente" }) :
            res.status(200).json({ code: 500, message: "Ocurrio un error" });
    }
    return res.status(200).json({ code: 500, message: "Campos incompletos" });
});

employee.delete('/:id([0-9]{1,3})', async (req, res, next) => {
    const query = `DELETE FROM employees WHERE emp_id=${req.params.id}`;
    const rows = await db.query(query);

    rows.affectedRows == 1 ?
        res.status(200).json({ code: 200, message: "Empleado borrado correctamente" }) :
        res.status(404).json({ code: 404, message: "Empleado no encontrado" });
});

employee.put('/:id([0-9]{1,3})', async (req, res, next) => {
    const { emp_id, emp_name, emp_surnames, emp_phone, emp_email, emp_address } = req.body;

    if (emp_id && emp_name && emp_surnames && emp_phone && emp_email && emp_address) {
        let query = `UPDATE employees SET emp_id='${emp_id}',emp_name='${emp_name}',emp_surnames='${emp_surnames}',emp_phone='${emp_phone}',emp_email='${emp_email}',emp_address='${emp_address}' WHERE emp_id=${req.params.id}`;

        const rows = await db.query(query);

        (rows.affectedRows == 1) ?
            res.status(200).json({ code: 200, message: "Empleado actualizado correctamente" }) :
            res.status(500).json({ code: 500, message: "Ocurrio un error" });
    }
    return res.status(500).json({ code: 500, message: "Campos incompletos" });
});

employee.patch('/:id([0-9]{1,3})', async (req, res, next) => {
    if (req.body.emp_name) {
        let query = `UPDATE employees SET emp_id='${req.body.emp_id}',emp_name='${req.body.emp_name}',emp_surnames='${req.body.emp_surnames}',emp_phone='${req.body.emp_phone}',emp_email='${req.body.emp_email}',emp_address='${req.body.emp_address}' WHERE emp_id=${req.params.id}`;
        const rows = await db.query(query);

        (rows.affectedRows == 1) ?
            res.status(200).json({ code: 200, message: "Empleado actualizado correctamente" }) :
            res.status(500).json({ code: 500, message: "Ocurrio un error" });
    }
    return res.status(500).json({ code: 500, message: "Campos incompletos"});
});

employee.get('/', async (req,res,next) => {
    const rts = await db.query('SELECT * FROM employees');
    return res.status(200).json({ code: 200, message: rts });
});

employee.get('/:id([0-9]{1,3})', async (req, res, next) => {
    const id = req.params.id;
    if (id >= 1 && id <= 50) {
        const rts = await db.query("SELECT * FROM employees WHERE emp_id=" + id + ";");
        (rts.length > 0) ?
        res.status(200).json({ code: 200, message: rts }) :
        res.status(404).json({ code: 404, message: 'Empleado no encontrado' });
    }
    
});

employee.get('/:name([A-Za-z]+)', async (req, res, next) => {
    const name = req.params.name;
    const rts = await db.query("SELECT * FROM employees WHERE emp_name='" + name + "';");

    (rts.length > 0) ?
        res.status(200).json({ code: 200, message: rts }) :
        res.status(404).json({ code: 404, message: 'Empleado no encontrado' });
});

module.exports = employee;