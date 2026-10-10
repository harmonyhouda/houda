import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useLenis } from 'lenis/react';

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [activeSection, setActiveSection] = useState('home');
    const location = useLocation();
    const lenis = useLenis();
    const isHome = location.pathname === '/';

    useEffect(() => {
        if (isMobileMenuOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [isMobileMenuOpen]);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        if (!isHome) return;

        const options = {
            threshold: 0.2,
            rootMargin: '-10% 0px -40% 0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    setActiveSection(entry.target.id);
                }
            });
        }, options);

        const sections = ['home', 'services', 'testimonials', 'faq'];
        sections.forEach(id => {
            const el = document.getElementById(id);
            if (el) observer.observe(el);
        });

        return () => observer.disconnect();
    }, [isHome]);

    const scrollToSection = (e, id) => {
        e.preventDefault();
        setIsMobileMenuOpen(false);
        const el = document.getElementById(id);
        if (el) {
            if (lenis) {
                lenis.scrollTo(el, { offset: -100 });
            } else {
                const offset = 100;
                const bodyRect = document.body.getBoundingClientRect().top;
                const elementRect = el.getBoundingClientRect().top;
                const elementPosition = elementRect - bodyRect;
                const offsetPosition = elementPosition - offset;

                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
            }
        }
    };

    return (
        <nav className={`navbar glass-nav ${isScrolled ? 'scrolled' : ''} ${isMobileMenuOpen ? 'menu-open' : ''}`}>
            <div className="nav-container">
                <Link to="/" className="logo" onClick={() => setIsMobileMenuOpen(false)}>
                    <img src="https://assets.houdaharmony.com/img/logo-premium.png" alt="Houda Harmony" className="logo-img" />
                </Link>

                <ul className="nav-links">
                    <li>
                        {isHome ? (
                            <a
                                href="#home"
                                onClick={(e) => scrollToSection(e, 'home')}
                                className={activeSection === 'home' ? 'active' : ''}
                            >الرئيسية</a>
                        ) : (
                            <Link to="/" className={location.pathname === '/' ? 'active' : ''}>
                                الرئيسية
                            </Link>
                        )}
                    </li>
                    <li>
                        <Link
                            to="/about"
                            className={location.pathname === '/about' ? 'active' : ''}
                        >
                            من أنا
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="/services"
                            className={location.pathname === '/services' ? 'active' : ''}
                        >
                            الخدمات
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="/meditations"
                            className={location.pathname === '/meditations' || location.pathname.startsWith('/meditations/') ? 'active' : ''}
                        >
                            تأملات
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="/free-guide"
                            className={location.pathname === '/free-guide' ? 'active' : ''}
                        >
                            كتيب مجاني
                        </Link>
                    </li>
                    {/* تم إخفاء رابط الكورس المجاني مؤقتاً
                    <li>
                        <Link
                            to="/free-course"
                            className={location.pathname === '/free-course' ? 'active' : ''}
                        >
                            كورس مجاني
                        </Link>
                    </li>
                    */}
                    <li>
                        {isHome ? (
                            <a
                                href="#testimonials"
                                onClick={(e) => scrollToSection(e, 'testimonials')}
                                className={activeSection === 'testimonials' ? 'active' : ''}
                            >آراء الناس</a>
                        ) : (
                            <Link to="/#testimonials">آراء الناس</Link>
                        )}
                    </li>

                    <li>
                        {isHome ? (
                            <a
                                href="#faq"
                                onClick={(e) => scrollToSection(e, 'faq')}
                                className={activeSection === 'faq' ? 'active' : ''}
                            >الأسئلة</a>
                        ) : (
                            <Link to="/#faq">الأسئلة</Link>
                        )}
                    </li>
                </ul>

                <div className="nav-actions">
                    <Link to="/services" className="btn btn-nav desktop-only">احجز جلسة <span>←</span></Link>

                    <button
                        className={`hamburger ${isMobileMenuOpen ? 'active' : ''}`}
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        aria-label="Menu"
                    >
                        <span></span>
                        <span></span>
                        <span></span>
                    </button>
                </div>
            </div>

            {/* Mobile Menu Overlay */}
            <div className={`mobile-menu ${isMobileMenuOpen ? 'active' : ''}`}>
                <div className="mobile-menu-content">
                    <ul className="mobile-nav-links">
                        <li>
                            {isHome ? (
                                <a href="#home" onClick={(e) => scrollToSection(e, 'home')}>الرئيسية</a>
                            ) : (
                                <Link to="/" onClick={() => setIsMobileMenuOpen(false)}>الرئيسية</Link>
                            )}
                        </li>
                        <li><Link to="/about" onClick={() => setIsMobileMenuOpen(false)}>من أنا</Link></li>
                        <li><Link to="/services" onClick={() => setIsMobileMenuOpen(false)}>الخدمات</Link></li>
                        <li><Link to="/meditations" onClick={() => setIsMobileMenuOpen(false)}>تأملات</Link></li>
                        <li><Link to="/free-guide" onClick={() => setIsMobileMenuOpen(false)}>كتيب مجاني</Link></li>
                        {/* تم إخفاء رابط الكورس المجاني للجوال: <li><Link to="/free-course" onClick={() => setIsMobileMenuOpen(false)} >كورس مجاني</Link></li> */}
                        <li>
                            {isHome ? (
                                <a href="#testimonials" onClick={(e) => scrollToSection(e, 'testimonials')}>آراء الناس</a>
                            ) : (
                                <Link to="/#testimonials" onClick={() => setIsMobileMenuOpen(false)}>آراء الناس</Link>
                            )}
                        </li>
                        <li>
                            {isHome ? (
                                <a href="#faq" onClick={(e) => scrollToSection(e, 'faq')}>الأسئلة</a>
                            ) : (
                                <Link to="/#faq" onClick={() => setIsMobileMenuOpen(false)}>الأسئلة</Link>
                            )}
                        </li>
                    </ul>
                    <Link to="/services" className="btn btn-nav mobile-cta" onClick={() => setIsMobileMenuOpen(false)}>
                        احجز جلسة <span>←</span>
                    </Link>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
