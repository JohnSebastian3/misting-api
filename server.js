const express = require('express');
const app = express();
const cors = require('cors');
const PORT = 8000;

app.use(express.json());
app.use(cors());

const allomanticMetals = [
  // Physical Metals 
  {
    'name': 'steel',
    'mistingType': 'Coinshot',
    'influence': 'External',
    'type': 'Pushing',
    'effect': 'Physical'
  },
  {
    'name': 'iron',
    'mistingType': 'Lurcher',
    'influence': 'External',
    'type': 'Pulling',
    'effect': 'Physical'
  },
  {
    'name': 'pewter',
    'mistingType': 'Thug',
    'influence': 'Internal',
    'type': 'Pushing',
    'effect': 'Physical'
  },
  {
    'name': 'tin',
    'mistingType': 'Tineye',
    'influence': 'Internal',
    'type': 'Pulling',
    'effect': 'Physical'
  },
  // Mental Metals
  {
    'name': 'zinc',
    'mistingType': 'Rioter',
    'influence': 'External',
    'type': 'Pulling',
    'effect': 'Mental'
  },
  {
    'name': 'brass',
    'mistingType': 'Soother',
    'influence': 'External',
    'type': 'Pushing',
    'effect': 'Mental'
  },
  {
    'name': 'copper',
    'mistingType': 'Smoker',
    'influence': 'Internal',
    'type': 'Pulling',
    'effect': 'Mental'
  },
  {
    'name': 'bronze',
    'mistingType': 'Seeker',
    'influence': 'Internal',
    'type': 'Pushing',
    'effect': 'Mental'
  },
  // Other
  {
    'name': 'gold',
    'mistingType': 'Augur',
    'influence': 'Internal',
    'type': 'Pulling',
    'effect': 'Temporal'
  },
]

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
})

app.get('/api', (req, res) => {
  res.json(allomanticMetals);
})

app.get('/api/:metal', (req, res) => {
  const metalName = req.params.metal;
  const metal = allomanticMetals.find(metal => metal['name'] === metalName);
  
  if(metal) {
    res.json(metal);
  }
   else {
     res.status(404).end();
   }
}) 

app.get('/clientside/js/main.js', (req, res) => {
  res.sendFile(__dirname + '/clientside/js/main.js');
})


app.listen(process.env.PORT || PORT, () => {
  console.log('Server is running.');
})


