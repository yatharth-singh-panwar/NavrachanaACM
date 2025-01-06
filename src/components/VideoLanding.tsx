const VideoLanding: React.FC = () => {
    return (
        <div className="video-player rounded-lg">
            <video className="rounded-3xl" height="600" width="600" autoPlay muted loop>
                <source src="src/assets/3255275-uhd_3840_2160_25fps.mp4" type="video/mp4" />
                Your browser does not support the video tag.
            </video>
        </div>
    );
};

export default VideoLanding;