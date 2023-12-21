const express = require('express');
const cors = require('cors');
const app = express(cors());
const port = 3000;
app.use(express.static('public'));
app.listen(port, () => console.log(`Example app listening on port ${port}!`));
