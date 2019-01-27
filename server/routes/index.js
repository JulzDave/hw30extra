var express = require('express');
var router = express.Router();
var mysql = require('promise-mysql');

var pool = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: 'root',
  connectionLimit: 10
});

router.post('/newpet', async (req, res, nest) => {
  result = await pool.query(`
  INSERT INTO pets.petstable (species, name, age) 
  VALUES('${req.body.species}','${req.body.name}',${req.body.age});`)
  res.json(result)
})



router.post('/findpet', async (req, res, next) => {
  await pool.query(`
  Select * FROM pets.petstable 
  WHERE species = '${req.body.species}' 
  `, (err, data) => {
    if (err) throw err;
    
    if (data.length > 0) {
      let htmlRes = `
    <!DOCTYPE html>
    <html>
    <head>
    <meta charset="UTF-8">
    <title>Results</title>
    </head>
    <body>
    <h3>Selected Species: ${req.body.species}</h3>
    </body>
    </html>
    `
    for(var i=0;i<data.length;i++){
      htmlRes += `
      <div style="float:left;width:150px;border:1px solid black;margin-right:10px;padding:10px;">
      <h4>Name: ${data[i].name}</h4>
      <h4>age: ${data[i].age}</h4><br/>
      </div>
      `}
      htmlRes +=`<br/><br/><br/><br/><br/><br/><br/><br/><br/><button onclick='location.href = "/"' style="float:left;">Go back</button>`
    res.send(htmlRes);
  }
    else {
      res.send(`<h2>no pets found</h2><br/><button onclick='location.href = "/"'>Go back</button>`)
    }
});
});


/* GET home page. */
// router.get('/createdb', async function(req, res, next) {
//   try
//   {
//  await pool.query(`CREATE DATABASE pets`);
//  await pool.query(`
//    CREATE TABLE pets.petstable (
//     id INT NOT NULL AUTO_INCREMENT,
//     species VARCHAR(20) NOT NULL,
//     name VARCHAR(20) NOT NULL,
//     age INT NOT NULL,
//     PRIMARY KEY (id)
//     )`);
//     res.send('<h3>DB and Table were created!!!</h3>');
//   }
// catch(err)
// {
//   console.log(err)
// } 
// });

module.exports = router;
