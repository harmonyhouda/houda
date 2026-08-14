import React, { useState } from 'react';
import { X, Mail, Download, AlertCircle, CheckCircle } from 'lucide-react';
import './EmailCaptureModal.css';

const EmailCaptureModal = ({ 
  isOpen, 
  onClose, 
  resourceName, 
  fileUrl, 
  fileName, 
  listId 
}) => {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState('idle'); // 'idle' | 'loading' | 'success' | 'error'
  const [errorMessage, setErrorMessage] = useState('');

  if (!isOpen) return null;

  const handleClose = () => {
    // إعادة تعيين الحالة عند الإغلاق
    setStatus('idle');
    setEmail('');
    setErrorMessage('');
    onClose();
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email) return;

    setStatus('loading');
    setErrorMessage('');

    try {
      // إرسال الإيميل وبيانات الكتيب إلى Vercel Serverless Function
      const response = await fetch('/api/subscribe', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email,
          listId,
          attributes: {
            // تخزين اسم الملف الذي قام بتحميله كسمة مخصصة في Brevo إذا كان الحقل مهيأ
            DOWNLOADED_RESOURCE: resourceName,
          }
        }),
      });

      const result = await response.json();

      if (response.ok) {
        setStatus('success');

        // بدء تنزيل الملف تلقائياً للمستخدم
        triggerDownload();

        // إغلاق النافذة المنبثقة تلقائياً بعد 3 ثوانٍ
        setTimeout(() => {
          handleClose();
        }, 3000);
      } else {
        setStatus('error');
        setErrorMessage(result.error || 'حدث خطأ أثناء الاشتراك. يرجى المحاولة لاحقاً.');
      }
    } catch (error) {
      console.error('Subscription error:', error);
      setStatus('error');
      setErrorMessage('تعذر الاتصال بالسيرفر. يرجى التحقق من اتصالك بالإنترنت.');
    }
  };

  const triggerDownload = async () => {
    try {
      const response = await fetch(fileUrl);
      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);
      
      const link = document.createElement('a');
      link.href = url;
      link.download = fileName || 'document.pdf';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      window.URL.revokeObjectURL(url);
    } catch (error) {
      console.error('Trigger download error:', error);
      // كحل احتياطي إذا فشل تنزيل الـ Blob (مثلاً بسبب مشكلة في CORS)
      window.open(fileUrl, '_blank');
    }
  };

  return (
    <div className="email-capture-overlay" onClick={handleClose}>
      <div className="email-capture-container" onClick={(e) => e.stopPropagation()}>
        {/* زر الإغلاق */}
        <button className="email-capture-close" onClick={handleClose} aria-label="إغلاق">
          <X size={20} />
        </button>

        <div className="email-capture-content">
          {status === 'success' ? (
            <div className="email-capture-success-state">
              <CheckCircle size={56} className="success-icon animate-bounce" />
              <h3>تم التسجيل بنجاح! 🎉</h3>
              <p>شكراً لاهتمامك. بدأ تنزيل <strong>{resourceName}</strong> الآن تلقائياً...</p>
              <span className="success-subtext">إذا لم يبدأ التحميل، <a href={fileUrl} target="_blank" rel="noreferrer" onClick={triggerDownload} className="success-link">اضغط هنا للتحميل المباشر</a></span>
            </div>
          ) : (
            <>
              <div className="email-capture-header">
                <div className="mail-icon-badge">
                  <Mail size={24} />
                </div>
                <h3>خطوة واحدة تفصلك عن التحميل!</h3>
                <p>أدخل بريدك الإلكتروني لتحميل <strong>{resourceName}</strong> مجاناً وبدء رحلتك.</p>
              </div>

              {status === 'error' && (
                <div className="email-capture-error-box">
                  <AlertCircle size={16} />
                  <span>{errorMessage}</span>
                </div>
              )}

              <form onSubmit={handleSubmit} className="email-capture-form">
                <div className="input-group">
                  <input
                    type="email"
                    placeholder="البريد الإلكتروني (مثال: name@example.com)"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    disabled={status === 'loading'}
                    className="email-input"
                  />
                </div>

                <button 
                  type="submit" 
                  disabled={status === 'loading'} 
                  className="email-submit-btn"
                >
                  {status === 'loading' ? (
                    <span>جاري تسجيل البيانات...</span>
                  ) : (
                    <>
                      <Download size={18} />
                      <span>إرسال وبدء التحميل</span>
                    </>
                  )}
                </button>
              </form>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default EmailCaptureModal;
