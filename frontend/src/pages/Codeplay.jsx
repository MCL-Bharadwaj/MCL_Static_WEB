import React from 'react'
import Header from '../components/Header.jsx'
import Footer from '../components/Footer.jsx'

function Codeplay() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      {/* IDE Container - Full Width & Height */}
      <main className="flex-1 w-full">
        <div className="h-full w-full bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
          <iframe
            src="https://www.onlineide.pro/playground/python"
            sandbox="allow-scripts allow-same-origin allow-popups"
            allowFullScreen
            loading="lazy"
            title="Python Playground - Online IDE Pro"
            className="w-full h-full border-0"
            style={{ height: 'calc(100vh - 192px)' }}
          />
        </div>
      </main>
      
      
    </div>
  )
}


export default Codeplay
