import React from 'react'

export default function SuperoheroCards({ data, toggle, toggleTab }) {
  return (
    <>
      <div className='app-body' key={data.id}>
        <div className='app-body-content'>
          {/* <!-- app body thumbnail --> */}
          <div className='app-body-content-thumbnail'>
            <img src={data.images.lg} alt='img' />
          </div>
          {/* <!-- end of app body thumbnail --> */}

          <div className='app-body-content-list'>
            <div className='name'>{data.name}</div>

            {/* <!-- tabs head --> */}
            <div className='app-body-tabs-head'>
              <button
                type='button'
                className={
                  toggle === 1
                    ? 'tab-head-single active-tab'
                    : 'tab-head-single'
                }
                onClick={() => toggleTab(1)}
              >
                <span>powerstats</span>
              </button>
              <button
                type='button'
                className={
                  toggle === 2
                    ? 'tab-head-single active-tab'
                    : 'tab-head-single'
                }
                onClick={() => toggleTab(2)}
              >
                <span>biography</span>
              </button>
              <button
                type='button'
                className={
                  toggle === 3
                    ? 'tab-head-single active-tab'
                    : 'tab-head-single'
                }
                onClick={() => toggleTab(3)}
              >
                <span>apperance</span>
              </button>
              <button
                type='button'
                className={
                  toggle === 4
                    ? 'tab-head-single active-tab'
                    : 'tab-head-single'
                }
                onClick={() => toggleTab(4)}
              >
                <span>connections</span>
              </button>
            </div>
            {/* <!-- end of tabs head --> */}

            {/* <!-- tabs body --> */}
            <div className='app-body-tabs-body'>
              {/* <!-- powerstats tab --> */}
              <ul
                className={
                  toggle === 1
                    ? 'tab-body-single powerstats show-tab'
                    : 'tab-body-single powerstats'
                }
              >
                <li>
                  <div>
                    <i className='fa-solid fa-shield-halved'></i>
                    <span>intelligence</span>
                  </div>
                  <span>{data.powerstats.intelligence}</span>
                </li>
                <li>
                  <div>
                    <i className='fa-solid fa-shield-halved'></i>
                    <span>strength</span>
                  </div>
                  <span>{data.powerstats.strength}</span>
                </li>
                <li>
                  <div>
                    <i className='fa-solid fa-shield-halved'></i>
                    <span>speed</span>
                  </div>
                  <span>{data.powerstats.speed}</span>
                </li>
                <li>
                  <div>
                    <i className='fa-solid fa-shield-halved'></i>
                    <span>durability</span>
                  </div>
                  <span>{data.powerstats.durability}</span>
                </li>
                <li>
                  <div>
                    <i className='fa-solid fa-shield-halved'></i>
                    <span>power</span>
                  </div>
                  <span>{data.powerstats.power}</span>
                </li>
                <li>
                  <div>
                    <i className='fa-solid fa-shield-halved'></i>
                    <span>combat</span>
                  </div>
                  <span>{data.powerstats.combat}</span>
                </li>
              </ul>
              {/* <!-- end of powerstats tab --> */}

              {/* <!-- biography tab --> */}
              <ul
                className={
                  toggle === 2
                    ? 'tab-body-single biography show-tab'
                    : 'tab-body-single biography'
                }
              >
                <li>
                  <span>full name</span>
                  <span>{data.biography.fullName}</span>
                </li>
                <li>
                  <span>alter-egos</span>
                  <span>{data.biography.alterEgos}</span>
                </li>
                <li>
                  <span>aliases</span>
                  <span>{data.biography.aliases}</span>
                </li>
                <li>
                  <span>place-of-birth</span>
                  <span>{data.biography.placeOfBirth}</span>
                </li>
                <li>
                  <span>first-apperance</span>
                  <span>{data.biography.firstAppearance}</span>
                </li>
                <li>
                  <span>publisher</span>
                  <span>{data.biography.publisher}</span>
                </li>
              </ul>
              {/* <!-- end of biography tab --> */}

              {/* <!-- appearance --> */}
              <ul
                className={
                  toggle === 3
                    ? 'tab-body-single appearance show-tab'
                    : 'tab-body-single appearance'
                }
              >
                <li>
                  <span>
                    <i className='fas fa-star'></i> gender
                  </span>
                  <span>{data.appearance.gender}</span>
                </li>
                <li>
                  <span>
                    <i className='fas fa-star'></i> race
                  </span>
                  <span>{data.appearance.race}</span>
                </li>
                <li>
                  <span>
                    <i className='fas fa-star'></i> height
                  </span>
                  <span>{data.appearance.height[0]}</span>
                </li>
                <li>
                  <span>
                    <i className='fas fa-star'></i> weight
                  </span>
                  <span>{data.appearance.weight[0]}</span>
                </li>
                <li>
                  <span>
                    <i className='fas fa-star'></i> eye-color
                  </span>
                  <span>{data.appearance.eyeColor}</span>
                </li>
                <li>
                  <span>
                    <i className='fas fa-star'></i> hair-color
                  </span>
                  <span>{data.appearance.hairColor}</span>
                </li>
              </ul>
              {/* <!-- end of appearance --> */}

              {/* <!-- connections --> */}
              <ul
                className={
                  toggle === 4
                    ? 'tab-body-single connections show-tab'
                    : 'tab-body-single connections'
                }
              >
                <li>
                  <span>group--affiliation</span>
                  <span>{data.connections.groupAffiliation}</span>
                </li>
                <li>
                  <span>relatives</span>
                  <span>{data.connections.relatives}</span>
                </li>
              </ul>
              {/* <!-- end of connections --> */}
            </div>
            {/* <!-- end of tabs body --> */}
          </div>
        </div>
      </div>
    </>
  )
}
