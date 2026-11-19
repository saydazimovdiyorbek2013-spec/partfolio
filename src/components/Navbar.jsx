import React, { useState, useEffect } from 'react'

function Navbar() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav className={`navbar navbar-expand-lg fixed-top ${scrolled ? 'shadow' : ''}`}
      style={{
        backgroundColor: scrolled ? 'rgba(22, 33, 62, 0.95)' : 'transparent',
        backdropFilter: scrolled ? 'blur(10px)' : 'none',
        transition: 'all 0.3s ease',
        padding: '12px 0'
      }}>
      <div className="container">
        <a className="navbar-brand fw-bold fs-4" href="#" style={{ color: '#6c63ff' }}>
          &lt;Dev /&gt;
        </a>
        <button className="navbar-toggler border-0" type="button" data-bs-toggle="collapse" data-bs-target="#navMenu"
          style={{ color: '#e8e8e8' }}>
          <span style={{ fontSize: '1.5rem' }}>☰</span>
        </button>
        <div className="collapse navbar-collapse" id="navMenu">
          <ul className="navbar-nav ms-auto gap-1">
            {['Bosh sahifa', 'Men haqimda', 'Ko\'nikmalar', 'Loyihalar', 'Aloqa'].map((item, i) => {
              const links = ['#hero', '#about', '#skills', '#projects', '#contact']
              return (
                <li className="nav-item" key={i}>
                  <a className="nav-link px-3" href={links[i]}
                    style={{ color: '#e8e8e8', fontSize: '0.95rem', transition: 'color 0.3s' }}
                    onMouseEnter={e => e.target.style.color = '#6c63ff'}
                    onMouseLeave={e => e.target.style.color = '#e8e8e8'}>
                    {item}
                  </a>
                </li>
              )
            })}
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
