import React from 'react'

interface RootLayoutProps {
  user: any;
}

export const Home: React.FC<RootLayoutProps> = ({ user }) => {
  return (
    <div>Home</div>
  )
}