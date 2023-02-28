
'use strict';

const express = require('express');

const router = express.Router()

// Constants
//const PORT = 8080;
const PORT = 7046;

const HOST = '0.0.0.0';

//app.use( express.json() )
// App
const app = express();
app.use( express.json() )

router.post('/hecho',(req,res) => {

	//const { message } = req.body;
	res.send({
		message: 'hecho with RP MS '})
}
);

router.post('/api2',(req,res) => {

	//const { message } = req.body;
	res.send({
		message: 'Soy la APP 2 '})
}
);

router.get('/tshirt', (req, res) => {
	res.status(200).send({
	 	tshirt: 'docker',
		size: 'large'	
	})
});

router.get('/healthz', (req, res) => {
	res.status(200).send('Ok');
});

// app.post('/hecho',(req,res) => {

// 	//const { message } = req.body;
// 	res.send({
// 		message: 'hecho with RP MS '})
// }
// );
app.use('/service2',router)
//app.use('/',router)

app.listen(PORT, HOST, () => {
  console.log(`Running on http://${HOST}:${PORT}`);
});


 