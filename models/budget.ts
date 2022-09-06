import mongoose, { Schema, model } from "mongoose";

const budgetSchema = new Schema(
    {
        title: {
            type: String,
            required: [true, "Please provide a title for the budget post"],
            maxLength: [100, "Title can not be longer than 100 characters"],
        },
        header: {
            type: String,
            required: [true, "Please provide a summary for your post"],
            maxLength: [100, "Please keep your summary under 100 characters"],
        },
        img: {
            type: String,
            required: [
                true,
                "Please link an image for your budget post from imgur",
            ],
            maxLength: [
                100,
                "Please keep your img source under 100 characters, use imgur!",
            ],
        },
        author: {
            type: String,
            required: [true, "Please provide your name"],
            MaxLength: [60, "Name can not be longer than 60 characters"],
        },
        body: String,
        comments: {
            type: [{
                type: Schema.Types.ObjectId,
                ref: Comment,
            }],
        },
        postDate: {
            type: Date,
            default: Date.now,
        },
        hidden: Boolean,
        meta: {
            votes: Number,
            favs: Number,
        },
        userEmail: String,
    },
    {
        collection: "budget",
    },
);

// setter function for likes ****

//pull the whole number through controller and update/repush

const Budget = mongoose.models.budget || model("Budget", budgetSchema);

export default Budget;
