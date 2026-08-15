import React, { useState, useEffect } from 'react';
import { X, MessageCircle, Gift } from 'lucide-react';

const PromoPopup = () => {
    // تشغيل / إيقاف العرض: غير القيمة إلى true لتفعيل العرض مجدداً على الموقع
    const isPromoEnabled = false;

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
                                    src="/تخفيض.png" 
                                    alt="خصم باقة الدورات" 
                                    className="promo-image"
                                    loading="lazy" 
                                />
                            </div>

                            {/* Content Section */}
                            <div className="promo-content-sec">
                                <span className="promo-badge">عرض خاص لفترة محدودة 🔥</span>
                                <h3 className="promo-title">خصم استثنائي على باقة الدورات الشاملة</h3>
                                <p className="promo-desc">
                                    استثمر في نفسك الآن مع باقة دوراتنا المتكاملة والمصممة خصيصاً لمساعدتك على تحقيق التوازن الذهني والروحي والعملي بأفضل سعر.
                                </p>

                                <div className="promo-actions">
                                    <a 
                                        href="https://wa.me/212643354739?text=مرحباً، أريد الاستفسار عن عرض خصم باقة الدورات" 
                                        target="_blank" 
                                        rel="noopener noreferrer" 
                                        className="promo-cta-btn"
                                        onClick={handleClose}
                                    >
                                        <MessageCircle size={18} />
                                        <span>تواصل معنا للاشتراك والاستفسار</span>
                                    </a>
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
                    aria-label="عرض خصم باقة الدورات"
                >
                    <Gift size={20} className="promo-badge-icon" />
                    <span className="promo-badge-text">خصم الباقة 🔥</span>
                </button>
            )}
        </>
    );
};

export default PromoPopup;
