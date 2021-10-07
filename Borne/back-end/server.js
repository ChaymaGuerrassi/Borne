import express from 'express'
import cors from 'cors'
import categories from './api/routes/categories.route.js'
import plates from './api/routes/plates.route.js'


const app = express()

app.use(cors())
app.use(express.json())
app.use(express.static('api/assets'))

app.use('/category', categories)
app.use('/plates', plates)

app.use('*', (req, res) => res.status(400).json({error: "404 not found"}))


export default app