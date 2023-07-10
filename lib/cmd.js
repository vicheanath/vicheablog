// create command to generate models initial data roles and permissions
// Path: lib/cmd.js

import dbConnect from '@/lib/mongoose'
import Role from 'models/Role'
import Permission from 'models/Permission'

// get all models in application
const models = ['Course', 'Permission', 'Role', 'User', 'Lesson']

export const initRoles = async () => {
  try {
    ;['admin', 'user', 'guest', 'superadmin', 'student', 'teacher', 'parent'].forEach(
      async (role) => {
        const name = role
        // check if role exist
        const roleExist = await Role.findOne({ name })
        if (!roleExist) {
          await Role.create({ name })
        }
      }
    )
  } catch (error) {
    console.error(error)
  }
}

export const initPermissions = async () => {
  try {
    const actions = ['create', 'read', 'update', 'delete']

    models.forEach(async (model) => {
      actions.forEach(async (action) => {
        const name = `${action}_${model.toLowerCase()}`
        // check if permission exist
        const permission = await Permission.findOne({ name })
        if (!permission) {
          await Permission.create({ name })
        }
      })
    })
  } catch (error) {
    console.error(error)
  }
}
