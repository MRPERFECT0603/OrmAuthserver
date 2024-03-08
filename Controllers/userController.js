const db = require("../Models");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const register = async (req, res) => {

    let user = await db.users.findOne({ where: { username: req.body.username } });

    if (user !== null) {
        return res.status(409).json("User Already Exist!");
    }

    const salt = bcrypt.genSaltSync(10);
    const hashedPassword = bcrypt.hashSync(req.body.password, salt);

    let userInfo = {
        username: req.body.username,
        email: req.body.email,
        password: hashedPassword,
        name: req.body.name
    }

    user = await db.users.create(userInfo);
    res.status(200).send(user);
}

const login = async (req, res) => {
    let user = await db.users.findOne({ where: { username: req.body.username } });

    if (user === null) {
        return res.status(400).json("User Doesn't Exist!");
    }

    const checkPassword = bcrypt.compareSync(req.body.password, user.password);
    if (!checkPassword)
        return res.status(400).json("Wrong Password!!!");
    const token = jwt.sign({ id: user.id }, "secretKey");
    const { password, ...others } = user;

    res.cookie("accessToken", token, {
        httpOnly: true,
    }).status(200).json(others);
}

const logout = (req, res) => {
    console.log("Attempting to log out...");
    res.clearCookie("accessToken", {
        secure: true,
        samesite: "none"
    }).status(200).json("User has been loged out!!!");
}

module.exports = { register, login , logout };