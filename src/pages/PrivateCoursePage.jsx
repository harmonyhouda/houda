import React, { useEffect, useMemo } from 'react';
import { useParams, useSearchParams, Link } from 'react-router-dom';
import { motion, useScroll, useTransform } from 'framer-motion';
import { 
  Play, 
  Clock, 
  ChevronRight, 
  ChevronLeft, 
  BookOpen, 
  Lightbulb, 
  AlertCircle,
  Home
} from 'lucide-react';
import privateCoursesData from '../data/privateCourses.json';
import './PrivateCoursePage.css';

const PrivateCoursePage = () => {
  const { accessKey } = useParams();
  const [searchParams, setSearchParams] = useSearchParams();
  const selectedLessonParam = searchParams.get('lesson');

  const { scrollY } = useScroll();
  const yDots = useTransform(scrollY, [0, 3000], [0, 250]);

  // Find course matching the secret access key
  const course = useMemo(() => {
    return privateCoursesData.find((c) => c.accessKey === accessKey);
  }, [accessKey]);

  const lessons = course?.lessons || [];

  // Currently active lesson (defaults to first lesson)
  const activeLesson = useMemo(() => {
    if (!lessons || lessons.length === 0) return null;
    if (selectedLessonParam) {
      const found = lessons.find((l) => l.id === selectedLessonParam);
      if (found) return found;
    }
    return lessons[0];
  }, [lessons, selectedLessonParam]);

  // Current lesson index in the list
  const activeIndex = lessons.findIndex((l) => l.id === activeLesson?.id);
  const hasPrev = activeIndex > 0;
  const hasNext = activeIndex >= 0 && activeIndex < lessons.length - 1;

  // Search engines noindex meta tag & dynamic title
  useEffect(() => {
    let metaRobots = document.querySelector('meta[name="robots"]');
    let created = false;

    if (!metaRobots) {
      metaRobots = document.createElement('meta');
      metaRobots.name = 'robots';
      document.head.appendChild(metaRobots);
      created = true;
    }
    const originalContent = metaRobots.content;
    metaRobots.content = 'noindex, nofollow';

    const originalTitle = document.title;
    if (course) {
      if (activeLesson) {
        document.title = `${activeLesson.title} | ${course.title}`;
      } else {
        document.title = `${course.title} | الحصص الخاصة`;
      }
    }

    return () => {
      if (created && metaRobots.parentNode) {
        metaRobots.parentNode.removeChild(metaRobots);
      } else if (metaRobots) {
        metaRobots.content = originalContent;
      }
      document.title = originalTitle;
    };
  }, [course, activeLesson]);

  // Scroll to top on lesson switch
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [selectedLessonParam]);

  // Resolve video embed URLs (optimized for Bunny.net Stream)
  const getEmbedUrl = (rawUrl) => {
    if (!rawUrl) return '';
    let url = rawUrl.trim();

    if (url.includes('<iframe')) {
      const match = url.match(/src=["']([^"']+)["']/i);
      if (match && match[1]) {
        url = match[1];
      }
    }

    if (url.includes('mediadelivery.net') || url.includes('bunnycdn.com')) {
      const baseUrl = url.split('?')[0];
      return `${baseUrl}?autoplay=false&loop=false&muted=false&preload=true&responsive=true`;
    }

    const ytRegex = /(?:youtube\.com\/(?:[^\/]+\/.+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtu\.be\/)([^"&?\/\s]{11})/i;
    const ytMatch = url.match(ytRegex);
    if (ytMatch && ytMatch[1]) {
      return `https://www.youtube.com/embed/${ytMatch[1]}?modestbranding=1&rel=0`;
    }

    const vimeoRegex = /vimeo\.com\/(?:video\/)?([0-9]+)/i;
    const vimeoMatch = url.match(vimeoRegex);
    if (vimeoMatch && vimeoMatch[1]) {
      return `https://player.vimeo.com/video/${vimeoMatch[1]}?byline=0&portrait=0&title=0`;
    }

    return url;
  };

  // Navigation handlers
  const openLesson = (lessonId) => {
    setSearchParams({ lesson: lessonId });
  };

  const handleNextLesson = () => {
    if (hasNext) {
      setSearchParams({ lesson: lessons[activeIndex + 1].id });
    }
  };

  const handlePrevLesson = () => {
    if (hasPrev) {
      setSearchParams({ lesson: lessons[activeIndex - 1].id });
    }
  };

  // Invalid access key view
  if (!course) {
    return (
      <main className="private-error-portal-light">
        <div className="ambient-dots-bg">
          <div className="dark-dots-field"></div>
          <div className="light-aurora aurora-gold"></div>
        </div>
        <div className="zen-error-page">
          <AlertCircle size={52} className="zen-error-icon" />
          <h1 className="zen-error-title">رابط الحصة غير صحيح أو غير متاح</h1>
          <p className="zen-error-text">
            يبدو أن الرابط السري المستخدم غير صالح أو تم تحديثه. يرجى التأكد من الرابط الصحيح الذي استلمتِه في رسالة الاشتراك.
          </p>
          <Link to="/" className="zen-error-btn">
            <Home size={18} />
            <span>العودة إلى الصفحة الرئيسية</span>
          </Link>
        </div>
      </main>
    );
  }

  const embedUrl = activeLesson ? getEmbedUrl(activeLesson.videoUrl) : '';
  const isDirectVideo = embedUrl.endsWith('.mp4') || embedUrl.endsWith('.webm');

  return (
    <motion.main 
      className="private-light-dots-portal"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      {/* LIGHT LIVING BACKGROUND WITH DARK TEXTURE DOTS & PASTEL AURORAS */}
      <div className="ambient-dots-bg">
        <motion.div className="dark-dots-field" style={{ y: yDots }}></motion.div>
        
        {/* Soft Breathing Pastel Auroras */}
        <div className="light-aurora aurora-gold"></div>
        <div className="light-aurora aurora-purple"></div>

        {/* Floating Subtle Particles (نقاط حية عائمة) */}
        <div className="floating-dark-particle p-1"></div>
        <div className="floating-dark-particle p-2"></div>
        <div className="floating-dark-particle p-3"></div>
        <div className="floating-dark-particle p-4"></div>
      </div>

      <div className="portal-content-container">
        {/* Slender Top Bar: Course Title + Lesson Tag */}
        <div className="portal-top-bar">
          <div className="portal-bar-course-title">
            <span>{course.title}</span>
          </div>

          <div className="portal-course-crumb">
            <span className="crumb-lesson-tag">
              {activeLesson.number ? `الحصة ${activeLesson.number}` : `الحصة ${activeIndex + 1}`}
            </span>
          </div>
        </div>

        {/* Top Lesson Header */}
        <header className="portal-lesson-header">
          <h1 className="portal-lesson-title">{activeLesson.title}</h1>
          <div className="portal-lesson-meta">
            <span className="meta-badge-tag">
              {activeLesson.number ? `الحصة رقم ${activeLesson.number}` : `الحصة رقم ${activeIndex + 1}`}
            </span>
            {activeLesson.duration && (
              <>
                <span className="meta-separator">•</span>
                <Clock size={15} />
                <span>المدة: {activeLesson.duration}</span>
              </>
            )}
          </div>
        </header>

        {/* Main Grid: Video Column + Playlist Sidebar */}
        <div className="portal-main-grid">
          {/* Main Video Player & Navigation Controls */}
          <section className="portal-player-block">
            {/* Player Card */}
            <div 
              className="portal-player-card" 
              onContextMenu={(e) => e.preventDefault()}
              title="فيديو محمي خاص بالمشتركين"
            >
              <div className="portal-player-aspect">
                {isDirectVideo ? (
                  <video 
                    src={embedUrl} 
                    controls 
                    controlsList="nodownload" 
                    className="portal-player-video"
                    playsInline
                  />
                ) : embedUrl ? (
                  <iframe
                    src={embedUrl}
                    title={activeLesson.title}
                    className="portal-player-iframe"
                    loading="lazy"
                    allow="accelerometer; gyroscope; autoplay; encrypted-media; picture-in-picture;"
                    allowFullScreen={true}
                  ></iframe>
                ) : (
                  <div className="portal-player-empty">
                    <Play size={48} />
                  </div>
                )}
              </div>
            </div>

            {/* Previous / Next Lesson Controls */}
            <div className="portal-control-bar">
              <button 
                onClick={handlePrevLesson} 
                disabled={!hasPrev} 
                className="portal-step-btn"
                aria-label="الحصة السابقة"
              >
                <ChevronRight size={18} />
                <span>الحصة السابقة</span>
              </button>

              <button 
                onClick={handleNextLesson} 
                disabled={!hasNext} 
                className="portal-step-btn"
                aria-label="الحصة التالية"
              >
                <span>الحصة التالية</span>
                <ChevronLeft size={18} />
              </button>
            </div>
          </section>

          {/* Right Sidebar: Lessons Playlist (Curriculum) */}
          <aside className="portal-sidebar-col" id="curriculum-sidebar">
            <div className="portal-sidebar-card">
              <div className="portal-sidebar-header">
                <div className="portal-sidebar-title">
                  <BookOpen size={20} />
                  <span>فهرس الحصص</span>
                </div>
                <span className="portal-sidebar-count">{lessons.length} حصص</span>
              </div>

              <div className="portal-curriculum-list">
                {lessons.map((item) => {
                  const isActive = item.id === activeLesson.id;
                  return (
                    <button 
                      key={item.id} 
                      onClick={() => openLesson(item.id)} 
                      className={`portal-curriculum-item ${isActive ? 'active' : ''}`}
                    >
                      <div className="portal-item-right">
                        <div className="portal-item-icon">
                          <Play size={14} fill={isActive ? 'currentColor' : 'none'} />
                        </div>
                        <div className="portal-item-texts">
                          <div className="portal-item-title">
                            {item.number ? `حصة ${item.number}: ` : ''}{item.title}
                          </div>
                          {item.duration && <div className="portal-item-duration">{item.duration}</div>}
                        </div>
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>
          </aside>

          {/* Guidance Notes (توجيهات وإرشادات مهمة) */}
          <div className="portal-info-card">
            <div className="portal-notes-title">
              <Lightbulb size={18} />
              <span>توجيهات وإرشادات مهمة:</span>
            </div>
            <ul className="portal-notes-list">
              <li>خصّصي مكاناً هادئاً ومريحاً بعيداً عن المقاطعات.</li>
              <li>جهّزي دفتراً خاصاً لتدوين الإدراكات والمشاعر التي تطفو أثناء الحصة.</li>
            </ul>
          </div>
        </div>
      </div>
    </motion.main>
  );
};

export default PrivateCoursePage;
