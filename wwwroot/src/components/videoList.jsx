import React from 'react';
import { Typography, Table, TableBody, TableHead, TableRow, TableCell } from "@material-ui/core";
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
            <div>
                <Typography
                    variant="h4"
                    color="inherit"
                    noWrap
                >Video Library</Typography>

                <Table className="videosTable" style={{ width: '55%', float: 'left', marginRight: '20px' }}>
                    <TableHead>
                        <TableRow>
                            <TableCell>Name</TableCell>
                            <TableCell>Year</TableCell>
                            <TableCell>Actions</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {videos}
                    </TableBody>
                </Table>
            </div>
        );
    }
};

export default VideoList;