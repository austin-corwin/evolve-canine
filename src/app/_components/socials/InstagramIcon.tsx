import { Link } from '@chakra-ui/react'
import React from 'react'

interface IInstagramIcon {}

const InstagramIcon: React.FC<IInstagramIcon> = () => {
    return (
        <Link
            href='https://www.instagram.com/evolvek9training/'
            aria-label='View evolve K9 instagram'
        >
            <svg
                fill='#FFF5D2'
                xmlns='http://www.w3.org/2000/svg'
                width='24'
                height='24'
                viewBox='0 0 24 24'
            >
                <path d='M8 3C5.243 3 3 5.243 3 8v8c0 2.757 2.243 5 5 5h8c2.757 0 5-2.243 5-5V8c0-2.757-2.243-5-5-5H8zm0 2h8c1.654 0 3 1.346 3 3v8c0 1.654-1.346 3-3 3H8c-1.654 0-3-1.346-3-3V8c0-1.654 1.346-3 3-3zm9 1a1 1 0 00-1 1 1 1 0 001 1 1 1 0 001-1 1 1 0 00-1-1zm-5 1c-2.757 0-5 2.243-5 5s2.243 5 5 5 5-2.243 5-5-2.243-5-5-5zm0 2c1.654 0 3 1.346 3 3s-1.346 3-3 3-3-1.346-3-3 1.346-3 3-3z'></path>
            </svg>
        </Link>
    )
}
export default InstagramIcon
