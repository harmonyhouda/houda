import React from 'react';
import { motion } from 'framer-motion';

// ✅ رابط Bunny بنفس إعدادات دورة تذكر
const BUNNY_IFRAME_SRC = "https://player.mediadelivery.net/embed/707960/1ed39500-2278-4e11-843f-c77bdca357a2?autoplay=false&loop=false&muted=false&preload=true&responsive=true";

const FreeCourseVideo = () => {
    return (
        <motion.section
            className="fcp-video-section"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
        >
            <div className="fcp-video-wrapper">
                <div className="fcp-iframe-container">
                    <iframe
                        src={BUNNY_IFRAME_SRC}
                        title="كورس التحرر من المشاعر السلبية وشفاء الطفل الداخلي"
                        className="fcp-video-iframe"
                        loading="lazy"
                        allow="accelerometer; gyroscope; autoplay; encrypted-media; picture-in-picture;"
                        allowFullScreen={true}
                    ></iframe>
                </div>
            </div>
        </motion.section>
    );
};

export default FreeCourseVideo;

