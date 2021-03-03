const PostModel = require('../models/posts');   // Importing the PostModel


/*
Get Request
*/
const getPosts = async (req, res) => {

    try {
        const Posts = await PostModel.find();
        res.status(200).json({result: "OK", statusCode: 200, posts: Posts});
    } catch (error) {
        console.log(error);
        res.status(404).send("Something Went Wrong");
    }
}

/*
Post Request
*/
const savePost = async (req, res) => {
    const post_model = new PostModel(req.body);
    try {
        const post = await post_model.save();
        res.status(201).json({result: "Created", statusCode: 201, post: post});
        console.log(post);
    } catch (error) {
        console.log(error);
        res.status(400).send("Something Went Wrong");
    }
}

/*
Patch Request to update the post
*/
const updatePost = async (req, res) => {
    try {
        const updates = await req.body;
        const updatedPost = await PostModel.findByIdAndUpdate(req.params._id, updates);
        res.status(202).json({result: "Updated", statusCode: 202, update_info: updatedPost});
        console.log(updatedPost);
        
    } catch (error) {
        console.log(error);
        res.status(400).send("Unable to update");
    }
}


/*
Delete Request to delete the post
*/
const deletePost = async (req, res) => {
    try {
        const deletedPost = await PostModel.findByIdAndDelete(req.params._id);
        res.status(200).json({result: "Deleted", statusCode: 200, delete_info: deletedPost});
        console.log(deletedPost);
        
    } catch (error) {
        console.log(error);
        res.status(400).send("Unable to delete");
    }
}

module.exports = { getPosts, savePost, updatePost, deletePost };