const db = require('./models/index');

const fastify = require('fastify')({
    logger: true
})

fastify.listen(3000, (err, address) => {
    if (err) {
        console.error(err)
        process.exit(1)
    }
    console.log(`Server listening at ${address}`)
})