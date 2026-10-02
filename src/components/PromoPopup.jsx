import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { X, Sparkles, ArrowLeft } from 'lucide-react';

const PromoPopup = () => {
    // تشغيل / إيقاف العرض: غير القيمة إلى true لتفعيل العرض على الموقع
    const isPromoEnabled = true;

    if (!isPromoEnabled) return null;

    const [isVisible, setIsVisible] = useState(false);
    const [showFloatingBadge, setShowFloatingBadge] = useState(false);

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
                                    src="/رحلة وعي وخلق الواقع.png" 
                                    alt="جلسة تحرر من المشاعر السلبية وشفاء للطفل الداخلي" 
                                    className="promo-image"
                                    loading="eager" 
                                />
                            </div>

                            {/* Content Section */}
                            <div className="promo-content-sec">
                                <span className="promo-badge">✨ برنامج جديد •رحلة تحول و خلق الواقع  لمدة 4 أشهر</span>
                                <h3 className="promo-title">جاهزة تـخـرجـي مـن نـفـس السيناريو… وتـخـلـقـي واقعًا يـشـبـهـك؟</h3>
                                <p className="promo-desc">
                                    4 أشهر من الوعي والتحرر والاستحقاق والظهور والمال… وصولًا لهوية جديدة وواقع تختارينه بوعي، داخل مجموعة خاصة ومحدودة بمتابعة قريبة.                                </p>

                                <div className="promo-actions">
                                    <Link 
                                        to="/program-details/رحلة-وعي-وخلق-الواقع" 
                                        className="promo-cta-btn"
                                        onClick={handleClose}
                                    >
                                        <span>اكتشفي تفاصيل البرنامج</span>
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
                    aria-label="عرض تفاصيل البرنامج الجديد"
                >
                    <Sparkles size={20} className="promo-badge-icon" />
                    <span className="promo-badge-text">تفاصيل البرنامج الجديد ✨</span>
                </button>
            )}
        </>
    );
};

export default PromoPopup;
