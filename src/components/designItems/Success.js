import React from 'react'
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Success = ({ message, wrapper }) => {
  return (
    <div className={wrapper}>
      <div className='success'>
        <FontAwesomeIcon icon={faCheckCircle} />
        {message}
      </div>
    </div>
  )
}

export default Success
