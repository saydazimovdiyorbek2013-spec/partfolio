import React from 'react'

const skills = [
  { name: 'HTML', level: 90, color: '#e34f26' },
  { name: 'CSS', level: 85, color: '#1572b6' },
  { name: 'JavaScript', level: 80, color: '#f7df1e' },
  { name: 'React', level: 75, color: '#61dafb' },
  { name: 'Bootstrap', level: 85, color: '#7952b3' },
  { name: 'Git', level: 70, color: '#f05032' },
]

function Skills() {
  return (
    <section id="skills">
      <div className="container">
        <h2 className="section-title mb-5">Ko'nikmalar</h2>
        <div className="row g-4">
          <div className="col-lg-7">
            {skills.map((skill, i) => (
              <div key={i} className="mb-4">
                <div className="d-flex justify-content-between mb-2">
                  <span className="fw-500" style={{ color: '#e8e8e8' }}>{skill.name}</span>
                  <span style={{ color: '#8892b0', fontSize: '0.9rem' }}>{skill.level}%</span>
                </div>
                <div style={{
                  height: '8px',
                  backgroundColor: 'rgba(108, 99, 255, 0.1)',
                  borderRadius: '4px',
                  overflow: 'hidden'
                }}>
                  <div style={{
                    height: '100%',
                    width: `${skill.level}%`,
                    background: `linear-gradient(90deg, ${skill.color}, ${skill.color}aa)`,
                    borderRadius: '4px',
                    transition: 'width 1s ease'
                  }} />
                </div>
              </div>
            ))}
          </div>
          <div className="col-lg-5">
            <div className="card p-4 h-100 d-flex flex-column justify-content-center">
              <h5 className="fw-bold mb-3" style={{ color: '#e8e8e8' }}>Texnologiyalar</h5>
              <div className="d-flex flex-wrap gap-2">
                {['HTML5', 'CSS3', 'JavaScript', 'React.js', 'Bootstrap 5', 'Vite', 'Git', 'VS Code', 'Figma', 'npm'].map((tech, i) => (
                  <span key={i} style={{
                    padding: '6px 16px',
                    backgroundColor: 'rgba(108, 99, 255, 0.1)',
                    border: '1px solid rgba(108, 99, 255, 0.25)',
                    borderRadius: '20px',
                    fontSize: '0.85rem',
                    color: '#6c63ff',
                    fontWeight: 500
                  }}>
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Skills
