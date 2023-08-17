const CommentService = require('../service/commentService');

class CommentController {
    static async getComments(req, res) {
        try {
            const videoID = req.params.videoID;
            const comments = await CommentService.getComments(videoID);
            res.status(200).json(comments);
        }
        catch (e) {
            res.status(500).json({ message: e.message });
        }
    }

    static async addComment(req, res) {
        try {
            const videoID = req.params.videoID;
            const { username, comment } = req.body;
            const newComment = await CommentService.addComment(
                {
                    videoID: videoID,
                    username: username,
                    comment: comment
                }
            );
            res.status(201).json(newComment);
        }
        catch (e) {
            res.status(500).json({ message: e.message });
        }
    }
}

module.exports = CommentController;