import React from 'react'

export default function Navbar({ setSearchTitle }) {
  const handleSubmit = (e) => {
    e.preventDefault()
  }

  return (
    <>
      {/* <!-- Navbar --> */}
      <div className='app-header'>
        <h2 className='app-header-title'>
          Super<span>Hero.</span>
        </h2>
        <form className='app-header-search' onSubmit={handleSubmit}>
          <input
            type='text'
            className='form-control'
            placeholder='Search your superhero here ...'
            name='search'
            onChange={(e) => setSearchTitle(e.target.value)}
          />
          <button type='submit' className='search-btn'>
            <i className='fas fa-search'></i>
          </button>
        </form>
      </div>
      {/* <!-- end of Navbar --> */}
    </>
  )
}
