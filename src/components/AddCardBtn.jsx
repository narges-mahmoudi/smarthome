import React from 'react'
import * as HiIcons from "react-icons/hi";

function AddCardBtn({customClassName='',onClick}) {
  return (
    <div className={`add-btn-wrapper ${customClassName}`} onClick={onClick}>
        <HiIcons.HiPlus />
    </div>
  )
}

export default AddCardBtn