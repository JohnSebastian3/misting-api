const express = require('express');
const app = express();
const cors = require('cors');
const PORT = 8000;

app.use(express.json());
app.use(cors());

const allomanticMetals = [
  // Physical Metals 
  {
    'name': 'Steel',
    'mistingType': 'Coinshot',
    'influence': 'External',
    'type': 'Pushing',
    'effect': 'Physical'
  },
  {
    'name': 'Iron',
    'mistingType': 'Lurcher',
    'influence': 'External',
    'type': 'Pulling',
    'effect': 'Physical'
  },
  {
    'name': 'Pewter',
    'mistingType': 'Thug',
    'influence': 'Internal',
    'type': 'Pushing',
    'effect': 'Physical'
  },
  {
    'name': 'Tin',
    'mistingType': 'Tineye',
    'influence': 'Internal',
    'type': 'Pulling',
    'effect': 'Physical'
  },
  // Mental Metals
  {
    'name': 'Zinc',
    'mistingType': 'Rioter',
    'influence': 'External',
    'type': 'Pulling',
    'effect': 'Mental'
  },
  {
    'name': 'Brass',
    'mistingType': 'Soother',
    'influence': 'External',
    'type': 'Pushing',
    'effect': 'Mental'
  },
  {
    'name': 'Copper',
    'mistingType': 'Smoker',
    'influence': 'Internal',
    'type': 'Pulling',
    'effect': 'Mental'
  },
  {
    'name': 'Bronze',
    'mistingType': 'Seeker',
    'influence': 'Internal',
    'type': 'Pushing',
    'effect': 'Mental'
  },
  // Other
  {
    'name': 'Gold',
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
  const metal = allomanticMetals.find(metal => metal.name = metalName);

  if(metal) {
    res.json(metal.mistingType);
  }
   else {
     res.status(404).end();
   }
}) 



app.listen(process.env.PORT || PORT, () => {
  console.log('Server is running.');
})


