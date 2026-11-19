import React from 'react'

function Contact() {
  return (
    <section id="contact">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-8 text-center">
            <h2 className="section-title mb-4" style={{ display: 'block' }}>
              Aloqa
              <span style={{
                display: 'block',
                width: '60px',
                height: '4px',
                background: '#6c63ff',
                borderRadius: '2px',
                margin: '8px auto 0'
              }} />
            </h2>
            <p className="mb-5" style={{ color: '#8892b0', fontSize: '1.1rem' }}>
              Loyiha yoki hamkorlik bo'yicha bog'lanmoqchimisiz? Menga xabar yuboring!
            </p>

            <div className="row g-4 mb-5">
              {[
                { icon: '📧', title: 'Email', info: 'developer@email.com', href: 'mailto:developer@email.com' },
                { icon: '📱', title: 'Telefon', info: '+998 90 123 45 67', href: 'tel:+998901234567' },
                { icon: '📍', title: 'Manzil', info: "Toshkent, O'zbekiston", href: '#' }
              ].map((item, i) => (
                <div className="col-md-4" key={i}>
                  <a href={item.href} className="card p-4 text-center h-100 text-decoration-none">
                    <div style={{ fontSize: '2.5rem', marginBottom: '12px' }}>{item.icon}</div>
                    <h6 className="fw-bold mb-1" style={{ color: '#e8e8e8' }}>{item.title}</h6>
                    <small style={{ color: '#8892b0' }}>{item.info}</small>
                  </a>
                </div>
              ))}
            </div>

            <div className="card p-4 p-md-5 text-start">
              <form onSubmit={e => { e.preventDefault(); alert("Xabaringiz yuborildi!") }}>
                <div className="row g-3">
                  <div className="col-md-6">
                    <label className="form-label small" style={{ color: '#8892b0' }}>Ismingiz</label>
                    <input type="text" className="form-control" required
                      style={{
                        backgroundColor: 'rgba(108, 99, 255, 0.05)',
                        border: '1px solid rgba(108, 99, 255, 0.2)',
                        borderRadius: '8px',
                        color: '#e8e8e8',
                        padding: '12px'
                      }} />
                  </div>
                  <div className="col-md-6">
                    <label className="form-label small" style={{ color: '#8892b0' }}>Email</label>
                    <input type="email" className="form-control" required
                      style={{
                        backgroundColor: 'rgba(108, 99, 255, 0.05)',
                        border: '1px solid rgba(108, 99, 255, 0.2)',
                        borderRadius: '8px',
                        color: '#e8e8e8',
                        padding: '12px'
                      }} />
                  </div>
                  <div className="col-12">
                    <label className="form-label small" style={{ color: '#8892b0' }}>Xabar</label>
                    <textarea className="form-control" rows="4" required
                      style={{
                        backgroundColor: 'rgba(108, 99, 255, 0.05)',
                        border: '1px solid rgba(108, 99, 255, 0.2)',
                        borderRadius: '8px',
                        color: '#e8e8e8',
                        padding: '12px',
                        resize: 'none'
                      }} />
                  </div>
                  <div className="col-12">
                    <button type="submit" className="btn btn-primary btn-lg w-100">
                      Yuborish ✉️
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
