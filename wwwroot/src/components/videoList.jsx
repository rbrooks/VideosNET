import React from 'react';
import Video from './video.jsx';

class VideoList extends React.Component {
    constructor(props) {
        super(props);
        this.state = { data: [] };
    }
    loadVideos() {
        const xhr = new XMLHttpRequest();

        xhr.open('get', this.props.url);
        xhr.onload = () => {
            const data = JSON.parse(xhr.responseText);
            this.setState({ data: data });
        };
        xhr.send();
    }
    componentDidMount() {
        this.loadVideos();
    }
    render() {
        const videos = this.state.data.map(video => (
            <Video key={video.id} videoName={video.name} videoDescription={video.description} videoYear={video.year} />
        ));

        return (

            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Date</th>
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