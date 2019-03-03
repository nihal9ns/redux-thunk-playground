import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { incrementCounter, decrementCounter } from './actions/index';

class Counter extends Component {    

    increment(count){                
        this.props.incrementCounter(count);        
    }

    decrement(count){                
        this.props.decrementCounter(count);  
    }
  render() {
      const { count } = this.props.count;

    return (
      <div>          
            Counter : <span id="count">{count}</span> <br /> <br />        
            <button onClick={this.increment.bind(this, count)}>Increment</button> <br /> <br />
            <button onClick={this.decrement.bind(this, count)}>Decrement</button> <br /> <br /> 
      </div>
    )
  }
}

Counter.propTypes = {
    incrementCounter: PropTypes.func.isRequired,	
    decrementCounter: PropTypes.func.isRequired,	
};

const mapStateToProps = (state) => ({
	count: state.count,	
});

export default connect(mapStateToProps, { incrementCounter, decrementCounter })(Counter);