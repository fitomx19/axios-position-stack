const express = require('express');
const axios = require('axios').default;
const csv = require('csv-parser')
const fs = require('fs')
const results = [];

const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})



app.get('/api', (req,res)=>{
    const fs = require('fs')
    const results = [];
    
    fs.createReadStream('csv.csv')
      .pipe(csv())
      .on('data', (data) => results.push(data))
      .on('end', () => {
        console.log(results);
    
    });


    const params = {
        access_key: 'e09c072489dfdd78113d3ec68e437ab1',
        query: results
      }

axios.get('http://api.positionstack.com/v1/forward', {params})
    .then(response => {
        console.log(response.data);
        res.send(response.data);
    }).catch(error => {
        console.log(error);
    });
})

