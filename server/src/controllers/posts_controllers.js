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
        res.status(400).send("SOmething Went Wrong");
    }
}

/*
Patch Request
*/

const updatePost = async (req, res) => {
    try {
        
    } catch (error) {
        console.log(error);
        res.status(401).send("SOmething Went Wrong");
    }
}

module.exports = { getPosts, savePost };