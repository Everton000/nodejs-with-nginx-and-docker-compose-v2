const express = require('express');
const app = express();
const port = 3000;
const configDb = {
    host: 'database',
    user: 'root',
    password: 'root',
    database: 'nodedb'
};

let i = 0;

app.get('', (req, res) => {
    let output = '<h1>Full Cycle!</h1>';

    const mysql = require('mysql');
    const connection = mysql.createConnection(configDb);

    connection.connect(function(err) {

        if (err) throw err;
        const sql = `INSERT INTO people(name) values('Everton ${i++}')`;
        connection.query(sql);
        
        const sqlSelect = `SELECT * FROM people;`;
        connection.query(sqlSelect, function (err, result, fields) {
            if (err) throw err;
            result.forEach(person => {
                output += `<p>${person.name}</p>`;
            });
            res.send(output);
        });
    });
});

app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
});