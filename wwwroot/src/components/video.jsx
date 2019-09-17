import React from 'react';
import {truncForUi} from '../utils/stringUtils';

class Video extends React.Component {
     render() {
          return (
               <tr key={this.props.id}>
                    <td>
                         <strong>{this.props.videoName}</strong><br />
                         {truncForUi(this.props.videoDescription)}
                    </td>
                    <td>({this.props.videoYear})</td>
                    <td>
                         <button
                              onClick={() => {
                                   this.props.editVideo(this.props)
                              }}
                              className="button muted-button"
                         >
                              Edit
                         </button>
                         <button
                              onClick={() => this.props.deleteVideo(this.props.id)}
                              className="button muted-button"
                         >
                              Delete
                         </button>
                    </td>
               </tr>
          );
      }
};

export default Video;