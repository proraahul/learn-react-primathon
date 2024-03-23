import React, { useContext } from 'react'
import { AuthContext } from './AuthApp';

const UserInfo = () => {
  const { user } = useContext(AuthContext);
  console.log(user);
  return (
    <div>
      <h1>User Info</h1>
      {
        user?.map((item, i) => {
          return (
            <div key={i} className='text-red-600'>
              <p>Username: {item.username}</p>
              <p>Password: {item.password}</p>
            </div>
          )})
      }
    </div>
  )
}

export default UserInfo