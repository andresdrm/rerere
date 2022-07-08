const nodemailer = require("nodemailer");

const getTransporter = function () {
  let transport = nodemailer.createTransport({
    host: "	smtp.ethereal.email", 
    port: 587,
    auth: {
      user: "zakary.crona41@ethereal.email",
      pass: "HhqU5U7DbZw4wHHhVS"
    }
  });

  return transport;
};



exports.sendRecoveryCodeEmail = async (userEmail, randomToken) => {
  let transporter = getTransporter();
  console.log(userEmail);

  const options = {
    from: "zakary.crona41@ethereal.email",
    to: userEmail,
    subject: "Su código de recuperación",
    text: `Utilice este código para recuperar su contraseña: ${randomToken}`,
    html: `Utilice este código para recuperar su contraseña: <strong>${randomToken}</strong>`,
  }

  await transporter.sendMail(options, function(err, info){
    if(err)
    {
      console.log(err);
      return;
    }
    console.log("Sent: " + info.response);
  });
};




