import React from 'react'
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

type SkeletonProps = {
  cards: number
}

export const Skeletons = () => {
  return (
    <div className="flex flex-col items-center p-6 space-y-4">
        <div className="w-full max-w-md">
          <Skeleton height={30} className="mb-2" />
          <Skeleton height={30} className="mb-2" />
          <Skeleton height={30} />
        </div>
    </div>
  )
}

export const SkeletonCard = ({ cards }: SkeletonProps) => {
  return (
    <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6'>
      {Array(cards).fill(0).map((_, i) => (
      <div key={i} className='shadow-lg p-2'>
        <div className='mx-8'>
          <Skeleton height={100} />
        </div>
        <div className='mx-3'>
          <Skeleton count={3} />
        </div>
        <div className='mx-4'>
          <Skeleton height={30} />
        </div>
      </div> 
      ))}
    </div>
  )
}