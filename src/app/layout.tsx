'use client'
import type { Metadata } from 'next'
import './globals.css'
import * as React from 'react'
import { Providers } from './providers'
import { fonts } from '@/app/_config/fonts'
import { MenuItem, Navbar } from './_components/Navbar'
import Footer from './_features/footer/Footer'
import {
    Box,
    Button,
    Drawer,
    DrawerBody,
    DrawerCloseButton,
    DrawerContent,
    DrawerFooter,
    DrawerHeader,
    DrawerOverlay,
    Input,
    Stack,
    VStack,
} from '@chakra-ui/react'
import MenuLinks from './_components/Navbar/MenuLinks'
import useDrawer from './_state/stores/useDrawer'

export default function RootLayout({ children }: { children: React.ReactNode }) {
    const isOpen = useDrawer((state) => state.isOpen)
    const setIsOpen = useDrawer((state) => state.setIsOpen)
    const { hind, montserrat } = fonts
    return (
        <html lang='en' className={`${hind.variable} ${montserrat.variable}`}>
            {/* <html lang='en'> */}
            <head>
                <title>Create next app</title>
                <meta name='description' content='Generated by create next app' />
            </head>
            <body style={{ background: '#FFF5D2' }}>
                <Providers>
                    <main className='flex min-h-screen flex-col items-center justify-between'>
                        <Navbar />
                        {children}
                        <Drawer isOpen={isOpen} placement='right' onClose={() => setIsOpen(false)}>
                            <DrawerOverlay />
                            <DrawerContent>
                                <Box h='full' bg='#FFF5D2'>
                                    <DrawerCloseButton />
                                    {/* <DrawerHeader>Create your account</DrawerHeader> */}
                                    <DrawerBody pt={8}>
                                        {/* <Input placeholder='Type here...' /> */}
                                        {/* <MenuLinks isOpen={isOpen} /> */}
                                        <VStack
                                            spacing={8}
                                            align='center'
                                            justify={[
                                                'center',
                                                'space-between',
                                                'flex-end',
                                                'flex-end',
                                            ]}
                                            pt={[4, 4, 0, 0]}
                                        >
                                            <Box onClick={() => setIsOpen(false)}>
                                                <MenuItem to='/#about'>About</MenuItem>
                                            </Box>
                                            <Box onClick={() => setIsOpen(false)}>
                                                <MenuItem to='/#programs'>Programs</MenuItem>
                                            </Box>
                                            <Box onClick={() => setIsOpen(false)}>
                                                <MenuItem to='/contact'>Contact</MenuItem>
                                            </Box>
                                        </VStack>
                                    </DrawerBody>
                                </Box>
                            </DrawerContent>
                        </Drawer>
                    </main>
                    <Footer />
                </Providers>
            </body>
        </html>
    )
}
