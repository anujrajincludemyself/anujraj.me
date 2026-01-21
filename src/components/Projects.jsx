import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import './Projects.css';

const Projects = () => {
    const projects = [
        {
            title: 'GoFood — Online Food Delivery Platform',
            description: 'A full-stack food delivery e-commerce application built using the MERN stack.',
            tech: ['MongoDB', 'Express.js', 'React.js', 'Node.js', 'Redux Toolkit', 'JWT', 'Payment Gateway'],
            highlights: [
                'Implemented secure JWT-based authentication and protected user sessions',
                'Built cart, order management, and online payment flow with real-time order tracking'
            ],
            github: 'https://github.com/anujrajincludemyself/GoFood',
            gradient: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'
        },
        {
            title: 'NPCL — Civil Road Construction Company Website',
            description: 'Production-ready business website built and deployed for a civil road construction company.',
            tech: ['Next.js 14', 'TypeScript', 'Tailwind CSS'],
            highlights: [
                'Responsive, SEO-optimized UI using App Router and modular components'
            ],
            github: 'https://github.com/anujrajincludemyself/NPCL',
            live: 'https://ncplorg.com',
            gradient: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)'
        },
        {
            title: 'Khilao.com — Food Recipe Platform',
            description: 'Built a MERN-based platform for creating, managing, and discovering food recipes.',
            tech: ['MongoDB', 'Express.js', 'React.js', 'Node.js', 'JWT', 'Multer'],
            highlights: [
                'Implemented JWT-based authentication and role-based access control'
            ],
            github: 'https://github.com/anujrajincludemyself/-Khilao.com',
            gradient: 'linear-gradient(135deg, #fa709a 0%, #fee140 100%)'
        }
    ];

    return (
        <section className="projects-section section" id="projects">
            <div className="container">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                >
                    <h2 className="section-title">Featured Projects</h2>
                    <p className="section-subtitle">
                        Building solutions that make a difference
                    </p>
                </motion.div>

                <div className="projects-grid">
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            className="project-card card"
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: index * 0.2 }}
                            viewport={{ once: true }}
                            whileHover={{ y: -10 }}
                        >
                            <div className="project-header" style={{ background: project.gradient }}>
                                <div className="project-number">0{index + 1}</div>
                            </div>

                            <div className="project-content">
                                <h3 className="project-title">{project.title}</h3>
                                <p className="project-description">{project.description}</p>

                                <div className="project-tech">
                                    {project.tech.map((tech, i) => (
                                        <span key={i} className="tech-tag">{tech}</span>
                                    ))}
                                </div>

                                <ul className="project-highlights">
                                    {project.highlights.map((highlight, i) => (
                                        <li key={i}>{highlight}</li>
                                    ))}
                                </ul>

                                <div className="project-links">
                                    <a
                                        href={project.github}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="project-link"
                                    >
                                        <FaGithub /> GitHub
                                    </a>
                                    {project.live && (
                                        <a
                                            href={project.live}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="project-link"
                                        >
                                            <FaExternalLinkAlt /> Live Demo
                                        </a>
                                    )}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
