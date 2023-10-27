const users = require('./api/v1/users')
const usersV2 = require('./api/v2/users')
const bank_accountsV2 = require('./api/v2/bank_accounts')
const transactionsV2 = require('./api/v2/transactions')

module.exports = {
    users,
    usersV2,
    bank_accountsV2,
    transactionsV2
}