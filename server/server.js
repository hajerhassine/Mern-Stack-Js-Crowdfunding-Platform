import express from 'express'
import dotenv from 'dotenv'
import colors from 'colors'
import connectDB from './config/db.js'
import projectRoutes from './routes/projectRoutes.js'
import path from 'path'
import uploadRoutes from './routes/uploadRoutes.js'
dotenv.config()
connectDB()

const app = express()

app.get('/', (req, res) => {
  res.send('API is running....')
})

app.use('/api/projects', projectRoutes)
app.use('/api/upload', uploadRoutes)
const PORT = process.env.PORT || 5000
const __dirname = path.resolve()
app.use('/uploads', express.static(path.join(__dirname, '/uploads')))
app.listen(
  PORT,
  console.log(
    `Server running in ${process.env.NODE_ENV} mode on port ${PORT}`
  )
)