import { Router } from 'express'
import { MiddlewareRouter } from './middleware'
import { UserRouter } from './user.route'

const router: Router = Router()

router.use('/', MiddlewareRouter)
router.use('/users', UserRouter)

export const v1: Router = router
