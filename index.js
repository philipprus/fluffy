
const  { connectDb }  = require('./server/store/connection');
const app = require('./server/app');


async function init() {
    await connectDb();
  
    let server = app.listen(process.env.PORT || 8080, () => {
        console.log("App listening on port %s", server.address().port);
        console.log("Press Ctrl+C to quit.");
    });
  }
  
  init()
    .catch(err => console.log('Error', err));
  