const PostModel = require('../models/posts');   // Importing the PostModel

// These are the methods that will be triggered whenever user request
// Request may be - GET, POST, PATCH, PUT, OR DELETE

/*
Get Request
*/
const getPosts = async (req, res) => {

    try {
        const Posts = await PostModel.find();
        res.status(200).json(Posts);
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
        res.status(201).json(post);
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
        res.status(202).json(updatedPost);
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
        res.status(200).json(deletedPost);
        console.log(deletedPost);
        
    } catch (error) {
        console.log(error);
        res.status(400).send("Unable to delete");
    }
}

module.exports = { getPosts, savePost, updatePost, deletePost };