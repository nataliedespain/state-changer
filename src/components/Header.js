import React from 'react'
import { connect } from 'react-redux';

const Header = (props) => {
  return (
    <div className='header'>
      <h1>{props.state.name}</h1>
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
)(Header)
