const express = require('express');

const app = express();
const router = express.Router();

app.set('views', './views');
app.set('view engine', 'hbs');

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static('./static'));

let name = 'Andy';
let totalViews = 0;

router.get('/index', function(req, res, next) {
	totalViews++;
	res.render('index', { name : name, views : totalViews });
});

router.post('/index', function(req, res, next) {
	name = req.body.name;
	res.redirect('/index');
});

app.use(router);

const port = 5000;
app.listen(port, () => console.log(`Example app listening on port ${port}!`));
