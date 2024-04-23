import mongoose, { Schema } from "mongoose";

const clipSchema = new Schema(
  {
    title: String,
    videoUrl: String,
    creator: {
        type: mongoose.Types.ObjectId,
        ref: 'User'
    }
  },
  {
    timestamps: true,
  }
);

const gameSchema = new Schema(
    {
        name: String,
        clips: [clipSchema],
      },
      {
        timestamps: true,
      }
)

export const Game = mongoose.models.Game || mongoose.model("Game", gameSchema);

export const Clip = mongoose.models.Clip || mongoose.model("Clip", clipSchema);