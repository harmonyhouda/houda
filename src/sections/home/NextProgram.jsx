import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import coursesData from '../../data/courses.json';

const NextProgram = () => {
    // Find all featured courses sorted by id ascending (smaller id first)
    const featuredCourses = coursesData
        .filter(c => c.isFeatured)
        .sort((a, b) => a.id.localeCompare(b.id));
    const [selectedIdx, setSelectedIdx] = useState(0);

    // If no featured course found, fallback to the first course
    const activeCourse = (featuredCourses.length > 0 ? featuredCourses[selectedIdx] : coursesData[0]) || coursesData[0];

    return (
        <section id="next-program" className="lumine-section">
            <style>{`
                .lumine-tabs-wrapper {
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    margin-bottom: 50px;
                }
                .lumine-tabs-capsule {
                    display: inline-flex;
                    align-items: center;
                    gap: 8px;
                    background: rgba(45, 18, 68, 0.04);
                    border: 1px solid rgba(45, 18, 68, 0.1);
                    padding: 6px;
                    border-radius: 60px;
                    box-shadow: 0 4px 20px rgba(45, 18, 68, 0.03);
                    backdrop-filter: blur(8px);
                }
                .lumine-tab-btn {
                    border: 1px solid transparent;
                    background: transparent;
                    color: var(--purple-deep, #2D1244);
                    opacity: 0.65;
                    padding: 12px 28px;
                    border-radius: 50px;
                    font-size: 0.95rem;
                    font-weight: 600;
                    cursor: pointer;
                    transition: all 0.35s cubic-bezier(0.16, 1, 0.3, 1);
                    display: inline-flex;
                    align-items: center;
                    gap: 10px;
                    white-space: nowrap;
                    font-family: inherit;
                }
                .lumine-tab-btn:hover {
                    opacity: 0.95;
                    background: rgba(255, 255, 255, 0.5);
                }
                .lumine-tab-btn.active {
                    background: #FFFFFF;
                    color: var(--purple-deep, #2D1244);
                    opacity: 1;
                    font-weight: 700;
                    border-color: rgba(220, 160, 17, 0.4);
                    box-shadow: 0 8px 24px rgba(45, 18, 68, 0.08), 0 2px 6px rgba(220, 160, 17, 0.15);
                }
                .tab-dot {
                    width: 7px;
                    height: 7px;
                    border-radius: 50%;
                    background: var(--gold, #dca011);
                    display: inline-block;
                    box-shadow: 0 0 6px rgba(220, 160, 17, 0.6);
                }
                .l-img {
                    transition: transform 0.8s cubic-bezier(0.16, 1, 0.3, 1);
                }
                .l-frame:hover .l-img {
                    transform: scale(1.05);
                }
                .l-desc {
                    font-weight: 400;
                    opacity: 0.85;
                    line-height: 1.8;
                }
                @media (max-width: 600px) {
                    .lumine-tabs-capsule {
                        width: 100%;
                        flex-direction: column;
                        border-radius: 20px;
                        padding: 8px;
                    }
                    .lumine-tab-btn {
                        width: 100%;
                        justify-content: center;
                        padding: 10px 16px;
                        font-size: 0.88rem;
                    }
                }
            `}</style>
            <div className="lumine-container">
                {/* Switcher tabs placed at the very top of the section */}
                {featuredCourses.length > 1 && (
                    <div className="lumine-tabs-wrapper">
                        <div className="lumine-tabs-capsule">
                            {featuredCourses.map((c, index) => (
                                <button
                                    key={c.id || index}
                                    onClick={() => setSelectedIdx(index)}
                                    className={`lumine-tab-btn ${selectedIdx === index ? 'active' : ''}`}
                                >
                                    {selectedIdx === index && <span className="tab-dot" />}
                                    <span>{c.hero.title}</span>
                                </button>
                            ))}
                        </div>
                    </div>
                )}

                <div className="lumine-content">
                    <div className="zenith-meta">
                        <div className="meta-line"></div>
                        <div className="meta-text">{activeCourse.hero.tag}</div>
                    </div>

                    <h2 className="l-title">
                        {activeCourse.hero.title.split(' ')[0]} <br />
                        <span className="l-serif">{activeCourse.hero.title.split(' ').slice(1).join(' ')}</span>
                    </h2>

                    <div className="lumine-media">
                        <div className="l-frame">
                            <img src={activeCourse.hero.image} alt={activeCourse.hero.title} className="l-img" />
                            <div className="l-frame-accent"></div>
                        </div>
                    </div>

                    <p className="l-desc">
                        {activeCourse.hero.tagline}. {activeCourse.hero.description.slice(0, 150)}...
                    </p>

                    <div className="l-info-bar">
                        <div className="l-info-item">
                            <span className="li-label">البداية</span>
                            <span className="li-value">
                                {activeCourse.hero.stats.duration.includes('|') ? (
                                    <>
                                        {activeCourse.hero.stats.duration.split('|')[0].trim()}
                                        <br />
                                        <span className="li-subvalue" style={{ fontWeight: 400, opacity: 0.8, fontSize: '0.85rem', display: 'block', marginTop: '4px' }}>
                                            {activeCourse.hero.stats.duration.split('|')[1].trim()}
                                        </span>
                                    </>
                                ) : (
                                    activeCourse.hero.stats.duration
                                )}
                            </span>
                        </div>
                        <div className="l-info-divider"></div>
                        <div className="l-info-item">
                            <span className="li-label">المكان</span>
                            <span className="li-value">
                                {activeCourse.hero.stats.format.includes('|') ? (
                                    <>
                                        {activeCourse.hero.stats.format.split('|')[0].trim()}
                                        <br />
                                        <span className="li-subvalue" style={{ fontWeight: 400, opacity: 0.8, fontSize: '0.85rem', display: 'block', marginTop: '4px' }}>
                                            {activeCourse.hero.stats.format.split('|')[1].trim()}
                                        </span>
                                    </>
                                ) : (
                                    activeCourse.hero.stats.format
                                )}
                            </span>
                        </div>
                    </div>

                    <div className="l-action">
                        <Link to={`/program-details/${activeCourse.slug}`} className="btn-lumine">
                            اكتشفي المزيد <span>←</span>
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default NextProgram;
