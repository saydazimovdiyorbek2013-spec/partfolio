import React from 'react'

function Footer() {
  return (
    <footer style={{
      backgroundColor: '#16213e',
      borderTop: '1px solid rgba(108, 99, 255, 0.15)',
      padding: '30px 0'
    }}>
      <div className="container text-center">
        <p className="mb-2" style={{ color: '#6c63ff', fontWeight: 600, fontSize: '1.1rem' }}>
          &lt;Dev /&gt;
        </p>
        <p className="mb-0" style={{ color: '#8892b0', fontSize: '0.85rem' }}>
          © {new Date().getFullYear()} Barcha huquqlar himoyalangan. React & Bootstrap bilan yaratilgan.
        </p>
      </div>
    </footer>
  )
}

export default Footer
