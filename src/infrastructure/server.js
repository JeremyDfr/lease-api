const db = require('./models/index');
const FastifyAuth = require('@fastify/auth')

const fastify = require('fastify')({
    logger: true
})
fastify.register(FastifyAuth)

fastify.decorate('authenticate', async function (request, reply) {

})

fastify.listen(3000, (err, address) => {
    if (err) {
        console.error(err)
        process.exit(1)
    }
    console.log(`Server listening at ${address}`)
})