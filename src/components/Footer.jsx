import { motion } from 'framer-motion';
import { FaEnvelope, FaPhone, FaLinkedin, FaGithub, FaCode, FaHeart } from 'react-icons/fa';
import { SiLeetcode } from 'react-icons/si';
import './Footer.css';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    const socialLinks = [
        { icon: FaLinkedin, href: 'https://www.linkedin.com/in/anujrajmish', label: 'LinkedIn' },
        { icon: FaGithub, href: 'https://github.com/anujrajincludemyself', label: 'GitHub' },
        { icon: SiLeetcode, href: 'https://leetcode.com/u/anujsolveproblem24242/', label: 'LeetCode' },
        { icon: FaCode, href: 'https://anujrajincludemyself.github.io/', label: 'Portfolio' }
    ];

    return (
        <footer className="footer-section" id="contact">
            <div className="container">
                <motion.div
                    className="footer-content"
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                >
                    <div className="footer-main">
                        <div className="footer-brand">
                            <h2 className="brand-name gradient-text">Anuj Raj</h2>
                            <p className="brand-tagline">Full Stack Developer & Problem Solver</p>
                        </div>

                        <div className="footer-cta">
                            <h3>Let's Build Something Amazing Together</h3>
                            <p>Open for freelance projects, collaborations, and full-time opportunities</p>

                            <div className="contact-buttons">
                                <a
                                    href="mailto:anujraj24go@gmail.com"
                                    className="btn btn-primary"
                                >
                                    <FaEnvelope /> Get in Touch
                                </a>
                                <a
                                    href="https://buymeacoffee.com/anujraj24gb"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="btn btn-outline coffee-btn"
                                >
                                    ☕ Buy Me a Coffee
                                </a>
                            </div>
                        </div>
                    </div>

                    <div className="footer-divider"></div>

                    <div className="footer-bottom">
                        <div className="footer-social">
                            {socialLinks.map((social, index) => (
                                <motion.a
                                    key={index}
                                    href={social.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="footer-social-link"
                                    whileHover={{ scale: 1.1, y: -3 }}
                                    whileTap={{ scale: 0.95 }}
                                >
                                    <social.icon />
                                </motion.a>
                            ))}
                        </div>

                        <div className="footer-info">
                            <p>
                                <FaEnvelope /> anujraj24go@gmail.com
                            </p>
                        </div>

                        <div className="footer-copyright">
                            <p>
                                © {currentYear} Anuj Raj. Made with <FaHeart className="heart-icon" /> and lots of ☕
                            </p>
                        </div>
                    </div>
                </motion.div>
            </div>
        </footer>
    );
};

export default Footer;
