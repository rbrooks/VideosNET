import React from 'react';
import Video from './video.jsx';

class VideoList extends React.Component {
    constructor(props) {
        super(props);
        this.state = { data: [] };
        this.deleteVideo = this.deleteVideo.bind(this);
   }

    deleteVideo(id) {
        const xhr = new XMLHttpRequest();

        xhr.open('delete', this.props.url + '/' + id);
        xhr.setRequestHeader('Content-Type', 'application/json');
        xhr.onload = () => this.props.onVideoReload();
        xhr.send();
    }

    render() {
        const videos = this.props.data.map(video => (
            <Video onVideoDelete={this.deleteVideo} key={video.id} videoId={video.id} videoName={video.name} videoDescription={video.description} videoYear={video.year} />
        ));

        return (
            <table className="videosTable" style={{ float: 'left' }}>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Year</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {videos}
                </tbody>
            </table>
        );
    }
};

export default VideoList;