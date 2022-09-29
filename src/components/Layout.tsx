import React, { FC } from 'react'
import Aside from './Aside/Aside'
import MobileAside from './Aside/MobileAside'

type Props = {
  children: JSX.Element | JSX.Element[]
  title?: string
}
const Layout: FC<Props> = ({ children }) => {
  return (
    <div className="max-w-8xl mx-auto px-4 sm:px-6 md:px-8">
      <div className="min-h-screen flex flex-col lg:flex-row items-center lg:items-stretch max-w-5xl mx-auto gap-6">
        <main className="pt-4 flex-1 w-full pb-12">
          <h1 className='text-xl md:text-2xl lg:text-3xl text-center font-bold'>
            もりた記
          </h1>
          <p className='text-center text-xs md:text-sm mb-8'>-書評とか-</p>
          {children}
        </main>
        <Aside />
        <MobileAside />
      </div>
    </div>
  )
}

export default Layout
