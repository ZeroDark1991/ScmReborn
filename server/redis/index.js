'use strict'

const client = require('redis').createClient({
	host: '051ee95e997e4c54.redis.rds.aliyuncs.com',
	port: 6379,
	detect_buffers: true
})

client.auth("051ee95e997e4c54:123123FFFfff", redis.print)
client.set('key:test', `test data - ${Date.now()}`, redis.print)
client.get('key:test', (err, reply)=>{
	console.log(reply)
})

client.quit()