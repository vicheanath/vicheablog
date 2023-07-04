import { dbConnect } from '@/lib//mongoose'
import Permission from 'models/Permission'

dbConnect()

export const PermissionService = {
  async create(data) {
    try {
      const permission = new Permission(data)
      await permission.save()
      return permission
    } catch (error) {
      console.error(error)
    }
  },

  async findAll() {
    try {
      const permissions = await Permission.find()
      return permissions
    } catch (error) {
      console.error(error)
    }
  },
  async findById(id) {
    try {
      const permission = await Permission.findById(id)
      return permission
    } catch (error) {
      console.error(error)
    }
  },
  async findByName(name) {
    try {
      const permission = await Permission.findOne({ name })
      return permission
    } catch (error) {
      console.error(error)
    }
  },
}
