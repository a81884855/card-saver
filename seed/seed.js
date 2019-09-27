const GoogleSpreadsheet = require('google-spreadsheet');
const { promisify } = require('util');
const db = require('./schema');

const creds = require('./Super-Card-Saver-5c5fa83a38c9.json');
const config = require('./config');

function readRow(cardInfo) {
  const {
    name,
    image,
    gas,
    gasadditional,
    restaurant,
    restaurantadditional,
    online,
    onlineadditional,
    travel,
    traveladditional,
    furnitures,
    furnituresadditional,
    utilities,
    utilitiesadditional,
    phone,
    phoneadditional,
    desc,
    website,
    annual
  } = cardInfo;

  db.Card.findOneAndUpdate(
    { name },
    {
      name,
      image,
      gas,
      gasAdditional: gasadditional,
      restaurant,
      restaurantAdditional: restaurantadditional,
      online,
      onlineAdditional: onlineadditional,
      travel,
      travelAdditional: traveladditional,
      furnitures,
      furnituresAdditional: furnituresadditional,
      utilities,
      utilitiesAdditional: utilitiesadditional,
      phone,
      phoneAdditional: phoneadditional,
      desc,
      website,
      annual
    },
    {
      new: true,
      upsert: true
    }
  )
    .then(res => console.log(res))
    .catch(err => console.log(err));
}

async function seed() {
  const doc = new GoogleSpreadsheet(config.GoogleSpreadsheet);
  await promisify(doc.useServiceAccountAuth)(creds);
  const info = await promisify(doc.getInfo)();
  const sheet = info.worksheets[0];

  const rows = await promisify(sheet.getRows)({
    offset: 1
  });

  rows.forEach(row => {
    readRow(row);
  });
}

seed();
