const soap = require('soap');
const url = 'http://localhost:7000/geocoder?wsdl';
const args = { endereco: "Lalalala" };
soap.createClient(url, function(err, client) {
  if (err) console.error(err);
  else {
    client.performGeocode(args, function(err, response) {
      if (err) console.error(err);
      else {
        console.log(response);
      }
    });
    client.reverseGeocode(args, function(err, response) {
        if (err) console.error(err);
        else {
          console.log(response);
        }
      });
  
  }
});
