import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Download, BookOpen, Sparkles } from 'lucide-react';
import EmailCaptureModal from '../../components/EmailCaptureModal';

const FreeBookletSection = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleDownloadClick = (e) => {
        e.preventDefault();
        setIsModalOpen(true);
    };

    return (
        <section id="free-booklet" className="booklet-premium-section minimalist">
            {/* Ambient Background Lights */}
            <div className="booklet-ambient-glow-purple"></div>
            <div className="booklet-ambient-glow-gold"></div>
            
            <div className="booklet-container">
                <div className="booklet-grid">
                    {/* Mobile-only Badge (rendered above the book image on mobile) */}
                    <div className="premium-badge-wrapper mobile-only" style={{ marginBottom: '20px', alignSelf: 'center' }}>
                        <span className="premium-badge">
                            <Sparkles size={14} className="badge-sparkle-icon" />
                            هدية ترحيبية مجانية
                        </span>
                    </div>

                    {/* Visual Column - The 3D Book Mockup */}
                    <div className="booklet-visual-wrapper">
                        <div className="booklet-3d-scene">
                            <motion.div 
                                className="booklet-3d-card"
                                animate={{ y: [0, -12, 0] }}
                                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                                whileHover={{ 
                                    rotateY: -15, 
                                    rotateX: 5,
                                    scale: 1.03,
                                    boxShadow: "0 30px 60px rgba(45, 18, 68, 0.25)"
                                }}
                                style={{ transformStyle: 'preserve-3d', perspective: 1000 }}
                            >
                                {/* Spine of the book */}
                                <div className="book-spine"></div>
                                
                                {/* Front Cover */}
                                <div className="book-cover-front">
                                    <img 
                                        src="/free-guide-cover.png" 
                                        alt="غلاف كتيب دليل الوعي والتشافي المجاني" 
                                        className="booklet-img-premium" 
                                    />
                                    {/* Reflection overlay */}
                                    <div className="book-reflection"></div>
                                </div>
                                
                                {/* Pages edge effect */}
                                <div className="book-pages-edge"></div>
                            </motion.div>
                        </div>
                        {/* Shadow under the book */}
                        <div className="book-shadow-3d"></div>
                    </div>

                    {/* Content Column */}
                    <div className="booklet-content-info minimalist-info">
                        <div className="premium-badge-wrapper desktop-only">
                            <span className="premium-badge">
                                <Sparkles size={14} className="badge-sparkle-icon" />
                                هدية ترحيبية مجانية
                            </span>
                        </div>
                        
                        <h2 className="booklet-premium-title">
                            <span className="gold-subtitle">لا تعرف من أين تبدأ رحلة التغيير؟</span>
                            دليلك العملي للتشافي الذاتي والوعي
                        </h2>

                        <p className="booklet-premium-desc">
                            إذا كنت لا تعرف من أين تبدأ، أو تشعر بالحيرة، فهذا الدليل صُمم خصيصًا لمساعدتك على فهم عالمك الداخلي، والتحرر من العوائق النفسية، والبدء بخطوات عملية بسيطة نحو السلام الداخلي.                        </p>

                        {/* Interactive Action buttons */}
                        <div className="booklet-premium-actions">
                            <motion.a 
                                href="https://assets.houdaharmony.com/pdf/free-guide.pdf" 
                                download="Houda_Harmony_Free_Guide.pdf"
                                onClick={handleDownloadClick}
                                className="btn-premium-primary"
                                aria-label="تحميل الكتيب المجاني بصيغة PDF"
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                            >
                                <Download size={18} />
                                <span>تحميل الكتيب مجاناً</span>
                            </motion.a>
                            
                            <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                                <Link 
                                    to="/free-guide" 
                                    className="btn-premium-secondary"
                                    aria-label="عرض تفاصيل وأبواب الكتيب"
                                >
                                    <BookOpen size={18} />
                                    <span>أبواب وتفاصيل الكتيب</span>
                                </Link>
                            </motion.div>
                        </div>
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

export default FreeBookletSection;
