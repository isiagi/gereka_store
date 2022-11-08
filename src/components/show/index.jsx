import React from 'react'
import Room from '../room/Room'
import Show from './Show'

const Index = () => {
  return (
    <div>
        <Show heading={'ESSENTIAL ITEMS'}/>
        <Room />
        <Show heading={'FEATURED ITEMS'}/>
    </div>
  )
}

export default Index