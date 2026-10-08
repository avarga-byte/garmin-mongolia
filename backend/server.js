import express from 'express'
import { fileURLToPath } from 'node:url'
import path from 'node:path'
import api from './api.js'

const app = express()
const root = path.dirname(fileURLToPath(import.meta.url))
app.disable('x-powered-by')
app.use(express.json({ limit: '32kb' }))
app.use('/api/v1', api)
app.use('/api/v1', (_req, res) => res.status(404).json({ error: 'API_ROUTE_NOT_FOUND' }))
app.use(express.static(path.join(root, '../frontend/dist')))
app.get('*path', (_req, res) => res.sendFile(path.join(root, '../frontend/dist/index.html')))
app.listen(process.env.PORT || 3000, () => console.log('Storefront ready'))
