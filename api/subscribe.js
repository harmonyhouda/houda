// api/subscribe.js

export default async function handler(req, res) {
  // السماح بطلبات POST فقط
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'الطريقة غير مسموح بها (Method Not Allowed)' });
  }

  const { email, listId, attributes } = req.body;

  if (!email) {
    return res.status(400).json({ error: 'البريد الإلكتروني مطلوب (Email is required)' });
  }

  // الحصول على مفتاح API الخاص بـ Brevo من متغيرات البيئة
  const apiKey = process.env.BREVO_API_KEY;

  if (!apiKey) {
    console.error('خطأ: لم يتم تهيئة مفتاح BREVO_API_KEY في Vercel.');
    return res.status(500).json({ error: 'تهيئة السيرفر غير مكتملة. يرجى ضبط مفتاح الـ API.' });
  }

  try {
    // إعداد البيانات المراد إرسالها إلى Brevo API v3
    const requestBody = {
      email: email,
      updateEnabled: true, // في حال كان المشترك موجوداً، يتم تحديث بياناته بدلاً من تكراره
    };

    // إضافة معرف القائمة (List ID) إذا تم إرساله من الواجهة الأمامية
    if (listId) {
      requestBody.listIds = [Number(listId)];
    }

    // إضافة أي سمات مخصصة (مثل اسم الكتاب المُنزل) إذا أُرسلت
    if (attributes) {
      requestBody.attributes = attributes;
    }

    // إرسال الطلب إلى سيرفر Brevo
    const response = await fetch('https://api.brevo.com/v3/contacts', {
      method: 'POST',
      headers: {
        'accept': 'application/json',
        'content-type': 'application/json',
        'api-key': apiKey,
      },
      body: JSON.stringify(requestBody),
    });

    const data = await response.json().catch(() => ({}));

    // حالة 201 (تم الإنشاء) أو 204 (لا يوجد محتوى - تم التحديث بنجاح) أو 200 تعني النجاح
    if (response.ok || response.status === 201 || response.status === 204) {
      return res.status(200).json({ success: true, message: 'تم الاشتراك بنجاح!' });
    } else {
      console.error('Brevo API Error:', data);
      return res.status(response.status).json({ 
        error: data.message || 'حدث خطأ أثناء الاتصال بـ Brevo.' 
      });
    }
  } catch (error) {
    console.error('API Handler Error:', error);
    return res.status(500).json({ error: 'حدث خطأ داخلي في السيرفر.' });
  }
}
