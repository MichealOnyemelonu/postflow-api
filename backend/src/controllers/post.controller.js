import { Post } from "../models/post.model.js";

// Create a post
const createPost = async (req, res) => {
    try {
        const { name, description, age} = req.body;

        if (!name || !description || !age) {
            return res.status(400).json({
                message: "All fileds are required"
            });
        }

        const post = await Post.create({ name, description, age});

        res.status(201).json({
            message: "Post created successfully", post
        });
        
    } catch (error) {
        res.status(500).json({
            message: "Internal Server error", error
        });
        
    }
}


const getPosts = async (req, res) => {
    try {
        const posts = await Post.find();
        res.status(200).json(posts);

    } catch (error) {
        res.status(500).json({
            message: "Internal Server error", error
        })
    }
}

const updatePost = async (req, res) => {
    try {
        //validation to check if the body is empty
        // {name: x, description: y, age age: z} -. [name, description, age]
        if(Object.keys(req.body).length === 0) {
            return res.status(400).json({
                message: "No data provided for update"
            })
        }

        const post = await Post.findByIdAndUpdate(req.params.id, req.body, {new: true});

        if(!post) return res.status(404).json({
            message: "post not found"
        });

        res.status(200).json({
            message: "Post Updated Successfully", post
        });

    } catch (error) {
        res.status(500).json({
            message:"Internal Server Error",
        })
    }
}

const deletePost = async (req, res) => {
    try {
        const post = await Post.findById(req.params.id);        
        console.log("Found post:", post);

        const deleted = await Post.findByIdAndDelete(req.params.id);

        console.log("Deleted document:", deleted);

        if (!deleted) {
            return res.status(404).json({
                message: "Post not found"
            });
        }

        return res.status(200).json({
            message: "Post successfully deleted"
        });

    } catch (error) {
        console.error(error);

        return res.status(500).json({
            message: "Internal Server Error",
            error: error.message
        });
    }
};

export {
createPost,
getPosts,
updatePost,
deletePost
};