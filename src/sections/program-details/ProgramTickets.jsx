import React from 'react';
import { motion } from 'framer-motion';
import { Check, Sparkles, ArrowLeft, Gift, ShieldCheck, Calendar } from 'lucide-react';

const ProgramTickets = ({ tickets }) => {
    if (!tickets || tickets.length === 0) return null;

    const handleSelectTicket = (ticketName) => {
        const paymentSection = document.getElementById('payment-section');
        if (paymentSection) {
            paymentSection.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <section className="program-tickets-section" id="tickets-section">
            <style>{`
                .program-tickets-section {
                    padding: 110px 20px;
                    background-color: var(--bg-light, #FBF9F6);
                    position: relative;
                    overflow: hidden;
                }

                .tickets-container {
                    max-width: 1050px;
                    margin: 0 auto;
                    position: relative;
                    z-index: 2;
                }

                .tickets-header {
                    text-align: center;
                    margin-bottom: 60px;
                }

                .tickets-kicker {
                    display: inline-flex;
                    align-items: center;
                    gap: 8px;
                    padding: 6px 20px;
                    background: rgba(220, 160, 17, 0.12);
                    border: 1px solid rgba(220, 160, 17, 0.35);
                    border-radius: 50px;
                    color: var(--gold-dark, #B5840B);
                    font-size: 0.9rem;
                    font-weight: 700;
                    margin-bottom: 18px;
                }

                .tickets-title {
                    font-size: 2.5rem;
                    font-weight: 800;
                    color: var(--purple-deep, #2D1244);
                    margin-bottom: 14px;
                    font-family: inherit;
                }

                .tickets-title .gold-serif {
                    color: var(--gold-dark, #B5840B);
                    font-style: italic;
                    font-family: var(--font-serif, serif);
                }

                .tickets-subtitle {
                    color: rgba(45, 18, 68, 0.7);
                    font-size: 1.05rem;
                    max-width: 620px;
                    margin: 0 auto;
                    line-height: 1.8;
                }

                .tickets-grid {
                    display: grid;
                    grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
                    gap: 36px;
                    align-items: stretch;
                }

                .ticket-card {
                    background: #FFFFFF;
                    border: 1px solid rgba(45, 18, 68, 0.08);
                    border-radius: 28px;
                    padding: 45px 36px;
                    display: flex;
                    flex-direction: column;
                    justify-content: space-between;
                    position: relative;
                    box-shadow: 0 12px 35px rgba(45, 18, 68, 0.04);
                    transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
                }

                .ticket-card:hover {
                    transform: translateY(-8px);
                    box-shadow: 0 22px 50px rgba(45, 18, 68, 0.08);
                }

                /* VIP Highlighting */
                .ticket-card.popular {
                    background: linear-gradient(180deg, #FFFFFF 0%, #FFFDF7 100%);
                    border: 2px solid var(--gold, #dca011);
                    box-shadow: 0 20px 45px rgba(220, 160, 17, 0.12), 0 4px 15px rgba(45, 18, 68, 0.04);
                }

                .ticket-badge-pill {
                    position: absolute;
                    top: -16px;
                    left: 50%;
                    transform: translateX(-50%);
                    background: linear-gradient(135deg, #dca011, #f4c442);
                    color: #1a0b2e;
                    font-size: 0.85rem;
                    font-weight: 800;
                    padding: 7px 24px;
                    border-radius: 50px;
                    box-shadow: 0 6px 18px rgba(220, 160, 17, 0.35);
                    white-space: nowrap;
                }

                .ticket-header-inner {
                    border-bottom: 1px solid rgba(45, 18, 68, 0.06);
                    padding-bottom: 25px;
                    margin-bottom: 25px;
                }

                .ticket-name {
                    font-size: 1.7rem;
                    font-weight: 800;
                    color: var(--purple-deep, #2D1244);
                    margin-bottom: 8px;
                }

                .ticket-desc {
                    font-size: 0.95rem;
                    color: rgba(45, 18, 68, 0.65);
                    line-height: 1.6;
                    min-height: 44px;
                }

                .ticket-pricing {
                    margin: 22px 0 10px;
                }

                .ticket-main-price {
                    display: flex;
                    align-items: baseline;
                    gap: 12px;
                    direction: ltr;
                    justify-content: flex-end;
                }

                .price-dh {
                    font-size: 2.6rem;
                    font-weight: 800;
                    color: var(--purple-deep, #2D1244);
                }

                .ticket-card.popular .price-dh {
                    color: var(--gold-dark, #B5840B);
                }

                .price-euro {
                    font-size: 1.3rem;
                    font-weight: 700;
                    color: rgba(45, 18, 68, 0.55);
                }

                .ticket-card.popular .price-euro {
                    color: var(--purple-royal, #4A1E70);
                }

                .ticket-features-list {
                    list-style: none;
                    padding: 0;
                    margin: 0 0 35px 0;
                    display: flex;
                    flex-direction: column;
                    gap: 16px;
                    flex-grow: 1;
                }

                .ticket-feature-item {
                    display: flex;
                    align-items: flex-start;
                    gap: 12px;
                    font-size: 0.96rem;
                    line-height: 1.6;
                    color: var(--purple-deep, #2D1244);
                }

                .feature-icon-wrap {
                    width: 22px;
                    height: 22px;
                    border-radius: 50%;
                    background: rgba(220, 160, 17, 0.15);
                    color: var(--gold-dark, #B5840B);
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    flex-shrink: 0;
                    margin-top: 3px;
                }

                .ticket-card.popular .feature-icon-wrap {
                    background: var(--gold, #dca011);
                    color: #FFFFFF;
                }

                .gift-highlight {
                    background: rgba(220, 160, 17, 0.08);
                    border: 1px dashed rgba(220, 160, 17, 0.4);
                    padding: 10px 14px;
                    border-radius: 14px;
                    font-weight: 600;
                }

                .btn-ticket-cta {
                    width: 100%;
                    padding: 16px 24px;
                    border-radius: 50px;
                    font-size: 1.05rem;
                    font-weight: 700;
                    cursor: pointer;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    gap: 10px;
                    text-decoration: none;
                    transition: all 0.3s ease;
                    border: none;
                    font-family: inherit;
                }

                .btn-ticket-primary {
                    background: linear-gradient(135deg, #dca011, #f4c442);
                    color: #1a0b2e;
                    box-shadow: 0 8px 25px rgba(220, 160, 17, 0.35);
                }

                .btn-ticket-primary:hover {
                    transform: translateY(-2px);
                    box-shadow: 0 12px 30px rgba(220, 160, 17, 0.5);
                    color: #1a0b2e;
                }

                .btn-ticket-secondary {
                    background: rgba(45, 18, 68, 0.05);
                    color: var(--purple-deep, #2D1244);
                    border: 1px solid rgba(45, 18, 68, 0.12);
                }

                .btn-ticket-secondary:hover {
                    background: rgba(45, 18, 68, 0.1);
                    color: var(--purple-deep, #2D1244);
                    transform: translateY(-2px);
                }

                .tickets-guarantee {
                    margin-top: 55px;
                    text-align: center;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    gap: 10px;
                    color: rgba(45, 18, 68, 0.65);
                    font-size: 0.95rem;
                }

                @media (max-width: 768px) {
                    .tickets-title {
                        font-size: 2rem;
                    }
                    .ticket-card {
                        padding: 35px 24px;
                    }
                }
            `}</style>

            <div className="tickets-container">
                <div className="tickets-header">
                    <span className="tickets-kicker">
                        <Sparkles size={16} />
                        خيارات التسجيل والاستثمار
                    </span>
                    <h2 className="tickets-title">
                        اختاري التذكرة <span className="gold-serif">التي تناسبكِ</span>
                    </h2>
                    <p className="tickets-subtitle">
                        سواء اخترتِ التذكرة الأساسية أو تذكرة VIP، أنتِ تخطين خطوة شجاعة نحو التحرر من الماضي والسلام الداخلي.
                    </p>
                </div>

                <div className="tickets-grid">
                    {tickets.map((ticket) => {
                        const isVip = ticket.isPopular || ticket.id === 'vip';
                        return (
                            <motion.div
                                key={ticket.id}
                                className={`ticket-card ${isVip ? 'popular' : ''}`}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6 }}
                            >
                                {ticket.badge && (
                                    <div className="ticket-badge-pill">
                                        {ticket.badge}
                                    </div>
                                )}

                                <div>
                                    <div className="ticket-header-inner">
                                        <h3 className="ticket-name">{ticket.name}</h3>
                                        <p className="ticket-desc">{ticket.description}</p>
                                        
                                        <div className="ticket-pricing">
                                            <div className="ticket-main-price">
                                                <span className="price-dh">{ticket.priceDH}</span>
                                                <span className="price-euro">/ {ticket.priceEuro}</span>
                                            </div>
                                        </div>
                                    </div>

                                    <ul className="ticket-features-list">
                                        {ticket.features.map((feature, fIdx) => {
                                            const isGift = feature.includes('🎁');
                                            const isSession = feature.includes('لقاء متابعة') || feature.includes('نوفمبر') || feature.includes('🗓️');
                                            const isHighlighted = isGift || isSession;

                                            return (
                                                <li key={fIdx} className={`ticket-feature-item ${isHighlighted ? 'gift-highlight' : ''}`}>
                                                    <div className="feature-icon-wrap">
                                                        {isGift ? (
                                                            <Gift size={14} />
                                                        ) : isSession ? (
                                                            <Calendar size={14} />
                                                        ) : (
                                                            <Check size={14} strokeWidth={3} />
                                                        )}
                                                    </div>
                                                    <span>{feature}</span>
                                                </li>
                                            );
                                        })}
                                    </ul>
                                </div>

                                <div className="ticket-footer">
                                    <button
                                        onClick={() => handleSelectTicket(ticket.name)}
                                        className={`btn-ticket-cta ${isVip ? 'btn-ticket-primary' : 'btn-ticket-secondary'}`}
                                    >
                                        <span>{isVip ? 'احجزي تذكرة VIP المميزة' : 'اختاري التذكرة الأساسية'}</span>
                                        <ArrowLeft size={18} />
                                    </button>
                                </div>
                            </motion.div>
                        );
                    })}
                </div>

                <div className="tickets-guarantee">
                    <ShieldCheck size={20} color="var(--gold-dark, #B5840B)" />
                    <span>مساحة آمنة ومحمية بالكامل • تأكيد الحجز متاح عبر التحويل البنكي أو وكالات الدفع المختلفة</span>
                </div>
            </div>
        </section>
    );
};

export default ProgramTickets;
