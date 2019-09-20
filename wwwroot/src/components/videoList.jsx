import React from 'react';
import ReactDOM from 'react-dom';
import { Typography, Table, TableBody, TableHead, TableRow, TableCell } from "@material-ui/core";
import Video from './video.jsx';

class VideoList extends React.Component {
    constructor(props) {
        super(props);
        this.deleteVideo = this.deleteVideo.bind(this);
        this.editVideo = this.editVideo.bind(this);
    }

    deleteVideo(id) {
        const xhr = new XMLHttpRequest();

        xhr.open('delete', this.props.url + '/' + id);
        xhr.setRequestHeader('Content-Type', 'application/json');
        xhr.onload = () => this.props.onVideoReload();
        xhr.send();
    }

    editVideo(video) {
        this.props.onVideoEdit(video);
    }

    render() {
        const videos = this.props.data.map(video => (
            <Video onVideoEdit={this.editVideo} onVideoDelete={this.deleteVideo} key={video.id} data={video} />
        ));

        return (
            <div>
                <Typography
                    variant="h4"
                    color="inherit"
                    noWrap
                >Video Library</Typography>

                <Table>
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