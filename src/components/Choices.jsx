import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';



const styles = () => ({
  root: {
    flexGrow: 1
  }
});

class Choices extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hover: false
    };
  }

  onHover = (e) => {
    e.preventDefault();
    this.setState({ hover: true });
  };

  onLeave = (e) => {
    e.preventDefault();
    this.setState({ hover: false });
  
  };

  render() {
    return (
      <div>
        <Paper
          {...this.props}
          onMouseOver={this.onHover}
          onMouseOut={this.onLeave}
          
          className={this.state.hover ? this.props.paperclasshov: this.props.paperclass} 
       
        >
          {this.props.children}
        </Paper>
      </div>
    );
  }
}

export default withStyles(styles)(Choices);
