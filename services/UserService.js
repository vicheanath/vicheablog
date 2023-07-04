import { dbConnect } from '@/lib//mongoose'
import User from 'models/User'

dbConnect()

export const UserService = {
  async create(data) {
    try {
      const user = new User(data)
      await user.encryptPassword()
      await user.save()
      return user
    } catch (error) {
      console.error(error)
    }
  },
  async findAll() {
    try {
      const users = await User.find()
      return users
    } catch (error) {
      console.error(error)
    }
  },
}
