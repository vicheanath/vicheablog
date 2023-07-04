// create command to generate models initial data roles and permissions
// Path: lib/cmd.js

import { RoleService } from 'services/RoleService'
import { PermissionService } from 'services/PermissionService'

import { dbConnect } from '@/lib/mongoose'

// get all models in application
const models = ['Course', 'Permission', 'Role', 'User', 'Lesson']

export const initRoles = async () => {
  try {
    ;['admin', 'user', 'guest', 'superadmin', 'student', 'teacher', 'parent'].forEach(
      async (role) => {
        const name = role
        // check if role exist
        const roleExist = await RoleService.findByName(name)
        if (!roleExist) {
          await RoleService.create({ name })
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
        const permission = await PermissionService.findByName(name)
        if (!permission) {
          await PermissionService.create({ name })
        }
      })
    })
  } catch (error) {
    console.error(error)
  }
}
