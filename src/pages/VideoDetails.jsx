import React from 'react';
import { useParams } from 'react-router-dom';

function VideoDetails() {
  const params = useParams();
  return (
    <div>
      <p>VideoDetails</p>
      <p>video Id : {params.id}</p>
    </div>
  );
}

export default VideoDetails;
