import express from "express";

const app = express();
const PORT = 4000;

app.get('/', (req, res) => {
 res.status(200).json({message: "Hello, Welcome to my backend"});
});

app.listen(PORT, () => {
 console.log("Server Listening on PORT:" + PORT);
});