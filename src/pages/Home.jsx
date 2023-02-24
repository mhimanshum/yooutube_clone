import React from 'react';
import { useNavigate } from 'react-router-dom';

function Home({ videos }) {
  const navigate = useNavigate();
  return (
    <div>
      <div className="grid grid-cols-3">
        {videos.length > 0 &&
          videos.map((video, index) => {
            return (
              <div
                key={index}
                onClick={() => navigate(`/videos/${video.id.videoId}`)}
              >
                <img
                  src={video.snippet.thumbnails.default.url}
                  alt="video_thumbnail"
                />
                <p>{video.snippet.title}</p>
              </div>
            );
          })}
      </div>
    </div>
  );
}

export default Home;
