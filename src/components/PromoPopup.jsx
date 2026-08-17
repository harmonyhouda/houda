import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { X, MessageCircle, Sparkles } from 'lucide-react';

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
                                    src="/رحلة تذكر.png" 
                                    alt="رحلة تذكر" 
                                    className="promo-image"
                                    loading="lazy" 
                                />
                            </div>

                            {/* Content Section */}
                            <div className="promo-content-sec">
                                <span className="promo-badge">🌸 رحلة روحانية أونلاين • لمدة شهرين</span>
                                <h3 className="promo-title">هل تشعرين بالثقل أو التشتّت وسط ضجيج الحياة؟</h3>
                                <p className="promo-desc">
                                    ماذا لو كانت هناك نسخة منكِ أكثر حرية، سلامًا وقربًا من حقيقتها؟
                                    <br />
                                    ليست نسخة جديدة… بل أنتِ قبل أن تُثقلكِ المخاوف والتجارب والتعلّقات.
                                    <br />
                                    <strong>«رحلة تذكّر»</strong> دورة أونلاين لمدة شهرين، للتحرّر من رواسب الماضي، واستعادة الأمان والعودة إلى نوركِ من جديد. ✨
                                </p>

                                <div className="promo-actions">
                                    <a 
                                        href="https://wa.me/212643354739?text=مرحباً، أريد الاستفسار عن تفاصيل رحلة تذكر وإمكانية الدفع على مرتين" 
                                        target="_blank" 
                                        rel="noopener noreferrer" 
                                        className="promo-cta-btn"
                                        onClick={handleClose}
                                    >
                                        <MessageCircle size={18} />
                                        <span>تواصل معنا لمعرفة تفاصيل الرحلة   </span>
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
                    aria-label="عرض تفاصيل رحلة تذكر"
                >
                    <Sparkles size={20} className="promo-badge-icon" />
                    <span className="promo-badge-text">رحلة تذكر ✨</span>
                </button>
            )}
        </>
    );
};

export default PromoPopup;
