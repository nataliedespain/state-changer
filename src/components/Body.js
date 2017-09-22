import React from 'react'

const Header = ({name, changeName}) => {
  return (
    <div className='body'>
      <h1>{name}</h1>
      <form onSubmit={e => {
          changeName(e.target.name.value)
          e.preventDefault();
        }}>
        <input name='name' type='text' />
        <br />
        <button type='submit'>change name</button>
      </form>
    </div>
  )
}
export default Header
