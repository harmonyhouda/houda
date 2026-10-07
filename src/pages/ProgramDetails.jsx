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
    
    // Combiner et chercher l'item correspondant
    const allItems = [...programsData, ...coursesData];
    const data = allItems.find(item => item.slug === slug);

    // Défilement vers le haut au chargement
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [slug]);

    if (!data) {
        return <div style={{ padding: '200px', textAlign: 'center', color: 'var(--purple-deep)' }}>برنامج غير موجود</div>;
    }

    return (
        <main className="program-details-page">
            <ProgramHero data={data.hero} tickets={data.tickets} />
            <ProgramCurriculum data={data.curriculum} />
            {data.tickets && <ProgramTickets tickets={data.tickets} />}
            <Testimonials isCompact={true} />
            <PaymentMethods isFeatured={data.isFeatured} />
        </main>
    );
};

export default ProgramDetails;
