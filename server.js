const express = require("express");
const app = express();
const PORT = process.env.PORT || 8000

//middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.send('Vivek Shaurya');
});
app.use("/api/users", require("./Routes/userRoute"));

app.listen(PORT, () => {
    console.log(`Server has been started at ${PORT}`);
});