import React from 'react'

export default function Content() {
  return (
    <div className='bg-[#000000] py-8 px-12 h-full w-full flex flex-col justify-end align-end'>
        <Section/>
    </div>
  )
}


const Section = () => {
    return (
        <div className='flex justify-betweem items-end w-full'>
          <div>
            <h1 className='text-[15vw] leading-[0.8] mt-10'>Naved Khan</h1>
            </div>
            <div>
            <ul className='text-white align-right items-end'>
              <li><a href="https://www.linkedin.com/in/navedkabirkhan/" target='_blank'>LinkedIn</a></li>
              <li><a href="https://github.com/NavedKabirKhan" target='_blank'>GitHub</a></li>
              <li><a href="https://x.com/hi_navedkhan" target='_blank'>Twitter</a></li>
              <li><a href="https://www.instagram.com/dev.naved/" target='_blank'>Instagram</a></li>
              <li><a href="https://dribbble.com/naved_kabir_khan" target='_blank'>Dribbble</a></li>
            </ul>
            </div>
        </div>
    )
}