import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { store } from '../store/store'
import { Provider } from 'react-redux'
import NavBar from '../components/layout/NavBar'

import '../styles/Home.css'
import '../styles/NavBar.css';
import './login/Login.css'
import '../components/general/ProjectCard.css';
import { ToastContainer } from 'react-toastify'
import "react-toastify/dist/ReactToastify.css";
import Wrapper from '../components/Wrapper'
import { NextPage } from 'next'

export type NextApplicationPage<P = any, IP = P> = NextPage<P, IP> & {
  requiredAuth?: boolean;
}

export default function App(props: AppProps) { 
  const {Component, pageProps}: {Component: NextApplicationPage; pageProps: any} = props;
  return (
    <Provider store={store}>
      <Wrapper {...pageProps}>
        <>
          <ToastContainer/>
          <NavBar/>
          <Component {...pageProps} />
        </>
      </Wrapper>
    </Provider>
  )
}
