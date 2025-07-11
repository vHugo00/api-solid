import fastify from 'fastify'
import { appRoutes } from './http/controller/routes'

export const app = fastify()

app.register(appRoutes)
