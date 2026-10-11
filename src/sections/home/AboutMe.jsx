import React from 'react';
import { Link } from 'react-router-dom';

const AboutMe = () => {
    return (
        <section id="about" className="about-avant-garde">
            <div className="mesh-orb orb-1"></div>
            <div className="mesh-orb orb-2"></div>
            <div className="blueprint-line line-v"></div>
            <div className="blueprint-line line-h"></div>

            <div className="avant-container">
                <div className="avant-layout">
                    <div className="avant-focal-point">
                        <div className="architect-frame">
                            <svg className="frame-svg" viewBox="0 0 100 100" preserveAspectRatio="none">
                                <path d="M10,0 L100,0 L90,100 L0,100 Z" fill="none" className="frame-path" />
                            </svg>
                            <img src="/abouthome.jpeg" alt="Houda Abahman" className="avant-img" />
                            <div className="signature-overlay" style={{ left: 'auto', right: '5%', bottom: '-20px' }}>Houda</div>
                        </div>
                    </div>

                    <div className="avant-content">
                        <div className="node-header">
                            <div className="zenith-meta" style={{ marginBottom: '20px', justifyContent: 'flex-start' }}>
                                <span className="meta-line"></span>
                                <span className="meta-text">من أنا</span>
                            </div>

                            <h2 className="avant-title">
                                هدى
                                <span className="title-accent">أبــــــحمان</span>
                            </h2>
                        </div>

                        <div className="node-manifesto">
                            <p>أنا هدى، لايف كوتش وأخصائية متقدمة في التنفس، أرافقك لاكتشاف قوتك الداخلية وتحقيق توازن حقيقي في حياتك.
                                أساعدك على التحرر من التوتر والضغوط، وبناء ثقة راسخة بنفسك، من خلال برامج عملية تُحدث تغييراً ملموساً في حياتك.</p>

                            <div className="stat-grid-v3">
                                <div className="stat-item-v3">
                                    <span className="sv3-num">+2000</span>
                                    <span className="sv3-label">مستفيد(ة)</span>
                                </div>
                                <div className="stat-divider-v3"></div>
                                <div className="stat-item-v3">
                                    <span className="sv3-num">ICF</span>
                                    <span className="sv3-label">اعتماد دولي</span>
                                </div>
                                <div className="stat-divider-v3"></div>
                                <div className="stat-item-v3">
                                    <span className="sv3-num">+5</span>
                                    <span className="sv3-label">سنوات تميز</span>
                                </div>
                            </div>
                        </div>

                        <div className="node-quote">
                            <span className="quote-mark">“</span>
                            <blockquote> التغيير الحقيقي يبدأ عندما تقرر أن تستثمر في نفسك.
                            </blockquote>
                        </div>

                        <div className="node-action">
                            <Link to="/about" className="btn-experimental">
                                اكتشف القصة كاملة
                                <div className="btn-line"></div>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutMe;
