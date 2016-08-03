const express = require('express')
const router = express.Router()

const map = require('../util')

const env = process.env.NODE_ENV || 'development'

const index = {
	get: function(req,res){
		console.log(req.headers)
		res.render('login', {
			title: env,
			route: 'login',
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