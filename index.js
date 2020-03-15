
const express = require('express');
const path = require('path');

async function init() {

        
      const app = express();


    app.use(express.static(path.join(__dirname, 'build')));


    app.get('/*', function (req, res) {
        res.sendFile(path.join(__dirname, 'build', 'index.html'));
    }); 
  
    let server = app.listen(process.env.PORT || 8080, process.env.CUSTOM_HOST || '0.0.0.0', () => {
        console.log("App listening on port %s", server.address().port);
        console.log("Press Ctrl+C to quit.");  
    });    
    
  }    
       
  init() 
    .catch(err => console.log('Error', err));
   