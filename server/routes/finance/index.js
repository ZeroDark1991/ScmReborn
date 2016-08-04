const express = require('express')
const router = express.Router()

const map = require('../util')

//模拟数据
const sidebarItems = require('../../SideBarConfig')
const dashBoardList = require('./dashboard')

const env = process.env.NODE_ENV || 'development'

const index = {
	get: function(req,res){
		res.render('finance/index', {
			title: env,
			route: 'finance',
			dashBoardList: dashBoardList,
			sidebarItems: sidebarItems,
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