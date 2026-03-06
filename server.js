const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

mongoose.connect("mongodb://127.0.0.1:27017/user_role_db")
.then(()=>{
    console.log("MongoDB connected");
})
.catch(err=>{
    console.log(err);
});

const userRoutes = require("./routes/userRoutes");

app.use("/api", userRoutes);

app.listen(3000, ()=>{
    console.log("Server running at port 3000");
});