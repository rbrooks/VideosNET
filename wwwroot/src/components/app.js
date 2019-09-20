import React from 'react';
import ReactDOM from 'react-dom';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import CssBaseline from '@material-ui/core/CssBaseline';
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';
import VideoList from './videoList.jsx';
import VideoForm from './videoForm.jsx';

class App extends React.Component {
     constructor(props) {
          super(props);
          this.state = {
               data: [],
               video: {
                    id: 0, name: '', description: '', year: ''
               }
          };
          this.handleVideoAdd = this.handleVideoAdd.bind(this);
          this.loadVideos = this.loadVideos.bind(this);
          this.handleEdt = this.handleEdt.bind(this);
          this.clearForm = this.clearForm.bind(this);
          this.handleVideoUpdate = this.handleVideoUpdate.bind(this);
          this.handleNameChange = this.handleNameChange.bind(this);
          this.handleDescChange = this.handleDescChange.bind(this);
          this.handleYearChange = this.handleYearChange.bind(this);
     }

     handleNameChange(e) {
          this.state.video.name = e.target.value;
          this.setState({
               video: {
                    id: this.state.video.id,
                    name: e.target.value,
                    description: this.state.video.description,
                    year: this.state.video.year,
                    edit: this.state.video.edit
               }
          });
     }

     handleDescChange(e) {
          this.setState({
               video: {
                    id: this.state.video.id,
                    name: this.state.video.name,
                    description: e.target.value,
                    year: this.state.video.year,
                    edit: this.state.video.edit
               }
          });
     }

     handleYearChange(e) {
          this.setState({
               video: {
                    id: this.state.video.id,
                    name: this.state.video.name,
                    description: this.state.video.description,
                    year: e.target.value,
                    edit: this.state.video.edit
               }
          });
     }

     loadVideos() {
          const xhr = new XMLHttpRequest();

          xhr.open('get', this.props.url);
          xhr.onload = () => {
               const video = JSON.parse(xhr.responseText);
               this.setState({ data: video });
          };
          xhr.send();
     }

     componentDidMount() {
          this.loadVideos();
     }

     handleVideoAdd() {
          const xhr = new XMLHttpRequest();

          xhr.open('post', this.props.url);
          xhr.setRequestHeader('Content-Type', 'application/json');
          xhr.onload = () => this.loadVideos();
          xhr.send(JSON.stringify(this.state.video));

          this.clearForm();
     }

     handleVideoUpdate() {
          // Trim whitespace and lose the "edit" bool.
          const video = {
               id: this.state.video.id,
               name: this.state.video.name.trim(),
               description: this.state.video.description.trim(),
               year: this.state.video.year
          };
          const xhr = new XMLHttpRequest();

          xhr.open('put', this.props.url + '/' + video.id);
          xhr.setRequestHeader('Content-Type', 'application/json');
          xhr.onload = () => this.loadVideos();
          xhr.send(JSON.stringify(video));
     }

     handleEdt(data) {
          data['edit'] = true;
          this.state = { video: data };

          const video = this.state.video;

          this.setState({
               video: video
          });
     }

     clearForm() {
          this.setState({
               video: { id: 0, name: '', description: '', year: '' }
          });
     }

     render() {
          const video = this.state.video;

          return (
               <Grid container spacing={3}>
                    <Grid item xs>
                         <VideoList url="/api/videos" onVideoEdit={this.handleEdt} onVideoReload={this.loadVideos} data={this.state.data} />
                    </Grid>
                    <Grid item xs={4}>
                         <Paper elevation={3} style={{ padding: 16, marginTop: 88 }}>
                              <VideoForm url="/api/videos"
                                   onNameChange={this.handleNameChange}
                                   onDescChange={this.handleDescChange}
                                   onYearChange={this.handleYearChange}
                                   onVideoAdd={this.handleVideoAdd}
                                   onVideoUpdate={this.handleVideoUpdate}
                                   onCancel={this.clearForm}
                                   {...video} />
                         </Paper>
                    </Grid>
               </Grid>
          );
     }
}

const theme = createMuiTheme({
     palette: {
          type: 'dark',
     },
});

ReactDOM.render(
     <ThemeProvider theme={theme}>
          <CssBaseline />
          <App url="/api/videos" />
     </ThemeProvider>,

     document.getElementById('container')
);

module.hot.accept();