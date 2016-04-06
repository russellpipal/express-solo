var balance = require('./balance');


function getBalance(min, max) {
  return balance.acctDisplay(balance.acctBalance(min, max));
}

exports.getBalance = getBalance;
