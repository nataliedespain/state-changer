import React from 'react'
import { connect } from 'react-redux';

const Footer = (props) => {
  return (
    <div className='footer'>
      <h1>&copy; 2017 {props.state.name}</h1>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    state
  }
}

export default connect(
  mapStateToProps
)(Footer)
