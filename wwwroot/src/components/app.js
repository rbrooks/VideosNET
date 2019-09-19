import React from 'react';
import ReactDOM from 'react-dom';
import Grid from '@material-ui/core/Grid';
import VideoList from './videoList.jsx';
import VideoForm from './videoForm.jsx';


class App extends React.Component {
     constructor(props) {
          super(props);
          this.state = { data: [] };
          this.handleVideoSubmit = this.handleVideoSubmit.bind(this);
          this.loadVideos = this.loadVideos.bind(this);
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

     handleVideoSubmit(video) {
          const xhr = new XMLHttpRequest();

          xhr.open('post', this.props.url);
          xhr.setRequestHeader('Content-Type', 'application/json');
          xhr.onload = () => this.loadVideos();
          xhr.send(JSON.stringify(video));

          this.setState(video);
     }

     render() {
          return (
               <Grid container spacing={3}>
                    <Grid item xs>
                         <VideoList url="/api/videos" onVideoReload={this.loadVideos} data={this.state.data} />
                    </Grid>
                    <Grid item xs={4}>
                         <VideoForm url="/api/videos" onVideoSubmit={this.handleVideoSubmit} />
                    </Grid>
               </Grid>
          );
     }
}
ReactDOM.render(
     <App url="/api/videos" />,
     document.getElementById('container')
);

module.hot.accept();