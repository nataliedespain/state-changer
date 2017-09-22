import React from 'react';
import { connect } from 'react-redux';

const Body = (props) => {
  return (
    <div className='body'>
      <h1>{props.state.name}</h1>
      <form onSubmit={e => {
          props.changeName(e.target.name.value);
          e.preventDefault();
        }}>
        <input name='name' type='text' />
        <br />
        <button type='submit'>change name</button>
      </form>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    state
  }
}

const mapDispatchToProps = (dispatch, newName) => {
  return ({
    changeName: (newName) => dispatch({
      type: 'CHANGE_NAME',
      newName
    })
  })
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Body)
