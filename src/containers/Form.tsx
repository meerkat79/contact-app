import * as React from 'react';

import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';

// import { emailError, nameError, phoneError,  } from './util/validation/validationTypes';

interface IState {
  email: string,
  emailError: string,
  name: string,
  nameError: string,
  phone: string,
  phoneError: string
}

export default class Form extends React.Component<{}, IState> {

  state: IState = {
    email:'',
    emailError: '',
    name: '',
    nameError: '',    
    phone: '',
    phoneError: ''
  };  

    handleNameChange = (e: React.SyntheticEvent): void => {
        const target = e.target as HTMLInputElement;
        this.setState({
            name: target.value
        })
    };

    handleNumberChange = (e: React.SyntheticEvent): void => {
        const target = e.target as HTMLInputElement;
        this.setState({
            phone: target.value
        });
    };

    handleEmailChange = (e: React.SyntheticEvent): void => {
        const target = e.target as HTMLInputElement;
        this.setState({
            email: target.value
        });
    };


    validateName = () => {

        // this is just some basic validation in order to display some of the logic implementation and does not yet cover all use casses

        let isError: boolean = false;
        const errors = {
            emailError: '',
            nameError: '',
            phoneError: ''
          };
        
        if (this.state.email.indexOf("@") === -1) {
            isError = true;
            errors.emailError = "Email requires a valid e-mail address.";
        }

        if (this.state.name.length < 3) {
            isError = true;
            errors.nameError = "Please enter a valid name of at least 3 characters.";
        }    

        if(this.state.phone.length < 5 || this.state.phone.length > 11) {
            isError = true;
            errors.phoneError = "Please enter a valid phone number.";            
        }

        this.setState({
            ...this.state,
            ...errors
          });
    
        return isError;
    
    }

    handleSubmit = () => {
        const error = this.validateName();
        if(!error) {
            this.setState({
                email:'',
                emailError: '',
                name: '',
                nameError: '',    
                phone: '',
                phoneError: ''
            });
        }
    };  


  public render() {

    console.log('rendered state is: ', this.state);

    const { name, email, phone } = this.state;

    const formStyle = {
      border: '2px solid #616161',
      margin: 'auto',
      padding: '2%',
      width: '50%'
    }

    return (
      <React.Fragment>
        <Grid container={false}>

            <form style={formStyle}>
              <h2>Your Contact Details</h2>
                            
              <Grid item={true} xs={12} style={{margin:'auto'}}>
                <TextField
                  id="name"
                  label="Name"
                  type="text"
                  margin="normal"
                  value={name}
                  error={this.state.nameError !== ''}
                  onChange={this.handleNameChange}
                  helperText={this.state.nameError !== '' ? this.state.nameError : ''}
                  required={true}
                />
              </Grid>
              <Grid item={true} xs={12} style={{margin:'auto'}}>
                <TextField
                  id="number"
                  label="Number"                
                  type="tel"
                  margin="normal"
                  value={phone}
                  error={this.state.phoneError !== ''}
                  onChange={this.handleNumberChange}
                  helperText={this.state.phoneError !== '' ? this.state.phoneError : ''}
                  required={true}
                />
              </Grid>

              <Grid item={true} xs={12} style={{margin:'auto'}}>
                <TextField
                  id="email"
                  label="Email"
                  type="email"
                  margin="normal"
                  value={email}
                  error={this.state.emailError !== ''}
                  onChange={this.handleEmailChange}
                  helperText={this.state.emailError !== '' ? this.state.emailError: ''}
                  required={true}           
                />
              </Grid>

              <Grid item={true} xs={12} style={{margin:'auto'}}>              
                <Button
                  onClick={this.handleSubmit}
                  variant="contained" 
                  color="primary"
                  style={{backgroundColor: '#277895'}}
                  >
                  Submit
                </Button>
              </Grid>                            
            </form>

        </Grid>
      </React.Fragment>      
    );
  }
}
