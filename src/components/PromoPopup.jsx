import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { X, Sparkles, ArrowLeft } from 'lucide-react';

const PromoPopup = () => {
    // تشغيل / إيقاف العرض: غير القيمة إلى true لتفعيل العرض على الموقع
    const isPromoEnabled = true;

    if (!isPromoEnabled) return null;

    const [isVisible, setIsVisible] = useState(false);
    const [showFloatingBadge, setShowFloatingBadge] = useState(false);
    const [activeTab, setActiveTab] = useState('workshop'); // 'workshop' or 'journey'

    const programsData = {
        workshop: {
            image: '/شفاء الماضي نسخة 2.png',
            alt: 'ورشة شفاء الماضي — النسخة الثانية',
            badge: 'ورشة شفاء الماضي • 31 أكتوبر',
            title: 'ورشة شفاء الماضي — النسخة الثانية',
            desc: 'مساحة للتصالح مع نفسك، التخفف من التأنيب والعار وجلد الذات، والعودة لحاضرك بوعي أخف ونظرة جديدة. 🎁 هدايا خاصة مع Ticket VIP ',
            link: '/program-details/ورشة-شفاء-الماضي-النسخة-الثانية',
            btnText: 'اكتشفي تفاصيل الورشة والتذاكر'
        },
        journey: {
            image: '/رحلة وعي وخلق الواقع.png',
            alt: 'رحلة وعي وخلق الواقع — 4 أشهر',
            badge: '✨ برنامج متكامل • 4 أشهر بمتابعة قريبة',
            title: 'جاهزة تـخـرجـي مـن نـفـس السيناريو… وتـخـلـقـي واقعًا يـشـبـهـك؟',
            desc: '4 أشهر من الوعي والتحرر والاستحقاق والظهور والمال… وصولًا لهوية جديدة وواقع تختارينه بوعي داخل مجموعة خاصة ومحدودة.',
            link: '/program-details/رحلة-وعي-وخلق-الواقع',
            btnText: 'اكتشفي تفاصيل البرنامج'
        }
    };

    const currentProgram = programsData[activeTab];

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
                                    src={currentProgram.image} 
                                    alt={currentProgram.alt} 
                                    className="promo-image"
                                    key={activeTab}
                                    loading="eager" 
                                />
                            </div>

                            {/* Content Section */}
                            <div className="promo-content-sec">
                                {/* Segmented Choice Tabs */}
                                <div className="promo-nav-tabs" role="tablist">
                                    <button 
                                        type="button"
                                        role="tab"
                                        aria-selected={activeTab === 'workshop'}
                                        className={`promo-nav-tab ${activeTab === 'workshop' ? 'active' : ''}`}
                                        onClick={() => setActiveTab('workshop')}
                                    >
                                        <span>⚡ ورشة 31 أكتوبر</span>
                                    </button>
                                    <button 
                                        type="button"
                                        role="tab"
                                        aria-selected={activeTab === 'journey'}
                                        className={`promo-nav-tab ${activeTab === 'journey' ? 'active' : ''}`}
                                        onClick={() => setActiveTab('journey')}
                                    >
                                        <span>✨ برنامج الـ 4 أشهر</span>
                                    </button>
                                </div>

                                <span className="promo-badge">{currentProgram.badge}</span>
                                <h3 className="promo-title">{currentProgram.title}</h3>
                                <p className="promo-desc">
                                    {currentProgram.desc}
                                </p>

                                <div className="promo-actions">
                                    <Link 
                                        to={currentProgram.link} 
                                        className="promo-cta-btn"
                                        onClick={handleClose}
                                    >
                                        <span>{currentProgram.btnText}</span>
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
                    aria-label="عرض برامج وورشات هدى الدقاق"
                >
                    <Sparkles size={20} className="promo-badge-icon" />
                    <span className="promo-badge-text">الورشات والبرامج الحالية ✨</span>
                </button>
            )}
        </>
    );
};

export default PromoPopup;
