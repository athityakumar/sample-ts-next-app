/* This example requires Tailwind CSS v2.0+ */
import React, { Fragment, useState, useEffect } from 'react'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { BellIcon, MenuIcon, XIcon } from '@heroicons/react/outline'

import {useTheme} from 'next-themes'

import DarkModeToggle from "react-dark-mode-toggle";

import Link from 'next/link'
import { getLink } from '../common'

import SearchExampleStandard from "./sem_ui_search";

const navigation = [
  { name: 'Dashboard', href: '#', current: true },
  { name: 'Team', href: '#', current: false },
  { name: 'Projects', href: '#', current: false },
  { name: 'Calendar', href: '#', current: false },
]

function classNames(...classes: string[]): string {
  return classes.filter(Boolean).join(' ')
}

export default function Example() {
    const {theme, setTheme} = useTheme()
    const [isDarkMode, setIsDarkMode] = useState(theme === 'dark');
  
    useEffect(() => {
      setIsDarkMode(theme === 'dark') 
    }, [theme])
  
    const onDarkModeToggle = () => {
      console.log(isDarkMode, theme)
      setTheme(theme === 'dark' ? 'light' : 'dark')
    }
  
    return (
        <Fragment>
            <div className='relative'>

    <Disclosure as="nav" className="dark:bg-[#0e1341] bg-white transition duration-1000 antialiased fixed w-full z-50">
      {({ open }) => (
        <>
          <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
            <div className="relative flex items-center justify-between h-16">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-gray-200 hover:text-white hover:bg-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <MenuIcon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
                <div className="flex-shrink-0 flex items-center text-[#0e1341] dark:text-white font-extrabold">
                <Link href={getLink(`/index`)}>@athityakumar</Link>
                    
                  {/* <img
                    className="block lg:hidden h-8 w-auto"
                    src="https://tailwindui.com/img/logos/workflow-mark-indigo-500.svg"
                    alt="Workflow"
                  />
                  <img
                    className="hidden lg:block h-8 w-auto"
                    src="https://tailwindui.com/img/logos/workflow-logo-indigo-500-mark-white-text.svg"
                    alt="Workflow"
                  /> */}
                </div>
                <div className="hidden sm:block sm:ml-6">
                  <div className="flex space-x-4">
                    {navigation.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className={classNames(
                          item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                          'px-3 py-2 rounded-md text-sm font-medium'
                        )}
                        aria-current={item.current ? 'page' : undefined}
                      >
                        {item.name}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
              {/* <SearchExampleStandard /> */}
<div className="relative left-2 top-7">
<DarkModeToggle
      onChange={onDarkModeToggle}
      checked={isDarkMode}
      size={80}
    />

</div>

            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navigation.map((item) => (
                <Disclosure.Button
                  key={item.name}
                  as="a"
                  href={item.href}
                  className={classNames(
                    item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                    'block px-3 py-2 rounded-md text-base font-medium'
                  )}
                  aria-current={item.current ? 'page' : undefined}
                >
                  {item.name}
                </Disclosure.Button>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
    <div className="grid grid-cols-4 md:grid-cols-12 sm:grid-cols-12 gap-4">
    <div className='selection:bg-fuchsia-300 selection:text-fuchsia-900 bg-white dark:bg-black text-black dark:text-white top-[50px] relative'>
    <p className='bg-white text-black p-5 dark:bg-black dark:text-white'>
    <p className="first-line:uppercase first-line:tracking-widest
  first-letter:text-7xl first-letter:font-bold first-letter:text-slate-900 dark:first-letter:text-slate-100
  first-letter:mr-3 first-letter:float-left
">
  Well, let me tell you something, funny boy. Y'know that little stamp, the one
  that says "New York Public Library"? Well that may not mean anything to you,
  but that means a lot to me. One whole hell of a lot.
        
        Pellentesque volutpat porta risus, a iaculis sapien. 
        
        {/* <span className="bg-gradient-to-r from-yellow-600/40 to-yellow-600/40 bg-growing-underline p-[2px]">Fusce porta, risus et sagittis fermentum, massa ante ultrices lacus, ut cursus metus sem in nulla. Morbi efficitur tortor felis. Praesent ac cursus enim, non dictum quam. Sed facilisis orci ac massa lacinia volutpat sit amet vitae elit. Pellentesque accumsan eu elit et aliquam. Duis consequat porta porttitor. Nullam non risus dapibus neque viverra interdum at vitae lectus.</span> */}
        
        Aenean eget velit non massa lobortis porta. Aenean in sagittis turpis. In a ullamcorper dui. Ut ultricies posuere sem. Donec ullamcorper, eros at varius cursus, nisl arcu egestas ipsum, at fermentum lacus ante vel augue. Maecenas dolor ante, facilisis eu molestie quis, laoreet quis orci. Morbi efficitur euismod elit eu mollis. In nec porta nisi.
    
Some prefix
        <span
    className="
        underline decoration-transparent decoration-2 decoration-green-500 bg-green-500/30 dark:bg-lime-400/50 h-[20px] hover:cursor-pointer mx-1
    relative text-black dark:text-white hover:text-black before:absolute before:block before:w-full before:h-[20px] before:bottom-[-3px] before:bottom-0 before:left-0 before:bg-green-500/40 before:scale-x-0 before:transition before:transform before:duration-300 before:ease-linear hover:before:scale-x-[1] hover:decoration-transparent
    "
    > with very important highlight </span> with some useless suffix!
    </p>

  <span
    className="
        underline decoration-dashed decoration-2 decoration-green-500 hover:cursor-pointer
    relative text-black dark:text-white hover:text-black before:absolute before:block before:w-full before:h-[3px] before:bottom-[-3px] before:bottom-0 before:left-0 before:bg-green-500 before:scale-x-0 before:transition before:transform before:duration-300 before:ease-linear hover:before:scale-x-[1]
    "
    >I am some fancy-underlined text</span>,
  and I am normal text again.

    <p>Foo</p>


    <a href="https://athityakumar.dev" target="_blank" className="underline decoration-dotted decoration-1 decoration-black
    relative text-black hover:text-black before:absolute before:block before:w-full before:h-[2px] before:bottom-0 before:left-0 before:bg-black before:scale-x-0 before:transition before:transform before:duration-300 before:ease-linear hover:before:scale-x-[1]">Some link</a>
    <div className="flex items-center justify-center min-h-screen">
  <a className="text-6xl font-bold transition duration-150 border-b-8 border-transparent hover:border-purple-500">
    Button
  </a>
  </div>

     </p>
  

</div>
</div>
</div>
<div className="grid grid-cols-4 md:grid-cols-12">
    Sidebar
</div>

    </Fragment>
)
}