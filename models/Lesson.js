import { Schema, model, models } from 'mongoose'

const lessonSchema = new Schema(
  {
    name: String,
    description: String,
    video: {
      src: String,
      title: String,
    },
    course: {
      type: Schema.Types.ObjectId,
      ref: 'Course',
    },
  },
  {
    timestamps: true,
  }
)

export default models.Lesson || model('Lesson', lessonSchema)
