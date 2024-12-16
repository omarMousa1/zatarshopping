import React from 'react'

type ButtonProps = {
    label: string;
    onClick: () => void;
}

export const Button: React.FC<ButtonProps> = ({ label, onClick }) => {
  return (
    <button
        className='border-2 border-[#3A5B22] bg-[#3A5B22] text-white py-1 px-3 rounded-md'
        onClick={onClick}
    >
        {label}
    </button>
  )
}
