const express = require('express')
const path = require('path')
const PORT = process.env.PORT || 5000

express()
  .use(express.static(path.join(__dirname, 'public')))
  .set('views', path.join(__dirname, 'views'))
  .set('view engine', 'ejs')
  .get('/', (req, res) => res.render('public/index'))
  .get('/getInfo', getInfo)
  .listen(PORT, () => console.log(`Listening on ${ PORT }`))

function getInfo(req, res){
  var package = req.query.package
  var weight = req.query.weight

    if(package == "stampedletter" && weight <= 3.5)
      sLetter(res, weight)
    else if(package == "meteredletter" && weight <= 3.5)
      mLetter(res, weight)
    else if(package == "largeenvelope")
      lEnvelope(res, weight)
    else
      fcps(res, weight)
}

function sLetter(res, weight){
  var price;
  var package = "Stamped Letter"
  switch(weight){
    case 1:
      price = 0.55
      break
    case 2:
      price = 0.70
      break
    case 3:
      price = 0.85
      break
    default:
      price = 1.00
      break
  }

  var params = {package: package, weight: weight.toFixed(2), price: price};
	res.render('pages/cost', params);
}

function mLetter(res, weight){
  var price;
  var package = "Metered Letter"
  switch(weight){
    case 1:
      price = 0.50
      break
    case 2:
      price = 0.65
      break
    case 3:
      price = 0.80
      break
    default:
      price = 0.95
      break
  }
  var params = {package: package, weight: weight.toFixed(2), price: price};
	res.render('pages/cost', params);
}

function lEnvelope(res, weight){
  var price;
  var package = "Large Envelope"
  switch(weight){
    case 1:
      price = 1.00
      break
    case 2:
      price = 1.15
      break
    case 3:
      price = 1.30
      break
    case 4:
      price = 1.45
      break
    case 5:
      price = 1.60
      break
    case 6:
      price = 1.75
      break
    case 7:
      price = 1.90
      break
    case 8:
      price = 2.05
      break
    case 9:
      price = 2.20
      break
    case 10:
      price = 2.35
      break
    case 11:
      price = 2.50
      break
    case 12:
      price = 2.65
      break
    default:
      price = 2.80
      break
  }
  var params = {package: package, weight: weight.toFixed(2), price: price};
	res.render('pages/cost', params);
}

function fcps(res, weight){
  var price;
  var package = "First Class Package Service"
  switch(weight){
    case 1:
    case 2:
    case 3:
    case 4:
      price = 3.66
      break
    case 5:
    case 6:
    case 7:
    case 8:
      price = 4.39
      break
    case 9:
    case 10:
    case 11:
    case 12:
      price = 5.19
      break
    default:
      price = 5.71
      break
  }
  var params = {package: package, weight: weight.toFixed(2), price: price};
	res.render('pages/cost', params);
}

