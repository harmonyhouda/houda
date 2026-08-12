import React, { useState } from 'react';

const PaymentMethods = ({ isFeatured }) => {
    const [copied, setCopied] = useState(false);

    const ribNumber = "164 640 2111149718360008 59";

    const handleCopy = () => {
        navigator.clipboard.writeText(ribNumber.replace(/\s/g, ''));
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <section id="payment-section" className="payment-methods-section">
            <style>{`
                .payment-methods-section {
                    padding: 100px 0;
                    background: var(--bg-white);
                    position: relative;
                    overflow: hidden;
                }

                .payment-container {
                    max-width: 1100px;
                    margin: 0 auto;
                    padding: 0 5%;
                }

                .payment-grid {
                    display: grid;
                    grid-template-columns: 1fr 1fr;
                    gap: 40px;
                    margin-top: 60px;
                }

                .payment-card {
                    background: var(--bg-light);
                    border: 1px solid rgba(45, 18, 68, 0.05);
                    border-radius: 24px;
                    padding: 40px;
                    position: relative;
                    transition: all 0.5s cubic-bezier(0.16, 1, 0.3, 1);
                    display: flex;
                    flex-direction: column;
                    gap: 25px;
                }

                .payment-card:hover {
                    transform: translateY(-10px);
                    box-shadow: var(--shadow-premium);
                    border-color: var(--gold-light);
                }

                .card-header {
                    display: flex;
                    align-items: center;
                    gap: 15px;
                    margin-bottom: 10px;
                }

                .icon-box {
                    width: 50px;
                    height: 50px;
                    background: var(--gold-shimmer);
                    border-radius: 12px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    color: white;
                }

                .card-title {
                    font-family: var(--font-serif);
                    font-size: 1.8rem;
                    color: var(--purple-deep);
                }

                .payment-info-list {
                    display: flex;
                    flex-direction: column;
                    gap: 15px;
                }

                .info-item {
                    display: flex;
                    flex-direction: column;
                    gap: 5px;
                }

                .info-label {
                    font-size: 0.75rem;
                    color: var(--text-light);
                    text-transform: uppercase;
                    letter-spacing: 1px;
                }

                .info-value {
                    font-size: 1.1rem;
                    font-weight: 600;
                    color: var(--purple-royal);
                    font-family: var(--font-sans);
                }

                .rib-box {
                    background: white;
                    padding: 15px;
                    border-radius: 12px;
                    border: 1px dashed var(--gold);
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    margin-top: 10px;
                }

                .rib-text {
                    font-family: monospace;
                    font-size: 1.1rem;
                    letter-spacing: 1px;
                    color: var(--purple-deep);
                    direction: ltr;
                    display: inline-block;
                }

                .copy-btn {
                    background: var(--purple-deep);
                    color: white;
                    border: none;
                    padding: 8px 15px;
                    border-radius: 8px;
                    font-size: 0.8rem;
                    cursor: pointer;
                    transition: all 0.3s ease;
                }

                .copy-btn:hover {
                    background: var(--gold);
                }

                .instruction-box {
                    margin-top: 60px;
                    text-align: center;
                    padding: 30px;
                    background: rgba(108, 62, 145, 0.05);
                    border-radius: 20px;
                    border: 1px solid rgba(108, 62, 145, 0.1);
                }

                .instruction-text {
                    font-size: 1.2rem;
                    color: var(--purple-royal);
                    font-weight: 500;
                }

                .whatsapp-link {
                    display: inline-flex;
                    align-items: center;
                    gap: 10px;
                    margin-top: 15px;
                    color: #25D366;
                    font-weight: 700;
                    font-size: 1.1rem;
                    text-decoration: underline;
                }

                @media (max-width: 850px) {
                    .payment-grid {
                        grid-template-columns: 1fr;
                    }
                }
            `}</style>

            <div className="payment-container">
                <div className="zenith-meta" style={{ justifyContent: 'center' }}>
                    <div className="meta-line"></div>
                    <div className="meta-text">خطوات التسجيل</div>
                    <div className="meta-line"></div>
                </div>

                <h2 className="l-title" style={{ textAlign: 'center', marginBottom: '10px' }}>
                    طرق <span className="l-serif">الدفع المتاحة</span>
                </h2>
                <p style={{ 
                    textAlign: 'center', 
                    color: 'var(--purple-royal)', 
                    fontSize: '1.05rem',
                    maxWidth: '700px',
                    margin: '30px auto 60px auto',
                    padding: '15px 25px',
                    background: 'rgba(210, 162, 12, 0.05)',
                    borderRadius: '12px',
                    border: '1px solid rgba(210, 162, 12, 0.1)',
                    lineHeight: '1.6'
                }}>
                    <span style={{ color: 'var(--gold)', fontWeight: 'bold', marginLeft: '8px' }}>●</span>
                    ملاحظة: لضمان جدية الحجز وجودة الخدمة رسوم التسجيل غير قابلة للاسترجاع بعد إتمام الدفع، إلا في حالات استثنائية خاصة. شكراً لتفهمكم   .
                </p>

                <div className="payment-grid">
                    {/* Card 1: Bank Transfer */}
                    <div className="payment-card">
                        <div className="card-header">
                            <div className="icon-box">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <rect x="2" y="5" width="20" height="14" rx="2" />
                                    <line x1="2" y1="10" x2="22" y2="10" />
                                </svg>
                            </div>
                            <h3 className="card-title">التحويل البنكي</h3>
                        </div>

                        <div className="payment-info-list">
                            <div className="info-item">
                                <span className="info-label">اسم البنك</span>
                                <span className="info-value">Banque Populaire</span>
                            </div>
                            <div className="info-item">
                                <span className="info-label">صاحب الحساب</span>
                                <span className="info-value">ABAHMANE HOUDA</span>
                            </div>
                            <div className="info-item">
                                <span className="info-label">رقم الحساب (RIB)</span>
                                <div className="rib-box">
                                    <span className="rib-text">{ribNumber}</span>
                                    <button className="copy-btn" onClick={handleCopy}>
                                        {copied ? 'تم النسخ!' : 'نسخ'}
                                    </button>
                                </div>
                            </div>
                            <div className="info-item">
                                <span className="info-label">CODE SWIFT / BIC</span>
                                <span className="info-value">BCPOMAMC</span>
                            </div>
                            {/* <div className="info-item">
                                <span className="info-label">رقم الحساب (لعملاء CIH)</span>
                                <span className="info-value">5893171211016800</span>
                            </div> */}
                        </div>
                    </div>

                    {/* Card 2: Agency Payment (Rihab & Houda) - Commented out for now */}
                    
                    <div className="payment-card">
                        <div className="card-header">
                            <div className="icon-box">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                                </svg>
                            </div>
                            <h3 className="card-title">وكالات التحويل</h3>
                        </div>

                        <div className="payment-info-list">
                            <div className="info-item">
                                <span className="info-label">الوكالات المدعومة</span>
                                <span className="info-value">Western Union / Ria / WafaCash / Cash Plus / Chaabi Cash / Damane Cash</span>
                            </div>
                            <div className="info-item">
                                <span className="info-label">الاسم الكامل</span>
                                <span className="info-value">Rihab el kadmiri</span>
                            </div>
                            <div className="info-item">
                                <span className="info-label">رقم الهاتف</span>
                                <span className="info-value">+212 643-354739</span>
                            </div>
                            <div className="info-item">
                                <span className="info-label">المدينة</span>
                                <span className="info-value">وجدة (Oujda)</span>
                            </div>
                        </div>
                    </div>
                    

                    {/* Card 3: Agency Payment (Only Houda) */}
                    {/*
                    <div className="payment-card">
                        <div className="card-header">
                            <div className="icon-box">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                                </svg>
                            </div>
                            <h3 className="card-title">وكالات التحويل</h3>
                        </div>

                        <div className="payment-info-list">
                            <div className="info-item">
                                <span className="info-label">الوكالات المدعومة</span>
                                <span className="info-value">Western Union / Ria / WafaCash / Cash Plus / Chaabi Cash / Damane Cash</span>
                            </div>
                            <div className="info-item">
                                <span className="info-label">الاسم الكامل</span>
                                <span className="info-value">ABAHMANE HOUDA</span>
                            </div>
                            <div className="info-item">
                                <span className="info-label">رقم الهاتف</span>
                                <span className="info-value">+212 643-354739</span>
                            </div>
                            <div className="info-item">
                                <span className="info-label">المدينة</span>
                                <span className="info-value">طنجة (Tanger)</span>
                            </div>
                        </div>
                    </div>
                    */}
                </div>

                <div className="instruction-box">
                    <p className="instruction-text">
                        بعد إتمام عملية الدفع، يرجى إرسال صورة وصل التحويل لتأكيد مكانك في البرنامج.
                    </p>
                    <p style={{ 
                        fontSize: '0.85rem', 
                        color: 'var(--text-light)', 
                        marginTop: '15px',
                        fontStyle: 'italic',
                        opacity: 0.8
                    }}>
                        * نود إعلامكم أن رسوم التسجيل غير قابلة للاسترجاع بعد إتمام الدفع، إلا في حالات استثنائية خاصة. شكراً لتفهمكم.
                    </p>
                    <a href="https://wa.me/212643354739" target="_blank" rel="noopener noreferrer" className="whatsapp-link">
                        إرسال الوصل عبر الواتساب <span>→</span>
                    </a>
                </div>
            </div>
        </section>
    );
};

export default PaymentMethods;
