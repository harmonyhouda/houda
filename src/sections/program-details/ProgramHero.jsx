import React from 'react';
import { motion } from 'framer-motion';

const ProgramHero = ({ data, tickets }) => {
    return (
        <section className="hero-zenith" style={{ minHeight: '80vh', paddingTop: '160px' }}>
            <div className="liquid-container">
                <div className="liquid-orb orb-1"></div>
                <div className="liquid-orb orb-2"></div>
            </div>
            <div className="zenith-layout">
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                    className="zenith-content-container"
                >
                    <div className="zenith-meta">
                        <div className="meta-line"></div>
                        <span className="meta-text">{data.tag}</span>
                    </div>

                    <h1 className="zenith-title">
                        <span className="z-main">{data.title}</span>
                        <span className="z-sub">{data.tagline}</span>
                    </h1>
                    <p className="zenith-desc">
                        {data.description}
                    </p>

                    {/* Image for Mobile (placed here in the flow) */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
                        className="zenith-portrait-container mobile-hero-img"
                    >
                        <div className="l-frame">
                            <img src={data.image} alt={data.title} className="zenith-img" style={{ width: '100%', height: 'auto' }} />
                            <div className="portrait-glow"></div>
                            <div className="accent-bracket top-right"></div>
                            <div className="accent-bracket bottom-left"></div>
                        </div>
                    </motion.div>

                    <div className="l-info-bar" style={{ background: 'transparent', margin: '40px 0', display: 'flex', justifyContent: 'space-around', alignItems: 'center', gap: '24px', textAlign: 'center', width: '100%', maxWidth: '650px', marginLeft: 'auto', marginRight: 'auto' }}>
                        <div className="l-info-item" style={{ textAlign: 'center', flex: 1, minWidth: 'fit-content' }}>
                            <span className="li-label">المدة</span>
                            <span className="li-value" style={{ display: 'block', whiteSpace: 'nowrap' }}>
                                {data.stats.duration.includes('|') ? (
                                    <>
                                        <span style={{ display: 'block', fontWeight: 700 }}>
                                            {data.stats.duration.split('|')[0].trim()}
                                        </span>
                                        <span style={{ display: 'block', fontWeight: 400, fontSize: '0.85rem', opacity: 0.8, marginTop: '4px' }}>
                                            {data.stats.duration.split('|')[1].trim()}
                                        </span>
                                    </>
                                ) : data.stats.duration.includes('(') ? (
                                    <>{data.stats.duration.split('(')[0]} <br /> ({data.stats.duration.split('(')[1]}</>
                                ) : data.stats.duration}
                            </span>
                        </div>
                        <div className="l-info-divider"></div>
                        <div className="l-info-item" style={{ textAlign: 'center', flex: 1, minWidth: 'fit-content' }}>
                            <span className="li-label">الشكل</span>
                            <span className="li-value" style={{ display: 'block', whiteSpace: 'nowrap' }}>
                                {data.stats.format.includes('|') ? (
                                    <>
                                        <span style={{ display: 'block', fontWeight: 700 }}>
                                            {data.stats.format.split('|')[0].trim()}
                                        </span>
                                        <span style={{ display: 'block', fontWeight: 400, fontSize: '0.85rem', opacity: 0.8, marginTop: '4px' }}>
                                            {data.stats.format.split('|')[1].trim()}
                                        </span>
                                    </>
                                ) : data.stats.format.includes('(') ? (
                                    <>{data.stats.format.split('(')[0]} <br /> ({data.stats.format.split('(')[1]}</>
                                ) : data.stats.format}
                            </span>
                        </div>
                        <div className="l-info-divider"></div>
                        <div className="l-info-item" style={{ textAlign: 'center', flex: 1, minWidth: 'fit-content' }}>
                            <span className="li-label">التذاكر والاستثمار</span>
                            <span className="li-value" style={{ display: 'block', whiteSpace: 'nowrap' }}>
                                {tickets && tickets.length > 0 ? (
                                    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '4px' }}>
                                        <span style={{ color: 'var(--gold-dark)', fontWeight: 800, fontSize: '1.25rem' }}>
                                            تذكرتان: Standard & VIP
                                        </span>
                                        <span style={{ fontSize: '0.88rem', fontWeight: 700, color: 'var(--purple-deep)', opacity: 0.9 }}>
                                            ابتداءً من 290 DH (29€)
                                        </span>
                                    </div>
                                ) : data.stats.price.includes('|') ? (
                                    (() => {
                                        const [promoPart, originalPart] = data.stats.price.split('|');
                                        const promoDH = promoPart.includes('DH') ? promoPart.split('DH')[0].trim() : promoPart.trim();
                                        const promoEuro = promoPart.includes('DH') ? promoPart.split('DH')[1].trim() : '';
                                        const originalDH = originalPart.includes('DH') ? originalPart.split('DH')[0].trim() : originalPart.trim();
                                        const originalEuro = originalPart.includes('DH') ? originalPart.split('DH')[1].trim() : '';
                                        return (
                                            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '4px' }}>
                                                <div style={{ display: 'flex', alignItems: 'baseline', gap: '10px', direction: 'ltr' }}>
                                                    <span style={{ color: 'var(--gold-dark)', fontWeight: 800, fontSize: '1.35rem' }}>
                                                        {promoDH} DH
                                                    </span>
                                                    <span style={{ textDecoration: 'line-through', opacity: 0.45, fontSize: '1.05rem', color: 'var(--midnight)', fontWeight: 600 }}>
                                                        {originalDH} DH
                                                    </span>
                                                </div>
                                                {promoEuro && (
                                                    <div style={{ display: 'flex', alignItems: 'baseline', gap: '10px', direction: 'ltr' }}>
                                                        <span style={{ color: 'var(--midnight)', fontWeight: 700, fontSize: '0.9rem', opacity: 0.8 }}>
                                                            {promoEuro}
                                                        </span>
                                                        {originalEuro && (
                                                            <span style={{ textDecoration: 'line-through', opacity: 0.45, fontSize: '0.75rem', color: 'var(--midnight)', fontWeight: 600 }}>
                                                                {originalEuro}
                                                            </span>
                                                        )}
                                                    </div>
                                                )}
                                            </div>
                                        );
                                    })()
                                ) : data.stats.price.includes('DH') && data.stats.price.split('DH').length === 2 ? (
                                    <span style={{ direction: 'ltr', display: 'inline-block' }}>
                                        {data.stats.price.split('DH')[0]} DH <br /> {data.stats.price.split('DH')[1]}
                                    </span>
                                ) : (
                                    data.stats.price
                                )}
                            </span>
                        </div>
                    </div>

                    <div className="hero-action" style={{ marginTop: '40px', display: 'flex', justifyContent: 'center' }}>
                        <a href={tickets && tickets.length > 0 ? "#tickets-section" : "#payment-section"} className="btn-register">
                            {tickets && tickets.length > 0 ? "اختاري تذكرتك وسجلي الآن ←" : "سجلي الآن: طرق الدفع ←"}
                        </a>
                    </div>
                </motion.div>

                {/* Desktop Image (Side version) */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
                    className="zenith-portrait-container desktop-hero-img"
                >
                    <div className="l-frame">
                        <img src={data.image} alt={data.title} className="zenith-img" style={{ width: '100%', height: 'auto' }} />
                        <div className="portrait-glow"></div>
                        <div className="accent-bracket top-right"></div>
                        <div className="accent-bracket bottom-left"></div>
                    </div>
                </motion.div>
            </div>

            <style>{`




                @media (max-width: 1100px) {
                    .desktop-hero-img { display: none !important; }
                    .mobile-hero-img { display: block !important; margin: 30px auto; width: 90%; }
                    .zenith-content-container { display: flex; flex-direction: column; align-items: center; text-align: center; }
                }
                @media (min-width: 1101px) {
                    .mobile-hero-img { display: none !important; }
                    .desktop-hero-img { display: block !important; }
                }
            `}</style>

            <div className="huge-watermark">HARMONY</div>
        </section>
    );
};

export default ProgramHero;
