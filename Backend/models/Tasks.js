import mongoose from 'mongoose';

const TaskSchema = new mongoose.Schema(
    {
        title: { type: String, required: true },
        description: { type: String },
        status: {
            type: String,
            enum: ['pending', 'in-progress', 'completed'],
            default: 'pending',
            required: true,
        },
        assignedTo: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
        dueDate: { type: Date },
    },
    { timestamps: true }
);

export default mongoose.model('Task', TaskSchema);