'use client'
import Image from 'next/image'
import { Navbar } from '../_components/Navbar'
import { Box, Text } from '@chakra-ui/react'
export default function Home() {
    return (
        <main className='flex min-h-screen flex-col items-center justify-between'>
            <Navbar />
            <div className='flex w-full flex-1 flex-col items-center justify-center px-20 text-center'>
                {/* <Text>Hero section goes here</Text> */}
            </div>
        </main>
    )
}
