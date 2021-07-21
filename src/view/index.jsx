import React, {Fragment} from 'react';
import Home from './Home';
import { Footer } from '../partials/Footer';
import { Header } from '../partials/Header';
import '../assets/css/glob.css';


export function Index() {
  return (
    <Fragment>
      <Header/>
      <Home/>
      <Footer/>
    </Fragment>
  )
}
