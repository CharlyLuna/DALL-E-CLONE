import { useState } from 'react'
import { CloseIcon } from './CloseIcon.jsx'

export const Warning = () => {
  const [firstLoad, setfirstLoad] = useState(true)

  return (
    <div className={`flex ${!firstLoad ? 'invisible' : ''} justify-between px-4 items-center bg-red-400 absolute inset-0 h-14`}>
      <h1>This project is using the free plan of Render so you may expect a delay on the first load of the images due to server innactivity, sorry for the inconvenience.</h1>
      <button
        onClick={() => {
          setfirstLoad(false)
        }}
      >
        <CloseIcon />
      </button>
    </div>
  )
}
