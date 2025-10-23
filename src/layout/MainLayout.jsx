import React from 'react';
import Home from '../pages/Home';
import { Outlet, useNavigation } from 'react-router';
import Loading from '../pages/Loading';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const MainLayout = () => {

  const {state} = useNavigation();

  return (
    <div>
      <header>
        <nav className=''>
          <Navbar></Navbar>
        </nav>
      </header>

      <main className='w-full '>
        <section className="main col-span-6">
          {state == "loading" ? <Loading/> : <Outlet></Outlet>}
        </section>
      </main>
      <footer>
        <Footer></Footer>
      </footer>
    </div>
  );
};

export default MainLayout;