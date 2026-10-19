import React from 'react';
import { motion } from 'framer-motion';

const ProgramCurriculum = ({ data }) => {
    if (!data || !data.items || data.items.length === 0) return null;

    return (
        <section className="about-avant-garde">
            <div className="mesh-orb orb-1"></div>
            <div className="mesh-orb orb-2"></div>

            <div className="avant-container">
                <h2 className="l-title" style={{ color: 'white', marginBottom: '80px', textAlign: 'center' }}>
                    {data.title.split(' ')[0]} <span className="l-serif" style={{ color: 'var(--gold)' }}>{data.title.split(' ').slice(1).join(' ')}</span>
                </h2>
                <div className="curriculum-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '40px' }}>
                    {data.items.map((item, index) => (
                        <div
                            key={index}
                            className="curriculum-card"
                            style={{
                                background: 'rgba(255,255,255,0.03)',
                                padding: '50px',
                                border: '1px solid rgba(220,160,17,0.1)',
                                borderRadius: '4px',
                                display: 'flex',
                                flexDirection: 'column'
                            }}
                        >
                            <div className="li-label" style={{ color: 'var(--gold)' }}>المرحلة {item.phase}</div>
                            <h3 className="l-title" style={{ fontSize: '1.5rem', color: 'white', margin: '20px 0' }}>{item.title}</h3>

                            {item.points ? (
                                <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '12px' }}>
                                    {item.points.map((point, pIndex) => (
                                        <li key={pIndex} style={{
                                            color: 'rgba(255,255,255,0.7)',
                                            fontSize: '0.95rem',
                                            lineHeight: '1.5',
                                            display: 'flex',
                                            alignItems: 'flex-start',
                                            gap: '10px'
                                        }}>
                                            <span style={{ color: 'var(--gold)', marginTop: '4px' }}>◆</span>
                                            {point}
                                        </li>
                                    ))}
                                </ul>
                            ) : (
                                <p className="l-desc" style={{ color: 'rgba(255,255,255,0.6)', margin: 0 }}>{item.desc}</p>
                            )}
                        </div>
                    ))}
                </div>

                <div style={{ marginTop: '80px', display: 'flex', justifyContent: 'center' }}>
                    <a href="#payment-section" className="btn-register">
                        سجلي الآن: طرق الدفع <span>←</span>
                    </a>
                </div>
            </div>
        </section>
    );
};

export default ProgramCurriculum;
