import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";
import userRoutes from "./routes/users.js";
import stopRoutes from "./routes/stops.js";
import busRoutes from "./routes/busses.js";

const app = express();
const port = 4000;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.get('/', (req, res) => {
  res.send('Hello World!');
});
app.use('/user', userRoutes);
app.use('/stop', stopRoutes);
app.use('/bus', busRoutes);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});

