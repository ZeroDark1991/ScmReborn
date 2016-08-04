'use strict'

const redis = require('redis')

function redisTest(){
    const client = redis.createClient(6379,'051ee95e997e4c54.redis.rds.aliyuncs.com',{
	    detect_buffers: true
    })

    client.auth("051ee95e997e4c54:123123FFFfff", redis.print)
    client.set('key:test', 'helloworld', redis.print)
    client.get('key:test', (err, reply) => {
    	if(err) console.log(err)
	    else console.log(reply)
    })

    client.quit()
}

module.exports = redisTest