// App.jsx
import React from 'react'
import IntroSection from './components/IntroSection'
import LovePhase from './components/LovePhase'
import OverthinkingYears from './components/OverthinkingYears'
import Realization from './components/Realization'
import Closure from './components/Closure'
import AuthorPage from './components/AuthorPage'
import PDFSection from './components/PDFSection'

function App() {
  return (
    <div className="bg-black text-white font-sans">
      <IntroSection />
      <LovePhase />
      <OverthinkingYears />
      <Realization />
      <Closure />
      <AuthorPage />
      <PDFSection />
    </div>
  )
}

export default App