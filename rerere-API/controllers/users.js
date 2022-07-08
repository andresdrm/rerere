const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const { sendRecoveryCodeEmail } = require("../services/mailService");
const db = require("../models/index");
const data = require("../Data/userData.json")

const saltRounds = 10;

exports.createUser = async (req, res) => {
  try {
    // console.log(req.body);
    const userPayload = req.body;
    const newUser = [
      id = new Date().getTime(),
      name = userPayload.name,
      email = userPayload.email,
      contrasena = await bcrypt.hash(userPayload.contrasena, saltRounds),
      phone = userPayload.phone,
    ];

    //res.json(newUser);
   // res.status(200);
   res.status(200).send(newUser);
  } catch (error) {
    res.status(500).json({
      message: "Ocurrió un error al insertar el usuario.",
      error,
    });
    return;
  }
};

exports.loginUser = async (req, res) => {
  // #swagger.tags = ['Users']
  try {
    const userPayload = req.body;
  /*  const user = await db.User.findOne({
      where: { email: userPayload.email },
    });*/
    let array = data;
    // console.log(array);
    const user = array.filter(e => e.email == userPayload.email);
    // console.log(user[0]);
    // array.find(user => user.email == email);
    if (!user[0] || !(await bcrypt.compare(userPayload.contrasena, user[0].contrasena))) {
      res.status(401).send("Invalid credentials");
      return;
    }
   // const roles = await db.UserRole.findAll({ where: { userId: user.id } });
    // const rolesIds = roles.map((r) => r.roleId);

   /* const token = jwt.sign(
      { userId: user.id },
      process.env.JWT_KEY,
      {
        expiresIn: "5m",
      }
    );*/
    // const result = {
    //   ...user.toJSON(),
    //  // token,
    // };
    const result = {
      email: user[0].email,
      name: user[0].name,
      id: user[0].id,
      phone: user[0].phone,
    }
   // res.json(result);
   res.status(200).send(result);
  } catch (error) {
    res.status(500).send("Server error: " + error);
  }
};

exports.recoverPassword = async (req, res) => {
  // #swagger.tags = ['Users']
  try {
    let array = data;
    const userPayload = req.body;
    const user = array.filter(e => e.email == userPayload.email);
    if (!user) {
      res.status(401).send("Datos no válidos");
      return;
    }
    const randomToken = Math.floor(
      Math.random() * (999999 - 100000 + 1) + 100000
    );

    const nowDate = new Date();
    const expirationDate = new Date(
      nowDate.setMinutes(nowDate.getMinutes() + 15)
    ).toISOString();

    const result = 
    {
      code: randomToken,
      expirationDate,
    }
    await sendRecoveryCodeEmail(user[0].email, randomToken);

     res.status(200).send(result);
  } catch (error) {
    res.status(500).send("Server error: " + error);
  }
};

exports.resetPassword = async (req, res) => {
  // #swagger.tags = ['Users']
  try {
    const userPayload = req.body;

    // const user = await db.User.findOne({
    //   where: { email: userPayload.email },
    //   include: ["recoveryCode"],
    // });
    const user = array.filter(e => e.email == userPayload.email);
    if (!user || !user.recoveryCode || user.recoveryCode.code !== userPayload.code) 
    {
      res.status(401).send("Datos no válidos");
      return;
    }
    
    if (user.recoveryCode.expirationDate < new Date()) 
    {
      res
        .status(401)
        .send(
          "El código de recuperación brindado ya expiró. Solicite un nuevo código de recuperación."
        );
      return;
   }

   // user.password = await bcrypt.hash(userPayload.password, saltRounds);
   // user.save();

   /* await db.UserRecoveryCode.destroy({
      where: {
        userId: user.id,
      },
    });
*/
   // res.status(204).send();
  } catch (error) {
    res.status(500).send("Server error: " + error);
  }
};


exports.listUsers = async (req, res) => {
  // #swagger.tags = ['Users']
  try {
   // const result = await db.User.findAll();
    res.json(result);
  } catch (error) {
    res.status(500).send("Server error: " + error);
  }
};
