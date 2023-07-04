import { Schema, model, models } from 'mongoose'

const roleSchema = new Schema(
  {
    name: String,
    permissions: [
      {
        type: Schema.Types.ObjectId,
        ref: 'Permission',
      },
    ],
  },
  {
    timestamps: true,
  }
)

// create initial roles
roleSchema.statics.initRoles = async function () {
  // get all models
  const roles = ['admin', 'user', 'guest', 'superadmin', 'student', 'teacher', 'parent']
  const permissions = await this.model('Permission').find()
  for (const role of roles) {
    const name = role
    const roleExist = await this.findOne({ name })
    if (!roleExist) {
      const newRole = await this.create({ name })
      newRole.permissions = permissions
      await newRole.save()
    }
  }
}

export default models.Role || model('Role', roleSchema)
