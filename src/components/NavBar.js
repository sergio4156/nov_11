import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { compose } from 'redux';  

const styles = {
  root: {
    flexGrow: 1,
  },
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  }, 
};

export const NavBar = (props) => {
  const { classes, authenticated } = props;
  //console.log('classes', classes)
  console.log('authenticated notice coming from NavBar', authenticated)
  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <IconButton className={classes.menuButton} color="inherit" aria-label="Menu"></IconButton>
          <Typography variant="h5" color="inherit" className={classes.grow}>
            Nov 11th
          </Typography>
          {!authenticated ? 
            (
              <>
                <Button color="inherit"><NavLink to='/signin'>Sign In</NavLink></Button>
                <Button color="inherit"><NavLink to='/signin'>Sign Up</NavLink></Button>
              </>
            ) : 
            (
              <>
                <Button color="inherit"><NavLink to='/signin'>About Me</NavLink></Button>
                <Button color="inherit"><NavLink to='/signin'>Hobbies</NavLink></Button>
                <Button color="inherit"><NavLink to='/modal'>Modal</NavLink></Button>
              </>
            )
          }
        </Toolbar>
      </AppBar>
    </div>
  );
}

NavBar.propTypes = {
  classes: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => {
  return {
    authenticated: state.signIn.authenticated
  }
}

export default compose(
  withStyles(styles),
  connect(mapStateToProps)
)(NavBar);