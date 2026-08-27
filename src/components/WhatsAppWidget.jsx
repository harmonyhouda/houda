import React, { useState, useEffect } from 'react';
import { X } from 'lucide-react';
import './WhatsAppWidget.css';

const WhatsAppWidget = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [showGreeting, setShowGreeting] = useState(false);

    useEffect(() => {
        // Show greeting bubble after 3 seconds if the chat is not open
        const greetingTimer = setTimeout(() => {
            const hasClosedGreeting = sessionStorage.getItem('whatsapp_greeting_closed');
            if (!isOpen && !hasClosedGreeting) {
                setShowGreeting(true);
            }
        }, 3000);

        // Auto hide greeting bubble after 10 seconds if still closed
        const hideTimer = setTimeout(() => {
            setShowGreeting(false);
        }, 13000);

        return () => {
            clearTimeout(greetingTimer);
            clearTimeout(hideTimer);
        };
    }, [isOpen]);

    const handleToggleChat = () => {
        setIsOpen(!isOpen);
        if (showGreeting) {
            setShowGreeting(false);
            sessionStorage.setItem('whatsapp_greeting_closed', 'true');
        }
    };

    const handleCloseGreeting = (e) => {
        e.stopPropagation(); // Prevent opening the chat when clicking close on greeting
        setShowGreeting(false);
        sessionStorage.setItem('whatsapp_greeting_closed', 'true');
    };

    const whatsappUrl = "https://wa.me/212643354739?text=مرحباً هدى هارموني، أريد الاستفسار عن الدورات وجلسات الكوتشينغ المتاحة 🌸";

    return (
        <div className="whatsapp-widget-container">
            {/* Greeting Bubble */}
            {showGreeting && (
                <div className="whatsapp-greeting-bubble" onClick={handleToggleChat}>
                    <button className="greeting-close-btn" onClick={handleCloseGreeting} aria-label="إغلاق الترحيب">
                        <X size={14} />
                    </button>
                    <div className="greeting-content">
                        <span className="greeting-avatar">🌸</span>
                        <p className="greeting-text">هل لديكِ استفسار؟ تواصلِ معنا مباشرة على واتساب</p>
                    </div>
                    <div className="greeting-arrow"></div>
                </div>
            )}

            {/* Floating Action Button */}
            <button 
                className={`whatsapp-floating-btn ${isOpen ? 'active' : ''}`}
                onClick={handleToggleChat}
                aria-label="تواصل معنا عبر واتساب"
                title="تواصل معنا عبر واتساب"
            >
                {isOpen ? (
                    <X size={26} className="widget-close-icon" />
                ) : (
                    <svg 
                        viewBox="0 0 24 24" 
                        width="28" 
                        height="28" 
                        fill="currentColor" 
                        className="widget-whatsapp-icon"
                    >
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.746.953 3.71 1.455 5.703 1.458h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                    </svg>
                )}
                {/* Visual pulse for attention */}
                {!isOpen && <span className="whatsapp-btn-pulse"></span>}
            </button>

            {/* Chat Box Popup */}
            {isOpen && (
                <div className="whatsapp-chat-box">
                    {/* Header */}
                    <div className="chat-box-header">
                        <div className="chat-profile-info">
                            <div className="chat-profile-avatar-container">
                                <img 
                                    src="https://assets.houdaharmony.com/img/logo-premium.png" 
                                    alt="Houda Harmony" 
                                    className="chat-profile-avatar"
                                    onError={(e) => {
                                        // Fallback to text avatar if logo fails
                                        e.target.style.display = 'none';
                                        e.target.parentNode.innerHTML = '<div class="chat-fallback-avatar">🌸</div>';
                                    }}
                                />
                                <span className="chat-online-badge"></span>
                            </div>
                            <div className="chat-profile-text">
                                <h4 className="chat-profile-name">هدى هارموني</h4>
                                <span className="chat-profile-status">نشط حالياً (متصل)</span>
                            </div>
                        </div>
                        <button className="chat-close-btn" onClick={handleToggleChat} aria-label="إغلاق">
                            <X size={18} />
                        </button>
                    </div>

                    {/* Chat Body */}
                    <div className="chat-box-body">
                        <div className="chat-bubble support">
                            <div className="chat-bubble-content">
                                <p>مرحباً بكِ في فضاء هدى هارموني 🌸</p>
                                <p>يسعدنا جداً الإجابة على أي استفسار يخص الدورات، الجلسات الخاصة، أو التأملات.</p>
                                <p>كيف يمكننا مساعدتكِ اليوم؟</p>
                            </div>
                            <span className="chat-bubble-time">الآن</span>
                        </div>
                    </div>

                    {/* Chat Footer / Action Button */}
                    <div className="chat-box-footer">
                        <a 
                            href={whatsappUrl} 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            className="whatsapp-start-chat-btn"
                        >
                            <svg 
                                viewBox="0 0 24 24" 
                                width="20" 
                                height="20" 
                                fill="currentColor" 
                                style={{ marginLeft: '8px' }}
                            >
                                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.746.953 3.71 1.455 5.703 1.458h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                            </svg>
                            <span>بدء المحادثة الآن</span>
                        </a>
                    </div>
                </div>
            )}
        </div>
    );
};

export default WhatsAppWidget;
