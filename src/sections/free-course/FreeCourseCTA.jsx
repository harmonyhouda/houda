import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

const FreeCourseCTA = () => {
    return (
        <motion.section
            className="fcp-cta-section"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.7 }}
        >
            <div className="fcp-cta-card">
                <div className="fcp-cta-glow" />
                <Sparkles size={32} className="fcp-cta-sparkle" />
                <h2 className="fcp-cta-title">هل أنتِ مستعدة للمزيد؟</h2>
                <p className="fcp-cta-text">
                    اكتشفي دوراتنا الكاملة للتحول العميق وبناء نسختك الأعلى
                </p>
                <Link to="/services" className="fcp-cta-btn">
                    <span>تصفحي الدورات</span>
                    <ArrowLeft size={20} />
                </Link>
            </div>
        </motion.section>
    );
};

export default FreeCourseCTA;
