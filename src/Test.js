import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { testThunk } from './actions/index';

class Test extends Component {

    handleClick(){
        alert("CHECK THE ACTIONS GETTING FIRED ON REDUX DEV TOOLS!!!");
        this.props.testThunk();
    }
  render() {
    return (
      <div>
        <button onClick={this.handleClick.bind(this)}>Test</button>        
      </div>
    )
  }
}

Test.propTypes = {
	testThunk: PropTypes.func.isRequired,	
};

const mapStateToProps = (state) => ({
	test: state.test,	
});

export default connect(mapStateToProps, { testThunk })(Test);