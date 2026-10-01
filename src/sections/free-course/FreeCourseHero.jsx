import React from 'react';
import { motion } from 'framer-motion';

const FreeCourseHero = () => {
    return (
        <header className="fcp-hero">
            <motion.div
                className="fcp-hero-tag"
                initial={{ opacity: 0, y: -8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1, duration: 0.6 }}
            >
                <span>كورس مجاني</span>
            </motion.div>

            <motion.h1
                className="fcp-hero-title"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.7 }}
            >
                التحرر من المشاعر السلبية
                <br />
                <span className="fcp-hero-title-serif">وشفاء الطفل الداخلي</span>
            </motion.h1>

            <motion.p
                className="fcp-hero-subtitle"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.35, duration: 0.6 }}
            >
                رحلة تحرر حقيقية — مجاناً — لأنك تستحقين أن تكتشفي قوتك الداخلية
            </motion.p>
        </header>
    );
};

export default FreeCourseHero;
