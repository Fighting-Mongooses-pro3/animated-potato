import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import {Button} from './button'
import {AiOutlineFileAdd} from 'react-icons/ai'


type Props = {

}

export const Sidebar = (props: Props) => {
  return (
    <aside className='border grid grid-rows-6 grid-cols-3 border-white h-screen w-2/12 mt-12'>
        <div className="row-start-1 col-start-2 col-end-3 row-end-2 grid-rows-6 grid">
            <section className='row-start-1 text-center mt-4'>
                <h1 className='text-2xl cursor-default'>Budget Calculator</h1>
                <Link href='/'>
                <a>
                <Image
                src='/icon.png'
                alt="Logo"
                height='64'
                width="64"
                priority
                />
                </a>
                </Link>
            </section>
        </div>
            <section className='w-full row-start-2 row-end-5 border col-start-1 col-end-4 border-lime-500'>
            <Button 
            text="Add Expense"
            icon={<AiOutlineFileAdd className='w-5 h-5 mr-1' />}
            customCss="border border-white rounded-full mt-2 inline-flex align-baseline min-w-fit hover:scale-105 hover-bg-white p-2"
            />
            </section>
    </aside>
  )
}

