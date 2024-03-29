"use client";
import Image from 'next/image';
import { BsMoonStarsFill } from "react-icons/bs";
import { AiFillLinkedin, AiFillGithub, AiFillMediumCircle } from "react-icons/ai";
import deved from "../public/dev-ed-wave.png";
import design from '../public/design.png';
import code from '../public/code.png';
import consulting from '../public/consulting.png';
import web1 from '../public/web1.png';
import web2 from '../public/web2.png';
import web3 from '../public/web3.png';
import web4 from '../public/web4.png';
import web5 from '../public/web5.png';
import web6 from '../public/web6.png';
import { useState } from 'react';



export default function Home() {
  const [darkMode, setDarkMode] = useState(false);
  return (
    <div className={darkMode ? "dark": ""}>
     <main className="bg-white px-10 md:px-20 lg:px-40 dark:bg-gray-900">
      <section className="min-h-screen">
        <nav className="py-10 mb-12 flex justify-between">
          <h1 className="text-xl font-inconsolata mr-5 dark:text-white">DevelopedBy<a className="underline text-teal-500 hover:text-teal-700" href="https://github.com/Yahoo002" target="_blank">Yahoo002</a></h1>
          <ul className="flex items-center dark:text-white">
            <li><BsMoonStarsFill onClick={() => setDarkMode(!darkMode)} className="cursor-pointer text-2xl"/></li>
            <li><a className="bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 rounded-lg ml-8" href="#">Resume</a></li>
          </ul>
        </nav>
        <div className="text-center p-10">
          <h2 className="text-5xl py-2 text-teal-600 font-medium md:text-6xl">Yahya Aseerullah</h2>
          <h3 className="text-2xl py-2 md:text-3xl dark:text-white">Cloud Solutions Architect | Developer | AvGeek | Polyglot</h3>
          <p className="text-md py-5 leading-8 text-gray-700 md:text-xl max-w-xl mx-auto dark:text-white ">&& Insert 2 liner info about me Lorem ipsum dolor, sit amet consectetur adipisicing elit. Debitis nesciunt &&</p>
        </div>
        <div className="text-5xl flex justify-center gap-16 py-2 pb-10 text-gray-600">
          <AiFillLinkedin/>
          <AiFillGithub/>
          <AiFillMediumCircle/>
        </div>
        <div className="relative mx-auto bg-gradient-to-b from-teal-500 rounded-full w-80 h-80 overflow-hidden md:h-96 md:w-96">
          <Image src={deved} layout="fill" objectFit="cover" alt='deved'/>
        </div>
      </section>

      <section>
        <div>
          <h3 className="text-3xl py-1 dark:text-white">Experience</h3>
          <p className="text-md py-2 leading-8 text-gray-700 dark:text-white">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptas in cumque impedit delectus esse perferendis unde eos dolores reiciendis nesciunt!
          </p>
        </div>
        <div className='lg:flex gap-10'>
          <div className='flex flex-col text-center items-center shadow-2xl p-10 rounded-xl my-10 dark:bg-white'>
            <Image src={design} width={100} height={100} alt='design'/>
            <h3 className='text-lg font-medium pt-8 pb-2 '>Beautiful Designs</h3>
            <p className='py-2'>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ut perferendis nobis possimus neque quidem ipsum!
            </p>
            <h4 className='py-4 text-teal-600'>Design Tools I use</h4>
            <p className='text-gray-800 py-1'>Photoshop</p>
            <p className='text-gray-800 py-1'>Illustrator</p>
            <p className='text-gray-800 py-1'>Figma</p>
          </div>
          <div className='flex flex-col text-center items-center shadow-2xl p-10 rounded-xl my-10 dark:bg-white'>
            <Image src={code} width={100} height={100} alt='code'/>
            <h3 className='text-lg font-medium pt-8 pb-2'>Beautiful Designs</h3>
            <p className='py-2'>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ut perferendis nobis possimus neque quidem ipsum!
            </p>
            <h4 className='py-4 text-teal-600'>Design Tools I use</h4>
            <p className='text-gray-800 py-1'>Photoshop</p>
            <p className='text-gray-800 py-1'>Illustrator</p>
            <p className='text-gray-800 py-1'>Figma</p>
          </div>
          <div className='flex flex-col text-center items-center shadow-2xl p-10 rounded-xl my-10 dark:bg-white'>
            <Image src={consulting} width={100} height={100} alt='consulting' />
            <h3 className='text-lg font-medium pt-8 pb-2'>Beautiful Designs</h3>
            <p className='py-2'>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ut perferendis nobis possimus neque quidem ipsum!
            </p>
            <h4 className='py-4 text-teal-600'>Design Tools I use</h4>
            <p className='text-gray-800 py-1'>Photoshop</p>
            <p className='text-gray-800 py-1'>Illustrator</p>
            <p className='text-gray-800 py-1'>Figma</p>
          </div>
        </div>
      </section>
      <section>
        <div>
          <h3 className="text-3xl py-1 dark:text-white">Portfolio</h3>
          <p className='text-md py-2 leading-8 text-gray-700 dark:text-white'>Lorem ipsum dolor sit amet consectetur adipisicing elit. <span className='text-teal-500'>Ipsam tenetur</span> animi, hic ratione soluta saepe. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magnam odio, libero minima incidunt ducimus non.</p>
          <p className='text-md py-2 leading-8 text-gray-700 dark:text-white'>Lorem ipsum dolor sit amet consectetur adipisicing elit. <span className='text-teal-500'>Ipsam tenetur</span> animi, hic ratione soluta saepe.</p>
        </div>
        <div className='flex flex-col gap-10 py-10 lg:flex-row lg:flex-wrap'>
          <div className='basis-1/3 flex-1 '>
            <Image src={web1} alt='web1' className='rounded-lg object-cover w-full h-full'layout='responsive' />
          </div>
          <div className='basis-1/3 flex-1 '>
            <Image src={web2} alt='web2' className='rounded-lg object-cover w-full h-full' layout='responsive' />
          </div>
          <div className='basis-1/3 flex-1 '>
            <Image src={web3} alt='web3' className='rounded-lg object-cover w-full h-full'layout='responsive' />
          </div>
          <div className='basis-1/3 flex-1 '>
            <Image src={web4} alt='web4' className='rounded-lg object-cover w-full h-full'layout='responsive' />
          </div>
          <div className='basis-1/3 flex-1 '>
            <Image src={web5} alt='web5' className='rounded-lg object-cover w-full h-full'layout='responsive'/>
          </div>
          <div className='basis-1/3 flex-1 '>
            <Image src={web6} alt='web6' className='rounded-lg object-cover w-full h-full'layout='responsive' />
          </div>
        </div>
      </section>
     </main>
    </div>
  );
}
