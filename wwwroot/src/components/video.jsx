import React from 'react';
import { Button, TableRow, TableCell } from "@material-ui/core";
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import { truncForUi } from '../utils/stringUtils';

class Video extends React.Component {
     constructor(props) {
          super(props);
          this.handleDel = this.handleDel.bind(this);
     }

     handleDel(id) {
          this.props.onVideoDelete(id);
     }

     render() {
          return (
               <TableRow key={this.props.id}>
                    <TableCell>
                         <strong>{this.props.videoName}</strong><br />
                         {truncForUi(this.props.videoDescription)}
                    </TableCell>
                    <TableCell>({this.props.videoYear})</TableCell>
                    <TableCell style={{ whiteSpace: 'nowrap' }}>
                         <Button variant="contained" color="primary" size="small"
                              onClick={() => {
                                   this.props.editVideo(this.props)
                              }}
                              style={{ marginRight: '10px' }}
                         >
                              <EditIcon />
                         </Button>
                         <Button variant="contained" color="secondary" size="small"
                              onClick={() => {
                                   this.handleDel(this.props.videoId)
                              }}
                         >
                              <DeleteIcon />
                         </Button>
                    </TableCell>
               </TableRow>
          );
     }
};

export default Video;