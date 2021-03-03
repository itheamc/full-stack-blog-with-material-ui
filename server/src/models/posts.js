const mongoose = require('mongoose');

// Creating the Schema from the mongoose.Schema
const Schema = mongoose.Schema;


// Creating the Schema for our posts
const PostSchema = new Schema({
    post_id: {
        type: Number,
        unique: true,
        required: true,
    },
    post_title: {
        type: String,
        required: true,
    },
    post_body: {
        type: String,
        required: true,
    },
    post_category: {
        type: String,
        required: true,
    },
    post_tag: {
        type: [String],
    },
    post_image: {
        type: String,
    },
    creator: {
        type: String,
        required: true,
    },
    created_date: {
        type: Date,
        required: true,
        default: new Date(),
    },
});

// Creating collection model for the post
// Collection named as post_collections will be created inside our database
const PostModel = mongoose.model('post_collections', PostSchema);


// Exporting the module
module.exports = PostModel;