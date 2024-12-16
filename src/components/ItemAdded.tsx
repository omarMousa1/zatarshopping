import correctSuccess from '../assets/icons/correctSuccess.svg';

type Props = {
    isVisible: boolean
}

export const ItemAdded = ({ isVisible }: Props) => {
  return (
    <div className={`fixed right-5 bottom-5 flex items-center gap-x-2 py-8 px-4 max-w-max rounded-lg bg-gray-900
            transition-all duration-500 ease-in-out
            ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}
        `}
    >
        <img 
            src={correctSuccess} 
            alt='item added'
            className='w-9 h-9' 
        />
        <p className='text-white text-lg font-semibold'>Item added successfully</p>
    </div>
  )
}
