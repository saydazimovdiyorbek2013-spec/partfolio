import React from 'react'

function Hero() {
  return (
    <section id="hero" style={{
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      background: 'linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #1a1a2e 100%)',
      position: 'relative',
      overflow: 'hidden'
    }}>
      <div style={{
        position: 'absolute',
        top: '20%',
        right: '10%',
        width: '300px',
        height: '300px',
        background: 'radial-gradient(circle, rgba(108,99,255,0.15) 0%, transparent 70%)',
        borderRadius: '50%',
        filter: 'blur(40px)'
      }} />
      <div style={{
        position: 'absolute',
        bottom: '20%',
        left: '5%',
        width: '200px',
        height: '200px',
        background: 'radial-gradient(circle, rgba(108,99,255,0.1) 0%, transparent 70%)',
        borderRadius: '50%',
        filter: 'blur(30px)'
      }} />

      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-7 fade-in">
            <p className="mb-2" style={{ color: '#6c63ff', fontSize: '1.1rem', fontWeight: 500, letterSpacing: '2px' }}>
              SALOM, MEN
            </p>
            <h1 className="display-3 fw-bold mb-3" style={{ color: '#ffffff', lineHeight: 1.2 }}>
              Frontend <br />
              <span style={{ color: '#6c63ff' }}>Dasturchi</span>man
            </h1>
            <p className="mb-4" style={{ color: '#8892b0', fontSize: '1.15rem', maxWidth: '500px', lineHeight: 1.7 }}>
              Zamonaviy va chiroyli veb-saytlar yarataman. 
              React, Bootstrap va JavaScript texnologiyalaridan foydalanaman.
            </p>
            <div className="d-flex gap-3 flex-wrap">
              <a href="#projects" className="btn btn-primary btn-lg">
                Loyihalarim →
              </a>
              <a href="#contact" className="btn btn-outline-primary btn-lg">
                Bog'lanish
              </a>
            </div>

            <div className="d-flex gap-4 mt-5">
              {[
                { icon: '📧', label: 'Email', href: 'mailto:developer@email.com' },
                { icon: '💼', label: 'GitHub', href: 'https://github.com' },
                { icon: '🔗', label: 'LinkedIn', href: 'https://linkedin.com' }
              ].map((social, i) => (
                <a key={i} href={social.href} target="_blank" rel="noreferrer"
                  style={{
                    color: '#8892b0',
                    textDecoration: 'none',
                    fontSize: '1.5rem',
                    transition: 'transform 0.3s'
                  }}
                  onMouseEnter={e => e.target.style.transform = 'translateY(-3px)'}
                  onMouseLeave={e => e.target.style.transform = 'translateY(0)'}
                  title={social.label}>
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          <div className="col-lg-5 text-center mt-5 mt-lg-0 fade-in">
            <div style={{
              width: '320px',
              height: '320px',
              margin: '0 auto',
              borderRadius: '50%',
              background: 'linear-gradient(135deg, #6c63ff, #5a52d5)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '8rem',
              boxShadow: '0 20px 60px rgba(108, 99, 255, 0.3)',
              position: 'relative'
            }}>
              👨‍💻
              <div style={{
                position: 'absolute',
                inset: '-4px',
                borderRadius: '50%',
                border: '2px solid rgba(108,99,255,0.3)',
                animation: 'spin 20s linear infinite'
              }} />
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
      `}</style>
    </section>
  )
}

export default Hero
