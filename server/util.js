'use strict'

const os = require('os')
const networkInterfaces = os.networkInterfaces()
let _self_ip = ''

networkInterfaces[Object.keys(networkInterfaces)[0]].forEach(function(item){
	if(item.family == 'IPv4') _self_ip = item.address
})

module.exports = {
	_self_ip: _self_ip
}