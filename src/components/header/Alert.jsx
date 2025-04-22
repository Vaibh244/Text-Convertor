import React from 'react'

export default function Alert(props) {
 
  return (
    props.alert && <div className='bg-green-500 text-white py-3 px-3 dark:bg-blue-500 dark:hover:bg-blue-600 transition-colors duration-300'role='alert'>
        {props.alert.msg} 
    </div>
  )
}
