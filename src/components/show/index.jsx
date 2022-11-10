import React from 'react'
import Room from '../room/Room'
import Show from './Show'

import items from '../../util/data'
import {dat} from '../../util/data'

const Index = () => {
  return (
    <div>
        <Show heading={'ESSENTIAL ITEMS'} items={items} />
        <Room />
        <Show heading={'FEATURED ITEMS'} items={dat} />
    </div>
  )
}

export default Index