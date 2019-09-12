import React from 'react';
import ReactDOM from 'react-dom';
import VideoList from './videoList.jsx';

class App extends React.Component {
     render() {
          return (
               <div>
                    <VideoList url="/api/videos" />
               </div>
          );
     }
}
ReactDOM.render(
     <App />,
     document.getElementById('container')
);