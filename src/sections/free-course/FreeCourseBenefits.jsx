import React from 'react';
import { motion } from 'framer-motion';

const benefits = [
    "فهم مشاعرك والتعرّف على ما وراءها",
    "إعادة الاتصال بنفسك",
    "التعرّف على أثر بعض التجارب القديمة على مشاعرك اليوم",
    "إعادة برمجة الأنماط القديمة التي تعيق تقدمك",
    "تمارين وتقنيات بسيطة تساعدك على التعامل مع مشاعرك بوعي",
    "خطوة أولى للعودة إلى نفسك والشعور بهدوء داخلي أكبر",
];

const FreeCourseBenefits = () => {
    return (
        <motion.section
            className="fcp-benefits-section"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7 }}
        >
            <div className="fcp-hero-tag">
                <span>ماذا ستكتسبين</span>
            </div>
            <h2 className="fcp-section-title">ماذا ستعيشين في هذا الكورس؟</h2>

            <div className="fcp-benefits-grid">
                {benefits.map((benefit, i) => (
                    <motion.div
                        key={i}
                        className="fcp-benefit-card"
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.08, duration: 0.5 }}
                    >
                        <span className="fcp-benefit-icon">✦</span>
                        <p>{benefit}</p>
                    </motion.div>
                ))}
            </div>
        </motion.section>
    );
};

export default FreeCourseBenefits;
