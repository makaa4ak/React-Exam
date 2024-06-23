import React, { useEffect, useRef, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import VideoPreview from '../../components/VideoPreview/VideoPreview';
import './Video.css';

const videos = [
  {
    id: 1,
    title: "ENLEO - ВЕДИ МЕНЕ В ХРАМ (TAKE ME TO CHURCH УКРАЇНСЬКОЮ)",
    embedUrl: "https://www.youtube.com/embed/icaSda6Rrrg",
    videoId: "icaSda6Rrrg",
    views: "3.9м views",
    date: "1 year ago",
    img: "https://i.ytimg.com/vi/icaSda6Rrrg/hqdefault.jpg?sqp=-oaymwEjCNACELwBSFryq4qpAxUIARUAAAAAGAElAADIQj0AgKJDeAE=&rs=AOn4CLC3WOPj2-cvJu-7TXx5m_fus8zMYA"
  },
  {
    id: 2,
    title: "ENLEO - чорнеморе",
    embedUrl: "https://www.youtube.com/embed/usjKehP1928",
    videoId: "usjKehP1928",
    views: "1.5м views",
    date: "2 years ago",
    img: "https://i.ytimg.com/vi/usjKehP1928/hqdefault.jpg?sqp=-oaymwEjCNACELwBSFryq4qpAxUIARUAAAAAGAElAADIQj0AgKJDeAE=&rs=AOn4CLCH4DeIeuN0-PcgW0rwLprVSTC1NA"
  },
  {
    id: 3,
    title: "ENLEO - вальс під вибухи",
    embedUrl: "https://www.youtube.com/embed/X0oTXl_8Xb8",
    videoId: "X0oTXl_8Xb8",
    views: "1.5м views",
    date: "2 years ago",
    img: "https://i.ytimg.com/vi/X0oTXl_8Xb8/hqdefault.jpg?sqp=-oaymwEjCNACELwBSFryq4qpAxUIARUAAAAAGAElAADIQj0AgKJDeAE=&rs=AOn4CLDnnvk0tAmKIvV3UrmcEPV3OW1Akg"
  },
  {
    id: 4,
    title: "ENLEO - м'ятна ніч",
    embedUrl: "https://www.youtube.com/embed/TEk5imMIOQI",
    videoId: "TEk5imMIOQI",
    views: "1.5м views",
    date: "2 years ago",
    img: "https://i.ytimg.com/vi/TEk5imMIOQI/hqdefault.jpg?sqp=-oaymwEjCNACELwBSFryq4qpAxUIARUAAAAAGAElAADIQj0AgKJDeAE=&rs=AOn4CLDc0Ghtide2y-1ZGPRZzhLJxy6HCw"
  },
  // Add more videos as needed
];

const VideoPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const playerRef = useRef(null);
  const [video, setVideo] = useState(videos[0]); // Initialize with the first video

  useEffect(() => {
    // Load the YouTube IFrame Player API
    const script = document.createElement('script');
    script.src = "https://www.youtube.com/iframe_api";
    document.body.appendChild(script);

    script.onload = () => {
      window.YT.ready(() => {
        playerRef.current = new window.YT.Player(`player-${video.id}`, {
          videoId: video.videoId,
          events: {
            'onReady': onPlayerReady,
            'onStateChange': onPlayerStateChange
          }
        });
      });
    };

    return () => {
      if (playerRef.current) {
        playerRef.current.destroy();
      }
    };
  }, []); // Only run this effect once when the component mounts

  const onPlayerReady = (event) => {
    event.target.playVideo();
  };

  const onPlayerStateChange = (event) => {
    if (event.data === window.YT.PlayerState.ENDED) {
      const nextVideoIndex = (videos.findIndex(v => v.id === video.id) + 1) % videos.length;
      const nextVideo = videos[nextVideoIndex];
      navigate(`/video/${nextVideo.id}`);
      window.location.reload(true); // Explicit page reload with cache clearing
    }
  };

  const handleRecommendationClick = (id) => {
    navigate(`/video/${id}`);
    setTimeout(() => {
      window.location.reload();
    }, 500); // Small delay for player refresh
  };

  if (!video) {
    return <div>Video not found</div>;
  }

  // Filter recommendations excluding the current video
  const recommendedVideos = videos.filter(vid => vid.id !== video.id);

  return (
    <div className="video-page">
      <main className="main-content">
        <div className="video-container">
          <VideoPreview id={`player-${video.id}`}/>

          {/* <div id={`player-${video.id}`} className="video-frame"></div> */}
        </div>

        <div className="video-info">
          <h1>{video.title}</h1>
          <p>{video.views} • {video.date}</p>
          <div className="actions">
            <button>Subscribe</button>
            <button>Like</button>
            <button>Share</button>
            <button>Add to playlist</button>
          </div>
        </div>

        <div className="comments-section">
          <h2>Comments</h2>
          <div className="comment">
            <p><strong>Alina Rubek:</strong> Wow, this is amazing!</p>
            <p className="replies">
              <strong>Reply:</strong> Great cover!
            </p>
          </div>
        </div>
      </main>

      <aside className="recommended-videos">
        <h2>Recommended</h2>
        <ul>
          {recommendedVideos.map(video => (
            <li key={video.id} className="recommended-video" onClick={() => handleRecommendationClick(video.id)}>
              <img src={video.img} alt={video.title} />
              <div className="video-info">
                <h3>{video.title}</h3>
                <p>{video.views}</p>
              </div>
            </li>
          ))}
        </ul>
      </aside>
      
    </div>
  );
}

export default VideoPage;
