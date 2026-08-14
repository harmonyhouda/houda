import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Download, Sparkles, ShieldCheck, ArrowLeft } from 'lucide-react';
import EmailCaptureModal from '../../components/EmailCaptureModal';

const BookletHero = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleDownloadClick = (e) => {
        e.preventDefault();
        setIsModalOpen(true);
    };

    return (
        <section className="landing-hero-premium">
            <div className="hero-ambient-glow-purple"></div>
            <div className="hero-ambient-glow-gold"></div>

            <div className="booklet-container">
                <div className="hero-premium-grid">
                    {/* Content Column */}
                    <div className="hero-content-column">
                        <h1 className="hero-premium-title">
                            دليلك العملي <br />
                            <span className="gradient-highlight">للتشافي الذاتي والوعي</span>
                        </h1>
                        
                        <p className="hero-premium-subtitle">
                            إذا كنت لا تعرف من أين تبدأ رحلة التشافي، فقد صُمم هذا الدليل ليكون أول خطوة لك نحو فهم نفسك، والتحرر من العوائق الداخلية، واستعادة السلام الداخلي.                        </p>

                        <div className="hero-meta-info">
                            <div className="meta-item">
                                <ShieldCheck size={18} className="meta-icon" />
                                <span>بداية هادئة وآمنة • تطبيقات عملية • PDF مجاني</span>
                            </div>
                        </div>

                        <div className="hero-actions">
                            <motion.a 
                                href="https://assets.houdaharmony.com/pdf/free-guide.pdf" 
                                download="Houda_Harmony_Free_Guide.pdf"
                                onClick={handleDownloadClick}
                                className="btn-hero-primary"
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                            >
                                <Download size={20} />
                                <span>تحميل الكتيب مجاناً الآن</span>
                            </motion.a>

                            <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                                <Link 
                                    to="/services" 
                                    className="btn-hero-secondary"
                                >
                                    <span>اكتشف الخدمات والجلسات</span>
                                    <ArrowLeft size={20} />
                                </Link>
                            </motion.div>
                        </div>
                    </div>

                    {/* Visual Column - Interactive 3D Book Mockup */}
                    <div className="hero-visual-column">
                        <div className="booklet-3d-scene">
                            <motion.div 
                                className="booklet-3d-card large-mockup"
                                animate={{ y: [0, -15, 0] }}
                                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                                whileHover={{ 
                                    rotateY: -15, 
                                    rotateX: 5,
                                    scale: 1.02,
                                    boxShadow: "0 40px 80px rgba(45, 18, 68, 0.3)"
                                }}
                                style={{ transformStyle: 'preserve-3d', perspective: 1200 }}
                            >
                                {/* Spine */}
                                <div className="book-spine"></div>
                                
                                {/* Front Cover */}
                                <div className="book-cover-front">
                                    <img 
                                        src="/free-guide-cover.png" 
                                        alt="غلاف كتيب التشافي الذاتي والوعي" 
                                        className="booklet-img-premium" 
                                    />
                                    <div className="book-reflection"></div>
                                </div>
                                
                                {/* Pages edge */}
                                <div className="book-pages-edge large-edge"></div>
                            </motion.div>
                        </div>
                        {/* Shadow */}
                        <div className="book-shadow-3d large-shadow"></div>
                    </div>
                </div>
            </div>
            <EmailCaptureModal 
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                resourceName="دليلك العملي للتشافي الذاتي والوعي"
                fileUrl="https://assets.houdaharmony.com/pdf/free-guide.pdf"
                fileName="Houda_Harmony_Free_Guide.pdf"
                listId={3} // معرف القائمة الافتراضي في Brevo للمسجلين عبر كتاب التشافي
            />
        </section>
    );
};

export default BookletHero;
