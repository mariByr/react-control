import type {IVideo} from "../../models/videoModels/IVideo.ts";

interface VideoSectionProps {
    videos: IVideo[];
}

 export const VideoSection = ({ videos }: VideoSectionProps) => {
    const trailer =
        videos.find(v => v.type === "Trailer" && v.site === "YouTube") ||
        videos.find(v => v.type === "Teaser" && v.site === "YouTube") ||
        null;

    if (!trailer) {
        return <div>No video available</div>;
    }

    return (
        <div style={{ marginTop: "20px" }}>
            <iframe
                width="100%"
                height="400"
                src={`https://www.youtube.com/embed/${trailer.key}`}
                title="Movie trailer"
                allowFullScreen
            />
        </div>
    );
};

export default VideoSection;
