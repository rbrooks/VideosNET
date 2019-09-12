import React from 'react';

class Video extends React.Component {
     render() {
          return (
               <li><strong>{this.props.videoName}:</strong> ({this.props.videoYear})</li>
          );
      }
};

export default Video;