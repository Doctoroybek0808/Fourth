process.env['DEBUG'] = 'app:*';

const debug = require("debug")('app:startup')
const express = require("express")
const morgan = require("morgan")
const logger = require("./middleware/logger")
const courses = require("./routes/courses")
const home = require("./routes/home")

const app = express();

app.set('view engine', 'pug')
app.set('views', './views')

app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(express.static('public'));
app.use('/api/courses', courses);
app.use('/', home);
app.use(logger)

if(app.get('env') === 'development') {
    app.use(morgan('tiny'));
    debug('morgan enabled...')
}

const port = process.env.PORT || 3000;
app.listen(port, ()=>{console.log(`Listening on port ${port}...`)})