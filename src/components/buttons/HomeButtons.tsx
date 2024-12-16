import React from 'react'

type ButtonProps = {
    label: string;
    onClick: () => void;
}

export const HomeButtons = (props: ButtonProps) => {
  return (
    <button 
        className='border-2 border-white bg-indigo-600 hover:bg-indigo-900 duration-300 text-white py-1 px-3 rounded-md'
        onClick={props.onClick}
    >
        {props.label}
    </button>
  )
}
