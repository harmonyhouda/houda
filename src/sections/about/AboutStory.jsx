import React from 'react';

const AboutStory = () => {
    return (
        <section className="celestial-story">
            <div className="celestial-story-container">
                <div className="story-premium-island">
                    <div className="story-narrative-centered">
                        <span className="celestial-subtitle">
                            هدى أبـحـمــان
                        </span>

                        <div className="celestial-separator">
                            <div className="sep-line"></div>
                            <span className="sep-icon">✦</span>
                            <div className="sep-line"></div>
                        </div>

                        <div className="narrative-content-wrapper">
                            {/* Coach Description */}
                            <div className="coach-description">
                                <p>
                                    هدى أبحمان هي كوتش حياة وأخصائية متقدمة في التنفس، متخصصة في مرافقة الأفراد نحو تحقيق التوازن والتميز. من خلال تقنيات مبتكرة ونهج شمولي، تساعدك على اكتشاف إمكاناتك الكاملة وتحويل حياتك نحو الأفضل، مع التركيز على التناغم بين العقل والجسد. تقدم جلسات التنفس التأملي، التنويم الإيحائي، وتقنيات التحرر الجسدي لمساعدتك على تطوير ذاتك وتحقيق أهدافك
                                </p>
                            </div>

                            {/* Expertise Domains */}
                            <div className="expertise-grid">
                                {[
                                    ' التنويم الإيحائي',
                                    'التنفس التأملي',
                                    'التحرر الجسدي'
                                ].map((item, index) => (
                                    <div
                                        key={item}
                                        className="expertise-item"
                                    >
                                        {item}
                                    </div>
                                ))}
                            </div>

                            {/* Certifications */}
                            <div className="certifications-premium-list">
                                <h4 className="certs-list-title">
                                    الشهادات والاعتمادات
                                </h4>
                                <div className="certs-list-container">
                                    {[
                                        "معالجة بالتنويم الإيحائي (خريجة ACHE)",
                                        "لايف كوتش معتمدة من WIN BE THE WINNER",
                                        "معتمدة من الاتحاد الدولي للكوتشينغ",
                                        "أخصائية متقدمة معتمدة دوليًا في التنفس التأملي",
                                        "خريجة المركز الدولي للتنمية البشرية"
                                    ].map((cert, index) => (
                                        <div
                                            key={index}
                                            className="cert-item-premium"
                                        >
                                            <span className="cert-dot">✦</span>
                                            <span>{cert}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutStory;
