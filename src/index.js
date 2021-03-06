import app from './server/server'
import express from 'express'

if (module.hot) {
  module.hot.accept('./server/server', function() {
    console.log('🔁  HMR Reloading `./server/server`...')
  })
  console.info('✅  Server-side HMR Enabled!')
}

const port = process.env.PORT || 3000

export default express()
  .use((req, res) => app.handle(req, res))
  .listen(port, function(err) {
    if (err) {
      console.error(err)
      return
    }
    console.log(`> Started on port ${port}`)
  })
