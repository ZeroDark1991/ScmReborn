const express = require('express')
const router = express.Router()

const map = require('../util')
const sidebarItems = require('../../SideBarConfig')
const dashBoardList = require('./dashboard')

const env = process.env.NODE_ENV || 'development'

const index = {
	get: function(req,res){
		console.log(req.headers)
		res.render('finance/index', {
			title: env,
			route: 'finance',
			sub_message: 'hey ZeroNinja',
			sidebarItems: sidebarItems,
			dashBoardList: dashBoardList
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