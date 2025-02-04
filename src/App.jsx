
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Counter from './counter'
import QuoteFetcher from './QuoteFetcher'
import QuoteFetcherLoader from './QuoteFetcherLoader'
import ProfileViewerWithSearch from "./ProfileViewerWithSearch"
function App() {


  return (
    <>
      {/* <ProfileViewerWithSearch /> */}
      <QuoteFetcherLoader />
      {/* <QuoteFetcher /> */}
      {/* <Counter /> */}
    </>
  )
}

export default App
