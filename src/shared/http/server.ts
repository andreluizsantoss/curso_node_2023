import 'dotenv/config'
import 'reflect-metadata'
import { app } from './app'
import { dataSource } from '../typeorm'

dataSource
  .initialize()
  .then(() => {
    app.listen(parseInt(process.env.API_PORT), () => {
      console.log(
        `Server started on port ${parseInt(process.env.API_PORT)}! 🏆`,
      )
    })
  })
  .catch(error => console.log(error))
