import React from 'react';
import Video from './video.jsx'

class VideoList extends React.Component {
    constructor(props) {
        super(props);
        this.state = { data: [] };
    }
    loadVideos() {
        const xhr = new XMLHttpRequest();

        xhr.open('get', this.props.url, false);
        xhr.onload = () => {
            const data = JSON.parse(xhr.responseText);
            this.setState({ data: data });
        };
        xhr.send();
    }
    componentWillMount() {
        this.loadVideos();
    }
    render() {
        const videos = this.state.data.map(video => (
            <Video key={video.id} videoName={video.name} videoYear={video.year} />
        ));

        return (
            <div>{videos}</div>
        );
    }
};

export default VideoList;