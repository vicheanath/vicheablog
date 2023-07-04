import { Schema, model, models } from 'mongoose'

const courseSchema = new Schema(
  {
    name: String,
    description: String,
    image: String,
    author: {
      type: Schema.Types.ObjectId,
      ref: 'User',
    },
    lessons: [
      {
        type: Schema.Types.ObjectId,
        ref: 'Lesson',
      },
    ],
  },
  {
    timestamps: true,
  }
)

export default models.Course || model('Course', courseSchema)
