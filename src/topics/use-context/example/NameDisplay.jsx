import React, { useContext } from 'react'
import {userContext} from './userContext';

const NameDisplay = () => {

const {user} = useContext(userContext);

  return (
    <div>
        Name: {user}
    </div>
  )
}

export default NameDisplay