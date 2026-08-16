import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const AboutHero = () => {
    const { scrollY } = useScroll();
    const opacity = useTransform(scrollY, [0, 400], [1, 0]);

    return (
        <section className="celestial-hero">
            <div className="sunburst-glow"></div>

            {/* Clarity Elements: Light Prisms & Shimmer (Kept local for section context) */}
            <div className="floating-shimmer" style={{ top: '30%', left: '20%', animationDelay: '0s' }}></div>
            <div className="floating-shimmer" style={{ top: '50%', right: '25%', animationDelay: '2s' }}></div>
            <div className="floating-shimmer" style={{ bottom: '20%', left: '40%', animationDelay: '4s' }}></div>

            {/* Background is now global in AboutPage.jsx — Container only for content */}
            <div className="celestial-hero-container">
                <div className="celestial-grid">
                    <motion.div
                        className="celestial-content"
                    >
                        <h1 className="celestial-title">
                            <motion.span
                                initial={{ y: 50, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                transition={{ duration: 1, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
                                style={{ display: 'block', fontSize: '0.9em' }}
                            >
                                من أنا؟
                            </motion.span>
                            <motion.span
                                initial={{ y: 50, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                transition={{ duration: 1, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
                                style={{ display: 'block', color: 'var(--gold)' }}
                            >
                                هدى أبحمان
                            </motion.span>
                        </h1>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1, delay: 0.8 }}
                            style={{
                                fontSize: '1.4rem',
                                color: 'rgba(255,255,255,0.9)',
                                marginBottom: '25px',
                                maxWidth: '600px',
                                lineHeight: '1.6'
                            }}
                        >
                            لايف كوتش
                            أرافقك لتجاوز التوتر واستعادة سلامك الداخلي،
                            من خلال تقنيات عميقة وبسيطة تساعدك على التغيير الحقيقي.
                        </motion.div>

                        <motion.p
                            className="celestial-subtitle"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 1, delay: 1.1 }}
                            style={{ fontSize: '1.1rem', color: 'var(--gold)', letterSpacing: '1px' }}
                        >
                            لأن التغيير الحقيقي يبدأ من الداخل
                        </motion.p>

                        <motion.div
                            className="hero-social-links"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 1.2, duration: 1 }}
                        >
                            <a href="https://www.tiktok.com/@houdaharmony8" className="social-icon-box" aria-label="TikTok" target="_blank" rel="noopener noreferrer" title="tiktok">
                                <svg viewBox="0 0 24 24"><path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.17-2.86-.6-4.12-1.31a6.34 6.34 0 0 1-2.22-2.02v9.52c.03 2.19-.88 4.38-2.58 5.79-1.74 1.48-4.22 2.01-6.42 1.44-2.26-.54-4.22-2.19-5.1-4.32a9.17 9.17 0 0 1-.36-6.84c.73-2.31 2.65-4.21 4.95-4.93 1.01-.32 2.08-.41 3.13-.27v4.03c-.5-.13-1.03-.13-1.54-.04-1.07.19-2.06.87-2.6 1.83-.56 1-.61 2.22-.16 3.25.43 1.03 1.41 1.84 2.5 2.1 1.1.28 2.34.12 3.32-.47.98-.6 1.57-1.68 1.61-2.81V.02z" /></svg>
                            </a>
                            <a href="https://www.instagram.com/houdaharmony" className="social-icon-box" aria-label="Instagram" target="_blank" rel="noopener noreferrer" title="instagram">
                                <svg viewBox="0 0 24 24"><path d="M7 2C4.243 2 2 4.243 2 7V17C2 19.757 4.243 22 7 22H17C19.757 22 22 19.757 22 17V7C22 4.243 19.757 2 17 2H7ZM12 7C14.761 7 17 9.239 17 12C17 14.761 14.761 17 12 17C9.239 17 7 14.761 7 12C7 9.239 9.239 7 12 7ZM12 9C10.343 9 9 10.343 9 12C9 13.657 10.343 15 12 15C13.657 15 15 13.657 15 12C15 10.343 13.657 9 12 9ZM18.5 6.5C18.5 7.052 18.052 7.5 17.5 7.5C16.948 7.5 16.5 7.052 16.5 6.5C16.5 5.948 16.948 5.5 17.5 5.5C18.052 5.5 18.5 5.948 18.5 6.5Z" /></svg>
                            </a>
                            <a href="https://wa.me/212643354739" className="social-icon-box" aria-label="WhatsApp" target="_blank" rel="noopener noreferrer" title="whatsapp">
                                <svg viewBox="0 0 24 24" fill="currentColor"><path d="M12.004 2c-5.518 0-9.998 4.48-9.998 9.997 0 2.006.592 3.874 1.614 5.434L2 22l4.71-1.537c1.517.979 3.316 1.534 5.294 1.534 5.518 0 9.998-4.48 9.998-9.997C22.002 6.48 17.522 2 12.004 2zm5.735 14.18c-.244.688-1.206 1.25-1.734 1.302-.472.047-.946.068-2.985-.758-2.607-1.056-4.288-3.714-4.419-3.889-.13-.175-1.053-1.401-1.053-2.671 0-1.27.656-1.892.888-2.138.232-.246.502-.307.67-.307.168 0 .335.002.48.009.15.008.353-.057.553.432.203.498.694 1.693.754 1.817.06.124.1.268.017.433-.083.165-.124.268-.248.412-.124.145-.26.323-.371.433-.124.124-.253.258-.108.506.145.247.643 1.062 1.38 1.717.949.846 1.747 1.109 1.995 1.233.248.124.392.103.537-.062.145-.165.62-.722.786-.969.166-.247.331-.206.553-.124.224.082 1.41.666 1.652.786.242.12.403.182.463.285.06.103.06.598-.184 1.286z"/></svg>
                            </a>
                            <a href="https://www.youtube.com/@Houdaharmony" className="social-icon-box" aria-label="YouTube" target="_blank" rel="noopener noreferrer" title="youtube">
                                <svg viewBox="0 0 24 24"><path d="M19.615 3.184C18.203 2.8 12.006 2.8 12.006 2.8s-6.197 0-7.609.384c-1.57.431-2.803 1.664-3.234 3.234C.779 7.83 0.779 12 0.779 12s0 4.17.384 5.582c.431 1.57 1.664 2.803 3.234 3.234 1.412.384 7.609.384 7.609.384s6.197 0 7.609-.384c1.57-.431 2.803-1.664 3.234-3.234.384-1.412.384-5.582.384-5.582s0-4.17-.384-5.582c-.431-1.57-1.664-2.803-3.234-3.234zM9.59 15.54V8.45l6.18 3.55-6.18 3.54z" /></svg>
                            </a>
                            <a href="https://t.me/+lzpA0vhnaqplZGQ0" className="social-icon-box" aria-label="Telegram" target="_blank" rel="noopener noreferrer" title="telegram">
                                <svg viewBox="0 0 24 24"><path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm4.845 7.22l-1.63 7.67c-.12.54-.44.67-.89.42l-2.48-1.83-1.2 1.15c-.13.13-.24.24-.49.24l.18-2.52 4.59-4.14c.2-.18-.04-.28-.3-.1l-5.67 3.57-2.44-.76c-.53-.17-.54-.53.11-.79l9.53-3.68c.44-.16.83.1.7.67z" /></svg>
                            </a>
                        </motion.div>
                    </motion.div>

                    <motion.div
                        className="celestial-image-wrapper"
                        style={{ y: useTransform(scrollY, [0, 800], [0, -100]) }}
                        initial={{ opacity: 0, scale: 0.9, rotate: -2 }}
                        animate={{ opacity: 1, scale: 1, rotate: 0 }}
                        transition={{ duration: 1.8, ease: [0.16, 1, 0.3, 1] }}
                    >
                        <div className="celestial-portrait-container">
                            {/* Halo/Aura effect */}
                            <div className="hero-aura"></div>

                            <img src="/abouthome.jpeg" alt="Houda" className="celestial-img" />
                            <div className="glow-border"></div>
                            <div className="inner-shadow"></div>
                        </div>
                    </motion.div>
                </div>
            </div>

            <motion.div
                className="celestial-scroll"
                style={{ opacity }}
            >
                <div className="mouse-icon">
                    <div className="wheel"></div>
                </div>
            </motion.div>
        </section>
    );
};

export default AboutHero;
