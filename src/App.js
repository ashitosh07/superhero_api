import React, { useState, useEffect } from 'react'
import Navbar from './Navbar'
import SuperheroCards from './SuperoheroCards'

function App() {
  const [loading, setLoading] = useState(false)
  const [heros, setHeros] = useState([])
  const [searchTitle, setSearchTitle] = useState('')
  const [toggle, setToggle] = useState(1)

  const toggleTab = (index) => {
    setToggle(index)
  }

  useEffect(() => {
    const loadheros = async () => {
      setLoading(true)
      const response = await fetch(
        'https://akabab.github.io/superhero-api/api/all.json'
      )
      const data = await response.json()

      setHeros(data)
      setLoading(false)
    }

    loadheros()
  }, [])

  return (
    <>
      <div className='main-wrapper'>
        <div className='app'>
          <Navbar setSearchTitle={setSearchTitle} />
          {loading ? (
            <h2 className='loading'>Loading....</h2>
          ) : (
            heros
              .filter((value) => {
                if (searchTitle === '') {
                  return ''
                } else if (
                  value.name.toLowerCase().includes(searchTitle.toLowerCase())
                ) {
                  return value
                }
              })
              .map((data) => {
                return (
                  <SuperheroCards
                    data={data}
                    toggle={toggle}
                    toggleTab={toggleTab}
                  />
                )
              })
          )}
        </div>
      </div>
    </>
  )
}

export default App
