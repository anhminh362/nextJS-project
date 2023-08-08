
import React from 'react'

const Page = ({params}:{params:{categorySlug:string}}) => {
        
  return (
    <div className='p-12 font-semibold  text-4xl text-center text-neutral-600'>Welcome to {params.categorySlug} page</div>
  )
}

export default Page