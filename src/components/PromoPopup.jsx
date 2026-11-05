import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { X, Sparkles, ArrowLeft } from 'lucide-react';

const PromoPopup = () => {
    // تشغيل / إيقاف العرض: غير القيمة إلى true لتفعيل العرض على الموقع
    const isPromoEnabled = true;
    const location = useLocation();

    // إخفاء الـ Popup في صفحة الكورس الخاص
    const isVipSession = location.pathname.startsWith('/vip-session/');

    if (!isPromoEnabled || isVipSession) return null;

    const [isVisible, setIsVisible] = useState(false);
    const [showFloatingBadge, setShowFloatingBadge] = useState(false);

    const program = {
        image: '/رحلة وعي وخلق الواقع.png',
        alt: 'رحلة وعي وخلق الواقع — 4 أشهر',
        badge: '✨ برنامج متكامل • 4 أشهر بمتابعة قريبة',
        title: 'جاهزة تـخـرجـي مـن نـفـس السيناريو… وتـخـلـقـي واقعًا يـشـبـهـك؟',
        desc: '4 أشهر من الوعي والتحرر والاستحقاق والظهور والمال… وصولًا لهوية جديدة وواقع تختارينه بوعي داخل مجموعة خاصة ومحدودة.',
        link: '/program-details/رحلة-وعي-وخلق-الواقع',
        btnText: 'اكتشفي تفاصيل البرنامج'
    };

    useEffect(() => {
        // Show the popup after a 2-second delay
        const timer = setTimeout(() => {
            setIsVisible(true);
        }, 2000);

        return () => clearTimeout(timer);
    }, []);

    const handleClose = () => {
        setIsVisible(false);
        setShowFloatingBadge(true);
    };

    const handleOpen = () => {
        setIsVisible(true);
        setShowFloatingBadge(false);
    };

    return (
        <>
            {/* Main Modal */}
            {isVisible && (
                <div className="promo-overlay" onClick={handleClose}>
                    <div className="promo-container" onClick={(e) => e.stopPropagation()}>
                        {/* Close Button */}
                        <button className="promo-close-btn" onClick={handleClose} aria-label="إغلاق">
                            <X size={20} />
                        </button>

                        {/* Promo Layout */}
                        <div className="promo-layout">
                            {/* Image Section */}
                            <div className="promo-image-sec">
                                <img 
                                    src={program.image} 
                                    alt={program.alt} 
                                    className="promo-image"
                                    loading="eager" 
                                />
                            </div>

                            {/* Content Section */}
                            <div className="promo-content-sec">
                                <span className="promo-badge">{program.badge}</span>
                                <h3 className="promo-title">{program.title}</h3>
                                <p className="promo-desc">
                                    {program.desc}
                                </p>

                                <div className="promo-actions">
                                    <Link 
                                        to={program.link} 
                                        className="promo-cta-btn"
                                        onClick={handleClose}
                                    >
                                        <span>{program.btnText}</span>
                                        <ArrowLeft size={18} />
                                    </Link>
                                    <button className="promo-secondary-btn" onClick={handleClose}>
                                        تصفح الموقع أولاً
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}

            {/* Floating Badge */}
            {showFloatingBadge && !isVisible && (
                <button 
                    className="promo-floating-badge" 
                    onClick={handleOpen}
                    aria-label="عرض برامج هدى الدقاق"
                >
                    <Sparkles size={20} className="promo-badge-icon" />
                    <span className="promo-badge-text">رحلة وعي وخلق الواقع ✨</span>
                </button>
            )}
        </>
    );
};

export default PromoPopup;
