import { useEffect, useRef, useState } from 'react';
import Globe from 'react-globe.gl';
import { motion } from 'framer-motion';
import './Globe.css';

const GlobeComponent = () => {
    const globeEl = useRef();
    const [globeReady, setGlobeReady] = useState(false);

    const locations = [
        {
            lat: 25.5941,
            lng: 85.1376,
            size: 0.8,
            color: '#6366f1',
            label: 'Home',
            city: 'Patna, Bihar'
        },
        {
            lat: 25.2138,
            lng: 75.8648,
            size: 0.8,
            color: '#8b5cf6',
            label: 'Currently',
            city: 'Kota, Rajasthan'
        }
    ];

    const arcsData = [{
        startLat: 25.5941,
        startLng: 85.1376,
        endLat: 25.2138,
        endLng: 75.8648,
        color: ['#6366f1', '#8b5cf6']
    }];

    useEffect(() => {
        if (globeEl.current) {
            // Set initial camera position
            globeEl.current.pointOfView({
                lat: 25.4,
                lng: 80.5,
                altitude: 2.5
            }, 0);

            // Rotate globe
            const globe = globeEl.current;
            let angle = 0;
            const rotationSpeed = 0.08;

            const animate = () => {
                angle += rotationSpeed;
                globe.pointOfView({
                    lat: 25.4,
                    lng: 80.5 + angle,
                    altitude: 2.5
                });
                requestAnimationFrame(animate);
            };

            setTimeout(() => {
                setGlobeReady(true);
                animate();
            }, 100);
        }
    }, []);

    return (
        <section className="globe-section" id="about">
            <div className="container">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                >
                    <h2 className="section-title">Journey Across India</h2>
                    <p className="globe-description">
                        Walking With This Journey
                    </p>
                </motion.div>

                <motion.div
                    className="globe-container"
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1, delay: 0.2 }}
                    viewport={{ once: true }}
                >
                    <Globe
                        ref={globeEl}
                        globeImageUrl="//unpkg.com/three-globe/example/img/earth-night.jpg"
                        bumpImageUrl="//unpkg.com/three-globe/example/img/earth-topology.png"
                        backgroundImageUrl="//unpkg.com/three-globe/example/img/night-sky.png"

                        pointsData={locations}
                        pointAltitude={0.05}
                        pointRadius="size"
                        pointColor="color"
                        pointLabel={d => `
              <div style="
                background: rgba(17, 17, 24, 0.95);
                padding: 12px 16px;
                border-radius: 8px;
                border: 1px solid rgba(99, 102, 241, 0.3);
                color: white;
                font-family: Inter, sans-serif;
                backdrop-filter: blur(10px);
              ">
                <div style="font-size: 14px; font-weight: 600; color: ${d.color}; margin-bottom: 4px;">
                  ${d.label}
                </div>
                <div style="font-size: 12px; color: #a1a1aa;">
                  ${d.city}
                </div>
              </div>
            `}

                        arcsData={arcsData}
                        arcColor="color"
                        arcDashLength={0.4}
                        arcDashGap={0.2}
                        arcDashAnimateTime={3000}
                        arcStroke={0.5}

                        atmosphereColor="#6366f1"
                        atmosphereAltitude={0.15}

                        width={window.innerWidth > 768 ? 800 : window.innerWidth - 40}
                        height={window.innerWidth > 768 ? 800 : 500}
                    />

                    <div className="location-cards">
                        {locations.map((location, index) => (
                            <motion.div
                                key={index}
                                className="location-card"
                                initial={{ opacity: 0, x: index === 0 ? -50 : 50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.6, delay: 0.4 + index * 0.2 }}
                                viewport={{ once: true }}
                                whileHover={{ scale: 1.05 }}
                            >
                                <div className="location-icon" style={{ background: location.color }}>
                                    📍
                                </div>
                                <div className="location-info">
                                    <h3>{location.label}</h3>
                                    <p>{location.city}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default GlobeComponent;
