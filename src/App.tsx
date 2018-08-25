import Grid from '@material-ui/core/Grid';
import * as React from 'react';
import Form from './containers/Form';

import './App.css';
import logo from './logo.png';

class App extends React.Component {

  public render() {
    return (
      <React.Fragment>
        <Grid container={false}>
          <div className="App">
            <header className="App-header">
              <img src={logo} className="App-logo" alt="logo" />
              <h1 className="App-title">Contact Us</h1>
            </header>
            <p className="App-intro">
              Please provide us with your contact information below and we will endeavour to get back to you as soon as possible.
            </p>

          <Form />
          
          </div>  
        </Grid>
      </React.Fragment>      
    );
  }
}

export default App;
