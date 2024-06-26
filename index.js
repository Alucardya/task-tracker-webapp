const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static('public'));

app.post('/submit-task', (req, res) => {
  const taskData = req.body;
  // Обработка данных задачи
  res.send('Task received');
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
