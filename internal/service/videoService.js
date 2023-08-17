const Videos = require('../models/videoModel');


class VideoService {
    static async getVideos() {
        return await Videos.find();
    }

    static async addVideo(videoData) {
        try {
            const newVideo = new Videos(videoData);
            const savedVideo = await newVideo.save();
            return savedVideo;
        }
        catch (e) {
            console.log('Error:', e.message);
        }
    }

    static async deleteVideo(videoID) {
        try {
            const delVideo = await Videos.deleteOne({ _id: videoID });
            return `Deleted ${delVideo.deletedCount} video`;
        }
        catch (e) {
            console.log('Error:', e.message);
        }
    }

    static async groupVideos(groupBy) {
        try {
            const groupedVideos = await Videos.aggregate([
                { $group: { _id: `$${groupBy}`, videos: { $push: '$$ROOT' } } },
            ]);
            return groupedVideos;
        }
        catch (e) {
            console.log('Error:', e.message);
        }
    }
}

module.exports = VideoService;