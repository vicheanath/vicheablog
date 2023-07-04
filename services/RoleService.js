import { dbConnect } from '@/lib//mongoose'
import Role from 'models/Role'

dbConnect()

export const RoleService = {
  async create(data) {
    try {
      const role = new Role(data)
      await role.save()
      return role
    } catch (error) {
      console.error(error)
    }
  },

  async findAll() {
    try {
      const roles = await Role.find()
      return roles
    } catch (error) {
      console.error(error)
    }
  },
  async findById(id) {
    try {
      const role = await Role.findById(id)
      return role
    } catch (error) {
      console.error(error)
    }
  },

  async findByName(name) {
    try {
      const role = await Role.findOne({ name })
      return role
    } catch (error) {
      console.error(error)
    }
  },
}
