import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Youtube, Phone, Send } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="footer-zenith">
            <div className="footer-main-container">
                <div className="footer-grid">
                    {/* Column 1: Brand */}
                    <div className="footer-col col-brand">
                        <div className="footer-logo-premium">
                            <img src="https://assets.houdaharmony.com/img/logo-premium.png" alt="Houda Harmony" className="footer-logo-img" />
                        </div>
                        <p className="footer-manifesto">
                            التميز في خدمة تحولك. نهج شمولي يجمع بين القوة الذهنية والسكينة العميقة لقادة الغد.
                        </p>
                        <div className="footer-social-premium">
                            <a href="https://www.instagram.com/houdaharmony" target="_blank" rel="noopener noreferrer" className="social-icon" aria-label="Instagram"><Instagram size={18} /></a>
                            <a href="https://wa.me/212643354739" target="_blank" rel="noopener noreferrer" className="social-icon" aria-label="WhatsApp">
                                <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor"><path d="M12.004 2c-5.518 0-9.998 4.48-9.998 9.997 0 2.006.592 3.874 1.614 5.434L2 22l4.71-1.537c1.517.979 3.316 1.534 5.294 1.534 5.518 0 9.998-4.48 9.998-9.997C22.002 6.48 17.522 2 12.004 2zm5.735 14.18c-.244.688-1.206 1.25-1.734 1.302-.472.047-.946.068-2.985-.758-2.607-1.056-4.288-3.714-4.419-3.889-.13-.175-1.053-1.401-1.053-2.671 0-1.27.656-1.892.888-2.138.232-.246.502-.307.67-.307.168 0 .335.002.48.009.15.008.353-.057.553.432.203.498.694 1.693.754 1.817.06.124.1.268.017.433-.083.165-.124.268-.248.412-.124.145-.26.323-.371.433-.124.124-.253.258-.108.506.145.247.643 1.062 1.38 1.717.949.846 1.747 1.109 1.995 1.233.248.124.392.103.537-.062.145-.165.62-.722.786-.969.166-.247.331-.206.553-.124.224.082 1.41.666 1.652.786.242.12.403.182.463.285.06.103.06.598-.184 1.286z"/></svg>
                            </a>
                            <a href="https://t.me/+lzpA0vhnaqplZGQ0" target="_blank" rel="noopener noreferrer" className="social-icon" aria-label="Telegram">
                                <Send size={18} />
                            </a>
                            <a href="https://www.tiktok.com/@houdaharmony8" target="_blank" rel="noopener noreferrer" className="social-icon" aria-label="TikTok">
                                <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor"><path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.17-2.86-.6-4.12-1.31a6.34 6.34 0 0 1-2.22-2.02v9.52c.03 2.19-.88 4.38-2.58 5.79-1.74 1.48-4.22 2.01-6.42 1.44-2.26-.54-4.22-2.19-5.1-4.32a9.17 9.17 0 0 1-.36-6.84c.73-2.31 2.65-4.21 4.95-4.93 1.01-.32 2.08-.41 3.13-.27v4.03c-.5-.13-1.03-.13-1.54-.04-1.07.19-2.06.87-2.6 1.83-.56 1-.61 2.22-.16 3.25.43 1.03 1.41 1.84 2.5 2.1 1.1.28 2.34.12 3.32-.47.98-.6 1.57-1.68 1.61-2.81V.02z" /></svg>
                            </a>
                            <a href="https://www.youtube.com/@Houdaharmony" target="_blank" rel="noopener noreferrer" className="social-icon" aria-label="YouTube"><Youtube size={18} /></a>
                        </div>
                    </div>

                    {/* Column 2: Navigation */}
                    <div className="footer-col">
                        <h4 className="footer-col-title">استكشاف</h4>
                        <ul className="footer-links-premium">
                            <li><Link to="/">الرئيسية</Link></li>
                            <li><Link to="/about">من أنا</Link></li>
                            <li><Link to="/services">الخدمات والعروض</Link></li>
                            <li><Link to="/free-guide">الكتيب المجاني</Link></li>
                        </ul>
                    </div>

                    {/* Column 3: Program */}
                    <div className="footer-col">
                        <h4 className="footer-col-title">البرامج</h4>
                        <ul className="footer-links-premium">
                            <li><Link to="/services">جلسات عبر الإنترنت</Link></li>
                            <li><Link to="/services">دروس مسجلة</Link></li>
                            <li><Link to="/services">تأملات</Link></li>
                        </ul>
                    </div>

                    {/* Column 4: Contact */}
                    <div className="footer-col">
                        <h4 className="footer-col-title">اتصال</h4>
                        <address className="footer-address">
                            <a href="https://wa.me/212643354739" target="_blank" rel="noopener noreferrer" className="contact-link">
                                <Phone size={14} /> +212 643-354739
                            </a>
                        </address>
                    </div>
                </div>

                <div className="footer-copyright-premium">
                    <div className="copyright-left">
                        © 2026 HOUDA HARMONY. فن التوازن.
                    </div>
                    <div className="copyright-right">
                        <Link to="/legal">سياسة الخصوصية</Link>
                        <span className="divider"></span>
                        <Link to="/legal">الشروط القانونية</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
