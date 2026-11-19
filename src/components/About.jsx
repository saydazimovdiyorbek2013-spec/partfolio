import React from 'react'

function About() {
  return (
    <section id="about" style={{ backgroundColor: '#16213e' }}>
      <div className="container">
        <h2 className="section-title mb-5">Men haqimda</h2>
        <div className="row align-items-center g-5">
          <div className="col-lg-6">
            <div className="card p-4" style={{ borderLeft: '4px solid #6c63ff !important' }}>
              <p style={{ color: '#8892b0', fontSize: '1.05rem', lineHeight: 1.8 }}>
                Men frontend dasturchi sifatida zamonaviy veb-texnologiyalar bilan ishlayman. 
                Foydalanuvchilarga qulay va chiroyli interfeyslar yaratish mening asosiy maqsadim.
              </p>
              <p style={{ color: '#8892b0', fontSize: '1.05rem', lineHeight: 1.8 }} className="mb-0">
                HTML, CSS, JavaScript asoslarini puxta o'zlashtirib, React va Bootstrap 
                frameworklaridan samarali foydalanaman. Har doim yangi texnologiyalarni o'rganishga intilib boraman.
              </p>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="row g-3">
              {[
                { icon: '🎯', title: 'Maqsad', desc: 'Professional frontend dasturchi' },
                { icon: '📍', title: 'Joylashuv', desc: "O'zbekiston" },
                { icon: '🎓', title: "Ta'lim", desc: 'Kompyuter fanlari' },
                { icon: '💻', title: 'Tajriba', desc: 'Frontend Development' }
              ].map((item, i) => (
                <div className="col-6" key={i}>
                  <div className="card p-3 text-center h-100">
                    <div style={{ fontSize: '2rem', marginBottom: '8px' }}>{item.icon}</div>
                    <h6 className="fw-bold mb-1" style={{ color: '#e8e8e8' }}>{item.title}</h6>
                    <small style={{ color: '#8892b0' }}>{item.desc}</small>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
