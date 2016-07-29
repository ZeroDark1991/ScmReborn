const express = require('express')
const router = express.Router()

const map = require('../util')

// router.get('/',(req, res, next)=>{
// 	res.render('home',{title: '首页'})
// })
const env = process.env.NODE_ENV || 'development'

const index = {
	get: function(req,res){
		console.log(req.headers)
		res.render('home', { title: env, route: 'home' , sub_message: 'hey ZeroNinjia'})
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
	'/talk':{
		get: talk.get,
		'/:id': {
			get: talk.detail
		}
	}
}

map(router,config)

module.exports = router