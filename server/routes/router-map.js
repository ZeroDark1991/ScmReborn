const home = require('./home')
const settings = require('./settings')
const finance = require('./finance')
const login = require('./login')

module.exports = {
	'/home': home,
	'/settings': settings,
	'/finance': finance,
	'/login': login,
}