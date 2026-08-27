import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Clock, Headphones, ShieldAlert, Sparkles } from 'lucide-react';
import meditationsData from '../data/meditations.json';

const MeditationDetailsPage = () => {
    const { slug } = useParams();

    // Find the specific meditation by slug
    const meditation = meditationsData.find((m) => m.slug === slug);

    // Scroll to top on page load
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [slug]);

    if (!meditation) {
        return (
            <div className="meditations-detail-light error-page-wrap">
                <div className="error-card">
                    <ShieldAlert size={48} className="error-icon" />
                    <h2>عذراً، لم يتم العثور على التأمل</h2>
                    <p>التأمل الذي تبحث عنه غير موجود أو قد تم نقله.</p>
                    <Link to="/meditations" className="back-btn-error">
                        <ArrowRight size={18} />
                        <span>العودة إلى قائمة التأملات</span>
                    </Link>
                </div>
            </div>
        );
    }

    // Helper function to extract and convert YouTube/Vimeo links to embed format
    const getEmbedUrl = (url) => {
        if (!url) return '';

        // If the URL is actually an iframe tag, extract the src URL
        if (url.includes('<iframe')) {
            const srcMatch = url.match(/src=["']([^"']+)["']/i);
            if (srcMatch && srcMatch[1]) {
                url = srcMatch[1];
            }
        }

        // YouTube matches
        const ytRegex = /(?:youtube\.com\/(?:[^\/]+\/.+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtu\.be\/)([^"&?\/\s]{11})/i;
        const ytMatch = url.match(ytRegex);
        if (ytMatch && ytMatch[1]) {
            return `https://www.youtube.com/embed/${ytMatch[1]}?autoplay=1&modestbranding=1&rel=0`;
        }

        // Vimeo matches
        const vimeoRegex = /vimeo\.com\/(?:video\/)?([0-9]+)/i;
        const vimeoMatch = url.match(vimeoRegex);
        if (vimeoMatch && vimeoMatch[1]) {
            return `https://player.vimeo.com/video/${vimeoMatch[1]}?autoplay=1&byline=0&portrait=0&title=0`;
        }

        return url;
    };

    const embedUrl = getEmbedUrl(meditation.videoUrl);

    return (
        <motion.main
            className="meditations-detail-light"
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

            <div className="meditation-details-container">
                {/* Back button */}
                <motion.div
                    initial={{ opacity: 0, x: 15 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6 }}
                    className="back-btn-wrap"
                >
                    <Link to="/meditations" className="back-link">
                        <ArrowRight size={18} />
                        <span>العودة إلى التأملات</span>
                    </Link>
                </motion.div>

                {/* Header Information */}
                <header className="details-header">
                    <motion.h1
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.1 }}
                        className="details-title"
                    >
                        {meditation.title}
                    </motion.h1>

                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="details-meta"
                    >
                        <div className="meta-item">
                            <Clock size={16} />
                            <span>المدة: {meditation.duration}</span>
                        </div>
                        <div className="meta-separator">|</div>
                        <div className="meta-item">
                            <Headphones size={16} />
                            <span>يُفضل الاستماع بسماعات الأذن</span>
                        </div>
                    </motion.div>
                </header>

                {/* Video Player */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.3 }}
                    className="video-player-section"
                >
                    <div className="video-player-wrapper">
                        {embedUrl ? (
                            <iframe
                                src={embedUrl}
                                title={meditation.title}
                                className="video-iframe"
                                frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                allowFullScreen
                            ></iframe>
                        ) : (
                            <div className="no-video-placeholder">
                                <ShieldAlert size={48} />
                                <p>رابط الفيديو غير صالح أو غير متوفر.</p>
                            </div>
                        )}
                    </div>
                </motion.div>

                {/* Description and Instructions Grid */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="details-bottom-grid"
                >
                    {/* Description Card */}
                    <div className="details-card-desc">
                        <div className="card-header">
                            <Sparkles size={20} className="card-header-icon" />
                            <h3>عن التأمل</h3>
                        </div>
                        <p className="card-content-text">
                            {meditation.description}
                        </p>
                    </div>

                    {/* Instructions Card */}
                    <div className="details-card-instructions">
                        <div className="card-header">
                            <Headphones size={20} className="card-header-icon" />
                            <h3>إرشادات للاستماع</h3>
                        </div>
                        <ul className="instructions-list">
                            <li>
                                <span className="list-number">١</span>
                                <span>اختر مكاناً هادئاً ومريحاً ومظلماً بشكل مريح لتجنب المقاطعات.</span>
                            </li>
                            <li>
                                <span className="list-number">٢</span>
                                <span>استخدم سماعات الأذن عالية الجودة لتجربة صوتية مجسمة وعميقة.</span>
                            </li>
                            <li>
                                <span className="list-number">٣</span>
                                <span>اجلس بوضعية مريحة مع الحفاظ على استقامة العمود الفقري.</span>
                            </li>
                            <li>
                                <span className="list-number">٤</span>
                                <span>تنفس بعمق ووعي، واسمح لجسدك بالاسترخاء مع الصوت الموجه.</span>
                            </li>
                        </ul>
                    </div>
                </motion.div>
            </div>

            <style>{`
                .meditations-detail-light {
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

                .meditation-details-container {
                    position: relative;
                    z-index: 5;
                    max-width: 1000px;
                    margin: 0 auto;
                    padding: 140px 24px 100px;
                }

                .back-btn-wrap {
                    margin-bottom: 30px;
                }

                .back-link {
                    display: inline-flex;
                    align-items: center;
                    gap: 10px;
                    color: rgba(45, 18, 68, 0.7);
                    font-size: 0.95rem;
                    font-weight: 600;
                    text-decoration: none;
                    transition: color 0.3s ease, transform 0.3s ease;
                }

                .back-link:hover {
                    color: var(--gold-dark);
                    transform: translateX(-4px);
                }

                .details-header {
                    margin-bottom: 40px;
                    text-align: right;
                }

                .details-title {
                    font-size: 2.8rem;
                    font-weight: 800;
                    color: var(--purple-deep);
                    margin-bottom: 16px;
                    line-height: 1.3;
                }

                .details-meta {
                    display: flex;
                    align-items: center;
                    gap: 16px;
                    color: var(--gold-dark);
                    font-size: 0.95rem;
                    font-weight: 600;
                }

                .meta-item {
                    display: flex;
                    align-items: center;
                    gap: 8px;
                }

                .meta-separator {
                    color: rgba(45, 18, 68, 0.2);
                }

                .video-player-section {
                    margin-bottom: 50px;
                }

                .video-player-wrapper {
                    position: relative;
                    width: 100%;
                    aspect-ratio: 16/9;
                    border-radius: 24px;
                    overflow: hidden;
                    box-shadow: 0 20px 50px rgba(45, 18, 68, 0.08);
                    border: 1px solid rgba(45, 18, 68, 0.08);
                    background: #f0ebe4;
                }

                .video-iframe {
                    position: absolute;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 100%;
                    border: 0;
                }

                .no-video-placeholder {
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    justify-content: center;
                    height: 100%;
                    color: rgba(45, 18, 68, 0.4);
                    gap: 16px;
                }

                .details-bottom-grid {
                    display: grid;
                    grid-template-columns: 1fr 1.2fr;
                    gap: 30px;
                }

                .details-card-desc, .details-card-instructions {
                    padding: 30px;
                    border-radius: 20px;
                    background: #ffffff;
                    border: 1px solid rgba(45, 18, 68, 0.06);
                    box-shadow: 0 10px 30px rgba(45, 18, 68, 0.03);
                }

                .card-header {
                    display: flex;
                    align-items: center;
                    gap: 10px;
                    margin-bottom: 16px;
                    border-bottom: 1px solid rgba(45, 18, 68, 0.08);
                    padding-bottom: 12px;
                }

                .card-header-icon {
                    color: var(--gold-dark);
                }

                .card-header h3 {
                    font-size: 1.25rem;
                    font-weight: 700;
                    color: var(--purple-deep);
                }

                .card-content-text {
                    font-size: 1.05rem;
                    color: rgba(45, 18, 68, 0.8);
                    line-height: 1.8;
                    white-space: pre-line;
                }

                .instructions-list {
                    display: flex;
                    flex-direction: column;
                    gap: 16px;
                }

                .instructions-list li {
                    display: flex;
                    align-items: flex-start;
                    gap: 14px;
                    font-size: 0.95rem;
                    color: rgba(45, 18, 68, 0.8);
                    line-height: 1.6;
                }

                .list-number {
                    background: rgba(220, 160, 17, 0.1);
                    color: var(--gold-dark);
                    font-weight: 700;
                    width: 24px;
                    height: 24px;
                    border-radius: 50%;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    flex-shrink: 0;
                    font-size: 0.85rem;
                }

                /* Error page styles */
                .error-page-wrap {
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    min-height: 100vh;
                    padding: 20px;
                    background: var(--bg-light);
                }

                .error-card {
                    max-width: 500px;
                    padding: 40px;
                    border-radius: 24px;
                    background: #ffffff;
                    border: 1px solid rgba(45, 18, 68, 0.08);
                    box-shadow: 0 15px 35px rgba(45, 18, 68, 0.05);
                    text-align: center;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    gap: 20px;
                }

                .error-icon {
                    color: #e05c5c;
                }

                .error-card h2 {
                    color: var(--purple-deep);
                    font-size: 1.6rem;
                    font-weight: 700;
                }

                .error-card p {
                    color: rgba(45, 18, 68, 0.6);
                    font-size: 1rem;
                    line-height: 1.6;
                }

                .back-btn-error {
                    display: inline-flex;
                    align-items: center;
                    gap: 8px;
                    background: var(--gold);
                    color: #ffffff;
                    padding: 12px 24px;
                    border-radius: 12px;
                    font-weight: 700;
                    text-decoration: none;
                    transition: transform 0.3s ease;
                }

                .back-btn-error:hover {
                    transform: scale(1.03);
                }

                @media (max-width: 900px) {
                    .details-bottom-grid {
                        grid-template-columns: 1fr;
                    }
                }

                @media (max-width: 768px) {
                    .meditation-details-container {
                        padding: 110px 16px 60px;
                    }

                    .details-title {
                        font-size: 2rem;
                    }

                    .details-meta {
                        flex-direction: column;
                        align-items: flex-start;
                        gap: 8px;
                    }

                    .meta-separator {
                        display: none;
                    }
                }
            `}</style>
        </motion.main>
    );
};

export default MeditationDetailsPage;
