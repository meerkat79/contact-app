import * as React from 'react';

import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Icon from '@material-ui/core/Icon';
import TextField from '@material-ui/core/TextField';

import logo from './logo.png';

import './App.css';

class App extends React.Component {
  public render() {

    const formStyle = {
      border: '2px solid #616161',
      margin: 'auto',
      padding: '2%',
      width: '50%'
    }

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
            <form style={formStyle}>
              <h2>Your Contact Details</h2>
              <Grid item={true} xs={3} style={{margin:'auto'}}>
                <TextField
                  id="name"
                  label="Name"
                  type="text"
                  margin="normal"
                />
              </Grid>
              <Grid item={true} xs={3} style={{margin:'auto'}}>
                <TextField
                  id="mail"
                  label="Email"
                  type="email"
                  margin="normal"
                />
              </Grid>
              <Grid item={true} xs={3} style={{margin:'auto'}}>              
                <Button 
                  variant="contained" 
                  color="primary"
                  >
                  Submit
                  <Icon>send</Icon>
                </Button>
              </Grid>                            
              </form>
              </div>
              </Grid>
      </React.Fragment>      
    );
  }
}

export default App;
