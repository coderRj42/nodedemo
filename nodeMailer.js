var mail = require("nodemailer")
var transport = mail.createTransport({
    host:'smtp.gmail.com',
    port :587,
    secure :false,
    requireTLS:true,
    auth:{
        user:'4nm19cs081@nmamit.in',
        pass:'Jaggi@123'
    }
})
var mailOptions={
    to:'jaykumarksg@gmail.com',
    from:'4nm19cs081@nmamit.in',
    subject:"testing node",
    text : 'just checking node mailer'
}
transport.sendMail(mailOptions,function(error,info){
    if(error){
        console.warn(error)
    }
    else{
        console.warn(info)
    }
})