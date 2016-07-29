const RouterMap = require('./router-map')

const RouterSet = function(app){
	Object.keys(RouterMap).forEach((key)=>{
		app.use(key,RouterMap[key])
	})
}

module.exports = RouterSet