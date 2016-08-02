const express = require('express')
const router = express.Router()

const map = require('../util')
const sidebarItems = require('../../SideBarConfig')

const env = process.env.NODE_ENV || 'development'

const index = {
	get: function(req,res){
		console.log(req.headers)
		res.render('settings/index', {
			title: env,
			route: 'settings',
			sub_message: 'hey ZeroNinja',
			sidebarItems: sidebarItems
		})
	}
}

const config = {
	'\/': {
		get: index.get,
	}
}

map(router,config)

module.exports = router