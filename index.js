const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname, 'Includes')));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'Includes', 'index.html'));
});

app.listen(3000, () => {
  console.log(`Server is running at http://localhost:5000`);
});
