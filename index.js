const express = require('express'),
constmorgan = require('morgan');
const bodyParser = require('body-parser');
const methodOverride = require('method-override');

const app = express();

    // Morgan middleware
    app.use(morgan('combined'));

// Static request
app.use(express.static('public'));

let topMovies = [
    { title: 'Top Gun', year: '1986' },
    { title: 'Jurassic Park', year: '1993', },
    { title: 'Pulp Ficton', year: '1994' },
    { title: 'Trap', year: '2024' },
    { title: 'Bad Boys', year: '1995' },
    { title: 'Trolls', year: '2016' },
    { title: 'Black Panther', year: '2018' },
    { title: 'The Sandlot', year: '1993' },
    { title: 'The Lion King', year: '1994' },
    { title: 'Split', year: 2016 }
];

// Get requests
app.get('/', (req, res) => {
    res.send('Welcome to my movie app!');
});

app.get('/documentation', (req, res) => {
    res.sendFile('public/documentation.html', { root: 'public'});
});

app.get('/movies', (req,res) => {
    res.json(topMovies);
});



app.use(bodyParser.urlencoded({
    extended: true
}));

app.use(bodyParser.json());
app.use(methodOverride());

app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something broke');
});

//listen for request
app.listen(8080, () => {
    console.log('Your app is listening on port 8080.');
});