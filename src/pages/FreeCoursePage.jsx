import React from 'react';
import { motion } from 'framer-motion';
import FreeCourseHero from '../sections/free-course/FreeCourseHero';
import FreeCourseVideo from '../sections/free-course/FreeCourseVideo';
import FreeCourseBenefits from '../sections/free-course/FreeCourseBenefits';

import FreeCourseCTA from '../sections/free-course/FreeCourseCTA';
import '../sections/free-course/FreeCourse.css';

const FreeCoursePage = () => {
    return (
        <motion.main
            className="free-course-page"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            style={{ direction: 'rtl', textAlign: 'right' }}
        >
            {/* Background decorations */}
            <div className="fcp-bg">
                <div className="fcp-orb fcp-orb-gold" />
                <div className="fcp-orb fcp-orb-purple" />
                <div className="fcp-orb fcp-orb-teal" />
                <svg className="fcp-wave-top" viewBox="0 0 1440 200" fill="none">
                    <path
                        d="M-100 100 C 300 250, 700 -50, 1100 120 C 1300 190, 1500 120, 1600 100"
                        stroke="rgba(220, 160, 17, 0.18)"
                        strokeWidth="2.5"
                        strokeLinecap="round"
                    />
                </svg>
                <svg className="fcp-wave-bottom" viewBox="0 0 1440 200" fill="none">
                    <path
                        d="M-50 50 C 350 -50, 750 200, 1150 80 C 1350 20, 1550 80, 1650 100"
                        stroke="rgba(108, 62, 145, 0.15)"
                        strokeWidth="2.5"
                        strokeLinecap="round"
                    />
                </svg>
            </div>

            {/* Page sections */}
            <div className="fcp-wrapper">
                <FreeCourseHero />
                <FreeCourseVideo />
                <FreeCourseBenefits />
                <FreeCourseCTA />
            </div>
        </motion.main>
    );
};

export default FreeCoursePage;
