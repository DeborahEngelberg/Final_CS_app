// server.js
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
app.use(bodyParser.json());
app.use(cors());

mongoose.connect('mongodb://localhost:27017/highlights', { useNewUrlParser: true, useUnifiedTopology: true });

const highlightSchema = new mongoose.Schema({
  highlight: String,
  dateTime: String,
  count: Number,
});

const Highlight = mongoose.model('Highlight', highlightSchema);

app.post('/api/highlight', async (req, res) => {
  const { highlight, dateTime, count } = req.body;
  const newHighlight = new Highlight({ highlight, dateTime, count });
  await newHighlight.save();
  res.send({ message: 'Highlight saved successfully' });
});

app.listen(3000, () => {
  console.log('Server running on port 3000');
});
