import inquirer from 'inquirer';
import QR from 'qr-image'
import fs from 'fs'
import { json } from 'express';
import { type } from 'os';

inquirer.prompt([
    {
      type: 'input',
      name: 'person',
      message: 'Name of person',

    },
    {
        type: 'input',
        name: 'number',
        message: 'contact number ',
      }, {
        type: 'input',
        name: 'email',
        message: 'email address',
      },


  ])
  .then((answers) => {

var qrData = JSON.stringify(answers);
    var qr_svg = QR.image(qrData,{ type:'png'});
    // qr_svg.pipe(fs.createWriteStream('qrimage.png'));
    const qrFilePath = './qrimage.png';
    qr_svg.pipe(fs.createWriteStream(qrFilePath));

    console.log('QR code has been generated and saved as qrimage.png!');
  })
  .catch((error) => {
    console.error('Something went wrong:', error);
  });
