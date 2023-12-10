import React from 'react'
import Home from './home/page'
import 'react-toastify/dist/ReactToastify.css';
import DocCards from '@/components/doctorcards/DocCards';


const page = () => {
  return (
    <main>
    <Home/>
    <DocCards/>
    </main>
  )
}

export default page