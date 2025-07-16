import express from 'express'
import { generateImage, getUserGenerations, getGeneration, getAllGenerations } from '../controllers/imageControllers.js'
import userAuth from '../middlewares/auth.js'

const imageRouter = express.Router()
imageRouter.get('/test', (req, res) => {
  res.send('Test route working')
})
imageRouter.post('/generate-image', userAuth, generateImage)
imageRouter.get('/user-generations', userAuth, getUserGenerations)
imageRouter.get('/all-user-generations', userAuth, getAllGenerations)
imageRouter.get('/generation/:id', userAuth, getGeneration)

export default imageRouter;