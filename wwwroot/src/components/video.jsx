import React from 'react';
import { Button, TableRow, TableCell } from "@material-ui/core";
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import { truncForUi } from '../utils/stringUtils';

class Video extends React.Component {
     constructor(props) {
          super(props);
          this.handleDel = this.handleDel.bind(this);
          this.handleEdit = this.handleEdit.bind(this);
     }

     handleEdit(video) {
          if (video.description === null) video.description = '';

          this.props.onVideoEdit(video);
     }

     handleDel(id) {
          this.props.onVideoDelete(id);
     }

     render() {
          return (
               <TableRow key={this.props.data.id}>
                    <TableCell>
                         <strong>{this.props.data.name}</strong><br />
                         {truncForUi(this.props.data.description)}
                    </TableCell>
                    <TableCell>({this.props.data.year})</TableCell>
                    <TableCell style={{ whiteSpace: 'nowrap' }}>
                         <Button variant="contained" color="primary" size="small"
                              onClick={() => {
                                   this.handleEdit(this.props.data)
                              }}
                              style={{ marginRight: '10px' }}
                         >
                              <EditIcon />
                         </Button>
                         <Button variant="contained" color="secondary" size="small"
                              onClick={() => {
                                   this.handleDel(this.props.data.id)
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