const express = require("express");
require("dotenv").config();
const { CoustomRouter } = require("./routers");

app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/api/coustom", CoustomRouter);

app.listen(process.env.SERVER_HOST, () => {
  console.log("Sever running");
});
