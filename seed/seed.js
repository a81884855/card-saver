const GoogleSpreadsheet = require('google-spreadsheet');
const { promisify } = require('util');
const db = require('./schema');

const creds = require('./Super-Card-Saver-5c5fa83a38c9.json');
const config = require('./config');

function readRow(cardInfo) {
  console.log(cardInfo);
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
      gasLimit: gaslimit,
      restaurant,
      restaurantAdditional: restaurantadditional,
      restaurantLimit: restaurantlimit,
      online,
      onlineAdditional: onlineadditional,
      onlineLimit: onlinelimit,
      grocery,
      groceryAdditional: groceryadditional,
      groceryLimit: grocerylimit,
      streaming,
      streamingAdditional: streamingadditional,
      streamingLimit: streaminglimit,
      travel,
      travelAdditional: traveladditional,
      travelLimit: travellimit,
      furnitures,
      furnituresAdditional: furnituresadditional,
      furnituresLimit: furnitureslimit,
      utilities,
      utilitiesAdditional: utilitiesadditional,
      utilitiesLimit: utilitieslimit,
      phone,
      phoneAdditional: phoneadditional,
      phoneLimit: phonelimit,
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
