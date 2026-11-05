import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ProgramHero from '../sections/program-details/ProgramHero';
import ProgramCurriculum from '../sections/program-details/ProgramCurriculum';
import ProgramTickets from '../sections/program-details/ProgramTickets';
import Testimonials from '../sections/home/Testimonials';
import PaymentMethods from '../sections/program-details/PaymentMethods';

import programsData from '../data/programs.json';
import coursesData from '../data/courses.json';

const ProgramDetails = () => {
    const { slug } = useParams();
    
    // جمع كل البيانات والبحث عن العنصر المطابق للرابط
    const allItems = [...programsData, ...coursesData];
    const data = allItems.find(item => item.slug === slug);

    // التمرير للأعلى عند تغيير الصفحة
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [slug]);

    if (!data) {
        return (
            <div style={{ 
                minHeight: '60vh',
                display: 'flex', 
                flexDirection: 'column',
                alignItems: 'center', 
                justifyContent: 'center',
                textAlign: 'center', 
                color: 'var(--purple-deep)',
                gap: '16px',
                padding: '40px'
            }}>
                <span style={{ fontSize: '3rem' }}>🔍</span>
                <h2 style={{ fontSize: '1.5rem', fontWeight: 700 }}>البرنامج غير موجود</h2>
                <p style={{ opacity: 0.7 }}>الرابط الذي فتحتِه غير صحيح أو تم تغييره.</p>
                <a href="/" style={{ color: 'var(--gold)', fontWeight: 600, textDecoration: 'underline' }}>العودة للرئيسية ←</a>
            </div>
        );
    }

    return (
        <main className="program-details-page">
            <ProgramHero data={data.hero} tickets={data.tickets} />
            {data.curriculum && <ProgramCurriculum data={data.curriculum} />}
            {data.tickets && <ProgramTickets tickets={data.tickets} />}
            <Testimonials isCompact={true} />
            <PaymentMethods isFeatured={data.isFeatured} />
        </main>
    );
};

export default ProgramDetails;
