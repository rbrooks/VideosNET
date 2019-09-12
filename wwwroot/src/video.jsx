import React from 'react';

class Video extends React.Component {
     render() {
          return (
               <div>{this.props.videoName} ({this.props.videoYear})</div>
          );
      }
};

export default Video;