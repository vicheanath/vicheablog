import { Schema, model, models } from 'mongoose'

const permissionSchema = new Schema(
  {
    name: String,
    roles: [
      {
        type: Schema.Types.ObjectId,
        ref: 'Role',
      },
    ],
  },
  {
    timestamps: true,
  }
)

permissionSchema.statics.initPermissions = async function () {
  // get all models
  const models = Object.keys(this.modelSchemas)
  const action = ['create', 'read', 'update', 'delete']
  for (const model of models) {
    for (const act of action) {
      const name = `${act}_${model}`
      const permission = await this.findOne({ name })
      if (!permission) {
        await this.create({ name })
      }
    }
  }
}

export default models.Permission || model('Permission', permissionSchema)
