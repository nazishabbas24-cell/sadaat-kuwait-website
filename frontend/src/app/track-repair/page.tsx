'use client';

import { useState } from 'react';

export default function TrackRepair() {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [repairs, setRepairs] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSearch = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/repairs/status/${phoneNumber}`
      );
      if (!response.ok) throw new Error('لم نجد إصلاحات');
      const data = await response.json();
      setRepairs(data.data);
    } catch (err) {
      setError('حدث خطأ');
    } finally {
      setLoading(false);
    }
  };

  const statusSteps = [
    { key: 'pending', label: 'في الانتظار', icon: '⏳' },
    { key: 'diagnosis', label: 'التشخيص', icon: '🔍' },
    { key: 'parts_ordered', label: 'طلب القطع', icon: '📦' },
    { key: 'repaired', label: 'مصلح', icon: '✅' },
    { key: 'ready_for_pickup', label: 'جاهز', icon: '📍' },
  ];

  return (
    <main className="min-h-screen bg-white">
      <section className="bg-primary-blue text-white py-12 px-4 md:px-8 text-center">
        <h1 className="text-4xl font-bold mb-4">تتبع صيانتك</h1>
        <p className="text-xl opacity-90">معرفة حالة جهازك الآن</p>
      </section>

      <section className="py-12 px-4 md:px-8">
        <div className="max-w-2xl mx-auto">
          <form onSubmit={handleSearch} className="mb-12 flex gap-4">
            <input
              type="tel"
              placeholder="رقم الهاتف"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
              required
              className="flex-1 px-4 py-3 border-2 border-gray-300 rounded-lg"
            />
            <button type="submit" className="btn-primary px-8" disabled={loading}>
              {loading ? 'جاري...' : '🔍 بحث'}
            </button>
          </form>

          {error && <div className="bg-red-500 text-white p-4 rounded-lg mb-8">{error}</div>}

          {repairs.map((repair: any) => (
            <div key={repair._id} className="bg-gray-50 p-8 rounded-lg mb-6">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                <div>
                  <p className="text-gray-600 text-sm">الجهاز</p>
                  <p className="font-bold">{repair.deviceType}</p>
                </div>
                <div>
                  <p className="text-gray-600 text-sm">الماركة</p>
                  <p className="font-bold">{repair.deviceBrand || 'N/A'}</p>
                </div>
                <div>
                  <p className="text-gray-600 text-sm">التاريخ</p>
                  <p className="font-bold">{new Date(repair.createdAt).toLocaleDateString('ar-KW')}</p>
                </div>
                <div>
                  <p className="text-gray-600 text-sm">السعر</p>
                  <p className="font-bold text-primary-blue">{repair.estimatedPrice} د.ك</p>
                </div>
              </div>

              <div className="bg-white p-4 rounded-lg border-2 border-gray-200 mb-6">
                <p className="text-gray-600 text-sm">المشكلة</p>
                <p>{repair.issueDescription}</p>
              </div>

              <div>
                <h3 className="font-bold mb-4">حالة الصيانة</h3>
                <div className="flex justify-between">
                  {statusSteps.map((step, idx) => (
                    <div key={step.key} className="flex flex-col items-center">
                      <div className="w-10 h-10 rounded-full bg-primary-blue text-white flex items-center justify-center text-lg mb-2">
                        {step.icon}
                      </div>
                      <p className="text-xs text-center">{step.label}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}