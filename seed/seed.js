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
    gaslimit,
    restaurant,
    restaurantadditional,
    restaurantlimit,
    online,
    onlineadditional,
    onlinelimit,
    grocery,
    groceryadditional,
    grocerylimit,
    streaming,
    streamingadditional,
    streaminglimit,
    travel,
    traveladditional,
    travellimit,
    furnitures,
    furnituresadditional,
    furnitureslimit,
    utilities,
    utilitiesadditional,
    utilitieslimit,
    phone,
    phoneadditional,
    phonelimit,
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
      gasLimit: gaslimit || 100000,
      restaurant,
      restaurantAdditional: restaurantadditional,
      restaurantLimit: restaurantlimit || 100000,
      online,
      onlineAdditional: onlineadditional,
      onlineLimit: onlinelimit || 100000,
      grocery,
      groceryAdditional: groceryadditional,
      groceryLimit: grocerylimit || 100000,
      streaming,
      streamingAdditional: streamingadditional,
      streamingLimit: streaminglimit || 100000,
      travel,
      travelAdditional: traveladditional,
      travelLimit: travellimit || 100000,
      furnitures,
      furnituresAdditional: furnituresadditional,
      furnituresLimit: furnitureslimit || 100000,
      utilities,
      utilitiesAdditional: utilitiesadditional,
      utilitiesLimit: utilitieslimit || 100000,
      phone,
      phoneAdditional: phoneadditional,
      phoneLimit: phonelimit || 100000,
      desc,
      website,
      annual
    },
    {
      new: true,
      upsert: true,
      useUnifiedTopology: true
    }
  )
    .then(res => console.log(res))
    .catch(err => console.log(err));
}

async function seed() {
  const doc = new GoogleSpreadsheet(config.googleSpreadSheet);
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
