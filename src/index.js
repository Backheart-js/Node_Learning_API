import express from 'express';
import morgan from 'morgan';
import { default as db } from './config/database/index.js';
import routes from './resources/routes/index.js';

const app = express()
const port = 3000

//Connect DB
db.connect();

app.use(express.urlencoded()); //Bắt được dữ liệu submit từ form (dữ liệu trong body)
app.use(express.json());
//Bắt buộc phải có 2 cái middleware trên nếu không sẽ không lấy được dữ liệu trong body

app.use(morgan('combined'));

routes(app);

app.get('/', (req, res) => {
  res.send()
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})