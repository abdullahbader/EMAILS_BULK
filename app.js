const sgMail= require('@sendgrid/mail')

const API_KEY='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'

sgMail.setApiKey(API_KEY)
const message={
    to:["hyder_s5@hotmail.com", "7do.raad@gmail.com"],
    from:"abdallah.b.b96@gmail.com",
    subject:"hello from our agency",
    text:"hello from us",
    html:"<h1>hello all</h1>"
}
sgMail.send(message).then((response)=>console.log("email sent")).catch((error)=>console.log(error.message) )
