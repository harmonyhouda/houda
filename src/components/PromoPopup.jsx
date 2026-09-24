import React, { useState, useEffect } from 'react';
import { X, Sparkles } from 'lucide-react';

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
                                    src="/gratuit.png" 
                                    alt="جلسة تحرر من المشاعر السلبية وشفاء للطفل الداخلي" 
                                    className="promo-image"
                                    loading="eager" 
                                />
                            </div>

                            {/* Content Section */}
                            <div className="promo-content-sec">
                                <span className="promo-badge">✨ لقاء مجاني عن بُعد أونلاين • قريباً</span>
                                <h3 className="promo-title">جلسة تحرر من المشاعر السلبية وشفاء للطفل الداخلي</h3>
                                <p className="promo-desc">
                                    لقاء مجاني مباشر عن بُعد (أونلاين) قريباً ✨ لحضور الجلسة وتلقي رابط البث المباشر، يرجى الانضمام إلى مجموعة التيليغرام.
                                </p>

                                <div className="promo-actions">
                                    <a 
                                        href="https://t.me/+lzpA0vhnaqplZGQ0" 
                                        target="_blank" 
                                        rel="noopener noreferrer" 
                                        className="promo-cta-btn promo-telegram-btn"
                                        onClick={handleClose}
                                    >
                                        <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                                            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19-.14.75-.42 1-.68 1.03-.58.05-1.02-.38-1.58-.75-.88-.58-1.38-.94-2.23-1.5-.99-.65-.35-1.01.22-1.59.15-.15 2.71-2.48 2.76-2.69a.2.2 0 00-.05-.18c-.06-.05-.14-.03-.21-.02-.09.02-1.49.95-4.22 2.79-.4.27-.76.41-1.08.4-.36-.01-1.04-.2-1.55-.37-.63-.2-1.12-.31-1.08-.66.02-.18.27-.36.75-.55 2.92-1.27 4.86-2.11 5.83-2.51 2.78-1.16 3.35-1.36 3.73-1.36.08 0 .27.02.39.12.1.08.13.19.14.27-.01.06.01.24 0 .38z"/>
                                        </svg>
                                        <span>الانضمام إلى مجموعة التيليغرام</span>
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
                    aria-label="عرض تفاصيل اللقاء المجاني"
                >
                    <Sparkles size={20} className="promo-badge-icon" />
                    <span className="promo-badge-text">لقاء مجاني قريباً ✨</span>
                </button>
            )}
        </>
    );
};

export default PromoPopup;
