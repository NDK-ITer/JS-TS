const express = require('express');
const app = express();
const port = 7000;
const bodyParser = require('body-parser');
var productRoute = require('./Routers/ProductRoutes');
var userRoute = require('./Routers/UserRoutes');

//đọc thông tin trong body
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.use('/api/product/v1/', productRoute);
app.use('/api/user/v1/', userRoute);

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
