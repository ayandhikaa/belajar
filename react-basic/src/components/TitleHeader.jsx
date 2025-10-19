import React from 'react'

const TitleHeader = ({title}) => {
  return (
    <>
        <h1 className='text-4xl font-bold text-green-500 mb-5 font-serif'>{title}</h1>
        <hr className=" h-1 mx-auto my-4 bg-green-600 border-0 rounded-sm md:my-10 "></hr>
    </>
  )
}

export default TitleHeader