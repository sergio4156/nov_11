import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import FormControl from '@material-ui/core/FormControl';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import withStyles from '@material-ui/core/styles/withStyles';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { signInApiCallToAuth, validateForm, checkIfUserExists } from '../../store/actions/signIn/signInActions';
 
const styles = theme => ({
  main: {
    width: 'auto',
    display: 'block', // Fix IE 11 issue.
    marginLeft: theme.spacing.unit * 3,
    marginRight: theme.spacing.unit * 3,
    [theme.breakpoints.up(400 + theme.spacing.unit * 3 * 2)]: {
      width: 400,
      marginLeft: 'auto',
      marginRight: 'auto',
    },
  },
  paper: {
    marginTop: theme.spacing.unit * 8,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: `${theme.spacing.unit * 2}px ${theme.spacing.unit * 3}px ${theme.spacing.unit * 3}px`,
  },
  avatar: {
    margin: theme.spacing.unit,
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing.unit,
  },
  submit: {
    marginTop: theme.spacing.unit * 3,
  },
});

export class SignIn extends Component {
  
  state = {
      email: '',
      emailError: '',
      password: '',
      passwordError: '',
      authUser: false,
      formValidation: false
  }

  handleFormChange = (e) => this.setState ({[e.target.name] : e.target.value});

  handleSubmit = (e) => {
      e.preventDefault();
      //validate() reducer func returns Promise
      this.props.validateForm(this.state.email, this.state.password)
        //if Promise '.then' we know if resolved
        .then( this.setState({formValidation: true}) )
        //if Promise '.catch' we know if rejected
        .catch(res => {
          this.setState({
            emailError: res.emailError,
            passwordError: res.passwordError
          })
        })
      
      if(this.state.formValidation) {
        //authFetch action creator return a Promise so we can chain 'then'
        this.props.signInApiCallToAuth()
          //we are separting business logic by adding 'checkIfUserExists()' to reducer then passing to component props
          .then(data => {
            this.props.checkIfUserExists(data, this.state.email, this.state.password, this.props);
          })
      } 
      //clear state error msg's so error msg's are cleared once user has successful validationf
      this.setState({
        emailError: '',
        passwordError: ''
      })
  }

  render() {
    const { classes } = this.props;
    return (
      <main className={classes.main}>
      <CssBaseline />
      <Paper className={classes.paper}>
          <Avatar className={classes.avatar}>
          </Avatar>
          <Typography component="h1" variant="h5">
          Sign in
          </Typography>
          <form onSubmit={this.handleSubmit} className={classes.form}>
          <FormControl margin="normal" required fullWidth>
              <InputLabel htmlFor="email">Email Address</InputLabel>
              <Input onChange={this.handleFormChange} id="email" name="email" autoComplete="email" autoFocus />
              { this.state.emailError && <span className="not-val-error">{this.state.emailError}</span> }
          </FormControl>
          <FormControl margin="normal" required fullWidth>
              <InputLabel htmlFor="password">Password</InputLabel>
              <Input onChange={this.handleFormChange} name="password" type="password" id="password" autoComplete="current-password" />
              { this.state.passwordError && <span className="not-val-error">{this.state.passwordError}</span> }
          </FormControl>
          <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
          />
          <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
          >
              Sign in
          </Button>
          </form>
      </Paper>
      </main>
    );
  }
}

SignIn.propTypes = {
  classes: PropTypes.object.isRequired,
};

const mapDispatchToProps = (dispatch) => {
  return {
    validateForm: (email, password) => dispatch(validateForm(email, password)),
    signInApiCallToAuth: () => dispatch(signInApiCallToAuth()),
    checkIfUserExists: (apiAuthUsersData, email, pw, props) => dispatch(checkIfUserExists(apiAuthUsersData, email, pw, props))
  }
}

//MULTIPLE HOC WRAPPERS SO USING redux 'compose' TO HANDLE
export default compose(
  withStyles(styles),
  connect(null, mapDispatchToProps)
)(SignIn)