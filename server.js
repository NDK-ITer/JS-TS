
;
const app = require('./src/app');
const port = 7000;

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
})