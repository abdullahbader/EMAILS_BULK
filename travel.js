const xlsx = require('xlsx');


const filePath = process.argv.slice(2)[0];
const workbook = xlsx.readFile(filePath);
const worksheet = workbook.Sheets[workbook.SheetNames[0]];
    
let emails = [];
let post = {};

for (let cell in worksheet) {
    const cellAsString = cell.toString();

    if (cellAsString[1] !== 'r' && cellAsString[1] !== 'm' && cellAsString[1] > 1) {
        if (cellAsString[0] === 'A') {
            post.emails = worksheet[cell].v;

        }
        
          if (cellAsString[0] === 'B') {
              post.name = worksheet[cell].v;
              console.log(post)
              emails.push(post);
              post = {};
          }
             
        // // }
        
        
        // if (cellAsString[0] === 'C') {
        //     post.released = worksheet[cell].v;
//             posts.push(post);
        //   //  console.log(post.released
        
    
    }
    
}

let Emails = emails.map(({ emails }) => emails)
console.log(Emails)
let Names = emails.map(({ name }) => name)
let Lnames = Names.map(( name1 ) => console.log(name1))
console.log(Lnames)



//({...,status:true})


const sgMail= require('@sendgrid/mail')

const API_KEY='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'
sgMail.setApiKey(API_KEY)
const message={
    to:Emails,
    from:"abdallah.b.b96@gmail.com",
    subject:"honyMooooooooon Prizzzzzzzzzzzzzz",
    text:"hello from us",
    html:`<h1>congrationlas you ${Lnames} woooooooooooooooo0o0o0oo0ooooon</h1>`,
}
// },
//     {
//         to:Emails,
//         from:"abdallah.b.b96@gmail.com",
//         subject:"honyMooooooooon Prizzzzzzzzzzzzzz",
//         text:"hello from us",
//         html:`<h1>congrationlas you ${Names} woooooooooooooooo0o0o0oo0ooooon</h1>`
//     }
// ]

sgMail.send(message).then((response)=>console.log("email sent")).catch((error)=>console.log(error.message) )