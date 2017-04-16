var express = require('express')
var bodyParser = require('body-parser')
var Client = require('mariasql')

var c = new Client({
    host: '',
    user: '',
    password: '',
    db: 'appdb'
})

c.query('CREATE TABLE IF NOT EXISTS contacts(id INT PRIMARY KEY AUTO_INCREMENT, name TEXT, phone TEXT)', function(err, rows) {
    if(err) {
        throw err
    }
})

var app = express()
app.use(express.static('public'))
app.use(bodyParser.json())

app.get('/api/v1/contacts', function(request, response) {
    c.query('SELECT * FROM contacts', function(err, rows) {
        if(err) {
            console.log(err)
            return
        }

        response.json(rows)
        return
    })
})

app.delete('/api/v1/contacts/:contactID', function(request, response) {
    c.query('DELETE FROM contacts WHERE id = :id', {
        id: request.params.contactID
    }, function(err, rows) {
        if(err) {
            console.log(err)
            response.json({
                success: true
            })
            return
        }

        response.json({
            success: true
        })
        return
    })
})

app.post('/api/v1/contacts', function(request, response) {
    c.query('INSERT INTO contacts(name, phone) VALUES(:name, :phone)', {
        name: request.body.name,
        phone: request.body.phone
    }, function(err, rows) {
        if(err) {
            console.log(err)
            response.json({
                success: false
            })
            return
        }

        response.json({
            success: true
        })
        return
    })
})

app.listen(3000, function() {
    console.log('listening on port 3000')
})