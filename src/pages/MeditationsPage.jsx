import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Clock, Play, Headphones } from 'lucide-react';
import meditationsData from '../data/meditations.json';

const MeditationsPage = () => {
    // Framer motion variants
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1
            }
        }
    };

    const cardVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] }
        }
    };

    return (
        <motion.main
            className="meditations-page-light"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            style={{ direction: 'rtl', textAlign: 'right', background: 'var(--bg-light)', minHeight: '100vh', position: 'relative' }}
        >
            {/* ZEN HARMONY BACKGROUND DECORATIONS */}
            <div className="zen-bg-container">
                {/* Aurora Harmony Mists (Large, soft blurred glows - made more visible) */}
                <div className="aurora-mist mist-gold"></div>
                <div className="aurora-mist mist-purple"></div>
                <div className="aurora-mist mist-teal"></div>

                {/* Zen Breath Waves (Abstract single-line wave vectors - made more visible) */}
                <svg className="zen-wave-line wave-top" viewBox="0 0 1440 200" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path 
                        d="M-100 100 C 300 250, 700 -50, 1100 120 C 1300 190, 1500 120, 1600 100" 
                        stroke="rgba(220, 160, 17, 0.22)" 
                        strokeWidth="2.5" 
                        strokeLinecap="round" 
                    />
                </svg>
                <svg className="zen-wave-line wave-bottom" viewBox="0 0 1440 200" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path 
                        d="M-50 50 C 350 -50, 750 200, 1150 80 C 1350 20, 1550 80, 1650 100" 
                        stroke="rgba(108, 62, 145, 0.18)" 
                        strokeWidth="2.5" 
                        strokeLinecap="round" 
                    />
                </svg>
            </div>

            <div className="meditations-content-wrapper">
                {/* Header */}
                <header className="meditations-header">
                    <motion.div
                        initial={{ opacity: 0, y: -15 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="header-badge"
                    >
                        <Headphones size={18} className="badge-icon" />
                        <span>مساحة الهدوء والسكينة</span>
                    </motion.div>
                    <motion.h1
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.15 }}
                        className="meditations-title"
                    >
                        تأملات <span className="title-serif">خاصة</span>
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="meditations-desc"
                    >
                        رحلة من التأملات الموجهة لتهدئة العقل، تفريغ المشاعر المتراكمة، وإعادة الاتصال بذاتك الحقيقية.
                    </motion.p>
                </header>

                {/* Cards Grid */}
                <motion.div
                    className="meditations-grid"
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                >
                    {meditationsData.map((meditation) => (
                        <motion.div
                            key={meditation.id}
                            variants={cardVariants}
                            className="meditation-card-wrap"
                        >
                            <Link to={`/meditations/${meditation.slug}`} className="meditation-card">
                                <div className="card-image-container">
                                    <img
                                        src={meditation.image}
                                        alt={meditation.title}
                                        className="card-media-img"
                                        loading="lazy"
                                    />
                                    <div className="card-image-overlay">
                                        <div className="play-button-glow">
                                            <Play size={24} fill="currentColor" />
                                        </div>
                                    </div>
                                    <div className="card-duration-badge">
                                        <Clock size={14} style={{ marginLeft: '4px' }} />
                                        <span>{meditation.duration}</span>
                                    </div>
                                </div>

                                <div className="card-body">
                                    <h3 className="card-meditation-title">{meditation.title}</h3>
                                    <p className="card-meditation-desc">{meditation.description}</p>
                                    <div className="card-explore-btn">
                                        <span>ابدأ التأمل الآن</span>
                                        <span className="btn-arrow">←</span>
                                    </div>
                                </div>
                            </Link>
                        </motion.div>
                    ))}
                </motion.div>
            </div>

            {/* Custom Styles */}
            <style>{`
                .meditations-page-light {
                    position: relative;
                    overflow: hidden;
                }

                /* Zen Background Styles */
                .zen-bg-container {
                    position: absolute;
                    inset: 0;
                    overflow: hidden;
                    pointer-events: none;
                    z-index: 1;
                }

                .aurora-mist {
                    position: absolute;
                    border-radius: 50%;
                    filter: blur(150px);
                    opacity: 1;
                    pointer-events: none;
                }

                .mist-gold {
                    width: 900px;
                    height: 900px;
                    background: radial-gradient(circle, rgba(220, 160, 17, 0.15) 0%, transparent 70%);
                    top: -150px;
                    right: -100px;
                }

                .mist-purple {
                    width: 1100px;
                    height: 1100px;
                    background: radial-gradient(circle, rgba(108, 62, 145, 0.18) 0%, transparent 70%);
                    top: 25%;
                    left: -200px;
                }

                .mist-teal {
                    width: 900px;
                    height: 900px;
                    background: radial-gradient(circle, rgba(56, 189, 248, 0.14) 0%, transparent 70%);
                    bottom: -150px;
                    right: -100px;
                }

                .zen-wave-line {
                    position: absolute;
                    width: 120%;
                    left: -10%;
                    pointer-events: none;
                    opacity: 1;
                }

                .wave-top {
                    top: 15%;
                }

                .wave-bottom {
                    bottom: 10%;
                }

                .meditations-content-wrapper {
                    position: relative;
                    z-index: 5;
                    max-width: 1200px;
                    margin: 0 auto;
                    padding: 160px 24px 100px;
                }

                .meditations-header {
                    text-align: center;
                    margin-bottom: 70px;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                }

                .header-badge {
                    display: inline-flex;
                    align-items: center;
                    gap: 8px;
                    background: rgba(220, 160, 17, 0.08);
                    border: 1px solid rgba(220, 160, 17, 0.2);
                    padding: 8px 16px;
                    border-radius: 50px;
                    color: var(--gold-dark);
                    font-size: 0.9rem;
                    font-weight: 600;
                    margin-bottom: 24px;
                }

                .badge-icon {
                    color: var(--gold-dark);
                }

                .meditations-title {
                    font-size: 3.5rem;
                    font-weight: 800;
                    margin-bottom: 20px;
                    color: var(--purple-deep);
                    letter-spacing: -1px;
                }

                .title-serif {
                    font-family: var(--font-serif);
                    font-style: italic;
                    font-weight: 400;
                    color: var(--gold);
                }

                .meditations-desc {
                    font-size: 1.15rem;
                    color: rgba(45, 18, 68, 0.65);
                    max-width: 650px;
                    line-height: 1.7;
                }

                .meditations-grid {
                    display: grid;
                    grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
                    gap: 32px;
                    margin-top: 20px;
                }

                .meditation-card-wrap {
                    display: flex;
                }

                .meditation-card {
                    display: flex;
                    flex-direction: column;
                    border-radius: 20px;
                    overflow: hidden;
                    width: 100%;
                    background: #ffffff;
                    border: 1px solid rgba(45, 18, 68, 0.06);
                    box-shadow: 0 10px 30px rgba(45, 18, 68, 0.03);
                    transition: transform 0.4s cubic-bezier(0.16, 1, 0.3, 1), border-color 0.3s ease, box-shadow 0.4s ease;
                    text-decoration: none;
                }

                .meditation-card:hover {
                    transform: translateY(-8px);
                    border-color: rgba(220, 160, 17, 0.4);
                    box-shadow: 0 20px 40px rgba(45, 18, 68, 0.08), 0 0 20px rgba(220, 160, 17, 0.05);
                }

                .card-image-container {
                    position: relative;
                    width: 100%;
                    aspect-ratio: 16/9;
                    overflow: hidden;
                    background: #f0ebe4;
                }

                .card-media-img {
                    width: 100%;
                    height: 100%;
                    object-fit: cover;
                    transition: transform 0.6s cubic-bezier(0.16, 1, 0.3, 1);
                }

                .meditation-card:hover .card-media-img {
                    transform: scale(1.08);
                }

                .card-image-overlay {
                    position: absolute;
                    inset: 0;
                    background: rgba(45, 18, 68, 0.25);
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    opacity: 0;
                    transition: opacity 0.3s ease;
                }

                .meditation-card:hover .card-image-overlay {
                    opacity: 1;
                }

                .play-button-glow {
                    width: 60px;
                    height: 60px;
                    border-radius: 50%;
                    background: var(--gold);
                    color: #ffffff;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    box-shadow: 0 0 20px rgba(220, 160, 17, 0.4);
                    transform: scale(0.8);
                    transition: transform 0.3s cubic-bezier(0.16, 1, 0.3, 1);
                    padding-right: 2px;
                }

                .meditation-card:hover .play-button-glow {
                    transform: scale(1);
                }

                .card-duration-badge {
                    position: absolute;
                    bottom: 12px;
                    right: 12px;
                    background: rgba(255, 255, 255, 0.9);
                    border: 1px solid rgba(45, 18, 68, 0.1);
                    padding: 6px 12px;
                    border-radius: 8px;
                    font-size: 0.8rem;
                    font-weight: 700;
                    color: var(--purple-deep);
                    display: flex;
                    align-items: center;
                    backdrop-filter: blur(5px);
                }

                .card-body {
                    padding: 24px;
                    display: flex;
                    flex-direction: column;
                    flex-grow: 1;
                }

                .card-meditation-title {
                    font-size: 1.35rem;
                    font-weight: 700;
                    margin-bottom: 12px;
                    color: var(--purple-deep);
                    line-height: 1.4;
                    transition: color 0.3s ease;
                }

                .meditation-card:hover .card-meditation-title {
                    color: var(--gold-dark);
                }

                .card-meditation-desc {
                    font-size: 0.95rem;
                    color: rgba(45, 18, 68, 0.6);
                    line-height: 1.6;
                    margin-bottom: 20px;
                    display: -webkit-box;
                    -webkit-line-clamp: 3;
                    -webkit-box-orient: vertical;
                    overflow: hidden;
                    text-overflow: ellipsis;
                    height: 4.8em; /* 3 lines * 1.6 line-height */
                }

                .card-explore-btn {
                    margin-top: auto;
                    display: inline-flex;
                    align-items: center;
                    gap: 8px;
                    color: var(--gold-dark);
                    font-weight: 700;
                    font-size: 0.95rem;
                    transition: gap 0.3s ease;
                }

                .btn-arrow {
                    font-size: 1.2rem;
                    transition: transform 0.3s ease;
                    display: inline-block;
                }

                .meditation-card:hover .btn-arrow {
                    transform: translateX(-6px);
                }

                @media (max-width: 768px) {
                    .meditations-content-wrapper {
                        padding: 120px 16px 60px;
                    }

                    .meditations-title {
                        font-size: 2.5rem;
                    }

                    .meditations-grid {
                        grid-template-columns: 1fr;
                        gap: 24px;
                    }
                }
            `}</style>
        </motion.main>
    );
};

export default MeditationsPage;
