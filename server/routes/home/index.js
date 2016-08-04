const express = require('express')
const router = express.Router()

const map = require('../util')

//模拟数据
const sidebarItems = require('../../SideBarConfig')
const dashBoardList = require('./dashboard')

const env = process.env.NODE_ENV || 'development'

const index = {
	get: function(req,res){
		res.render('home/index', {
			title: env,
			route: 'home',
			dashBoardList: dashBoardList,
			sidebarItems: sidebarItems
		})
	}
}

const talk = {
	get: function(req,res){
		res.send('hehehe')
	},
	detail: function(req, res){
		res.send('product list!')
	}
}

const config = {
	'\/': {
		get: index.get,
	},
	'/talk': {
		get: talk.get,
		'/:id': {
			get: talk.detail
		}
	}
}

map(router,config)

module.exports = router