import React from 'react'

const projects = [
  {
    title: 'Landing Page',
    desc: 'Bootstrap yordamida yaratilgan zamonaviy landing sahifa.',
    tags: ['HTML', 'CSS', 'Bootstrap'],
    link: '#'
  },
  {
    title: 'React Todo App',
    desc: "React bilan yaratilgan vazifalar ro'yxati ilovasi.",
    tags: ['React', 'JavaScript', 'CSS'],
    link: '#'
  },
  {
    title: 'Portfolio Website',
    desc: 'Shaxsiy portfolio veb-sayt React va Bootstrap bilan.',
    tags: ['React', 'Bootstrap', 'Vite'],
    link: '#'
  }
]

function Projects() {
  return (
    <section id="projects" style={{ backgroundColor: '#16213e' }}>
      <div className="container">
        <h2 className="section-title mb-5">Loyihalar</h2>
        <div className="row g-4">
          {projects.map((project, i) => (
            <div className="col-lg-4 col-md-6" key={i}>
              <div className="card h-100 overflow-hidden">
                <div style={{
                  height: '180px',
                  background: `linear-gradient(135deg, rgba(108,99,255,${0.1 + i * 0.1}), #1a1a2e)`,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '3rem'
                }}>
                  {['🌐', '✅', '💼'][i]}
                </div>
                <div className="card-body p-4">
                  <h5 className="fw-bold mb-2" style={{ color: '#e8e8e8' }}>{project.title}</h5>
                  <p style={{ color: '#8892b0', fontSize: '0.9rem', lineHeight: 1.6 }}>{project.desc}</p>
                  <div className="d-flex flex-wrap gap-2 mb-3">
                    {project.tags.map((tag, j) => (
                      <span key={j} style={{
                        padding: '3px 10px',
                        backgroundColor: 'rgba(108, 99, 255, 0.1)',
                        borderRadius: '4px',
                        fontSize: '0.78rem',
                        color: '#6c63ff'
                      }}>
                        {tag}
                      </span>
                    ))}
                  </div>
                  <a href={project.link} className="btn btn-sm btn-outline-primary">
                    Ko'rish →
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
