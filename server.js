const soap = require('soap');
const express = require('express');
const fetch = require('node-fetch');
const { key } = require("./key.json");
const app = express();

// Resolve serviço de geocoding
const service = {
  Geocode_Service: {
    Geocode_Port: {
      performGeocode(args) {
        console.log(args)

        return fetch(`https://maps.googleapis.com/maps/api/geocode/json?address=${args.endereco}&key=${key}&bounds=-8.09,-34.8|-8.0,-35`)
          .then(function (response) {
            return response.json()
          }).then(function (json) {
            console.log(json)
            const position = json.results[0].geometry.location;
            console.log(json.results[0].geometry.location)
            return { latitude: position.lat, longitude: position.lng };
          });
      },
      reverseGeocode(args) {
        console.log(args)

        return fetch(`https://maps.googleapis.com/maps/api/geocode/json?latlng=${args.latitude},${args.longitude}&key=${key}`)
          .then(function (response) {
            return response.json()
          }).then(function (json) {
            console.log(json)
            return {endereco: json.results[0].formatted_address.split("-")[0]};
          });

      }

    }
  }
};

// Le wsdl
const xml = require('fs').readFileSync('./geocoder.wsdl', 'utf8');

//Cria servidor em express
const server = app.listen(7000)
soap.listen(server, '/geocoder', service, xml);
