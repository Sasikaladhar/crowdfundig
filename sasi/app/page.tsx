import React from 'react';
import Image from 'next/image'; // Importing the Image component from next/image
import Footer from './footer';
import Navbar from './navbar';
import Photos from './photos';
import Signin from './singin';
import Card from './card';

export default function Home() {
  return (
    <>
    <Navbar></Navbar>    
    <Card> </Card>    
      <Footer></Footer>
    </>
  );
}
