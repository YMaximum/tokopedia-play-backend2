const Comments = require('../models/commentModel');

class CommentService {
    static async getComments(videoID) {
        return await Comments.find({ videoID: videoID });
    }

    static async addComment(commentData) {
        try {
            const newComment = new Comments(commentData);
            const savedComment = await newComment.save();
            return savedComment;
        }
        catch (e) {
            console.log('Error:', e.message);
        }
    }
}

module.exports = CommentService;