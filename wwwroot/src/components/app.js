import React from 'react';
import ReactDOM from 'react-dom';
import VideoList from './videoList.jsx';

class App extends React.Component {
     render() {
          return (
               <VideoList url="/api/videos" />
          );
     }
}
ReactDOM.render(
     <App />,
     document.getElementById('container')
);

module.hot.accept();