const VideoService = require('../service/videoService');

class VideoController {
    static async getVideos(req, res) {
        try {
            const videos = await VideoService.getVideos();
            res.status(200).json(videos);
        }
        catch (e) {
            res.status(500).json({ message: e.message });
        }
    }

    static async addVideo(req, res) {
        try {
            const {
                title,
                uploader,
                thumbnailUrl,
                embedID,
                category,
                deal
            } = req.body;
            const newVideo = await VideoService.addVideo(
                {
                    title: title,
                    uploader: uploader,
                    thumbnailUrl: thumbnailUrl,
                    embedID: embedID,
                    category: category,
                    deal: deal
                }
            );
            res.status(201).json(newVideo);
        }
        catch (e) {
            res.status(500).json({ message: e.message });
        }
    }

    static async deleteVideo(req, res) {
        try {
            const videoID = req.params.videoID;
            const delVideo = await VideoService.deleteVideo(videoID);
            res.status(200).send(delVideo);
        }
        catch (e) {
            res.status(500).json({ message: e.message })
        }
    }

    static async groupVideos(req, res) {
        try {
            const groupBy = req.params.groupBy;
            const groupedVideos = await VideoService.groupVideos(groupBy);
            res.status(200).json(groupedVideos);
        }
        catch (e) {
            res.status(500).json({ message: e.message })
        }
    }
}

module.exports = VideoController;