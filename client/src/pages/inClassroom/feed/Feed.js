import React from 'react'
import Navbar from '../../../components/Navbar'

function Feed(props) {

  return (
    <div>
      <Navbar />
      <span>
        Feed {props._id}
      </span>
    </div>
  )
}

export default Feed
