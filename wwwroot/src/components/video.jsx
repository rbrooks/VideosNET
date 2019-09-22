import React from 'react';
import { Button, TableRow, TableCell } from "@material-ui/core";
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { truncForUi } from '../utils/stringUtils';

class Video extends React.Component {
     constructor(props) {
          super(props);
          this.state = { open: false };
     }

     handleEdit(video) {
          if (video.description === null) video.description = '';

          this.props.onVideoEdit(video);
     }

     handleDel(id) {
          this.props.onVideoDelete(id);
     }

     handleConfirm() {
          this.setState({ open: true });
     }

     handleConfirmClose() {
          this.setState({ open: false });
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
                              onClick={() => { this.handleConfirm() }}>
                              <DeleteIcon />
                         </Button>
                         <Dialog
                              open={this.state.open}
                              onClose={() => { this.handleConfirmClose() }}
                              aria-labelledby="alert-dialog-title"
                              aria-describedby="alert-dialog-description"
                         >
                              <DialogTitle id="alert-dialog-title">{"Are you sure?"}</DialogTitle>
                              <DialogContent>
                                   <DialogContentText id="alert-dialog-description">
                                        This will permanently delete the video, "{this.props.data.name}".
                                   </DialogContentText>
                              </DialogContent>
                              <DialogActions>
                                   <Button onClick={() => { this.handleDel(this.props.data.id) }} color="secondary" size="small">
                                        OK
                                   </Button>
                                   <Button onClick={() => { this.handleConfirmClose() }} color="primary" autoFocus>
                                        Cancel
                                   </Button>
                              </DialogActions>
                         </Dialog>
                    </TableCell>
               </TableRow>
          );
     }
};

export default Video;