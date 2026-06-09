export default function About() {
  return (
    <main className="min-h-screen bg-white">
      {/* Header */}
      <section className="bg-primary-blue text-white py-12 px-4 md:px-8 text-center">
        <h1 className="text-4xl font-bold mb-4">عن صدات الكويت</h1>
        <p className="text-xl opacity-90">قصتنا وتاريخنا</p>
      </section>

      {/* Story Section */}
      <section className="py-16 px-4 md:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center">قصتنا</h2>
          <p className="text-lg text-gray-700 mb-6 leading-relaxed">
            في عام 2015، بدأنا رحلتنا كمتجر صغير متخصص في صيانة الأجهزة الإلكترونية في الكويت. 
            كان حلمنا البسيط هو توفير خدمات إصلاح عالية الجودة بأسعار معقولة لكل أسرة كويتية.
          </p>
          <p className="text-lg text-gray-700 mb-6 leading-relaxed">
            بفضل التزامنا بالجودة والخدمة الممتازة، نمنا لنصبح من أفضل مراكز الصيانة والبيع في الكويت.
            اليوم، نخدم آلاف العملاء سنويًا ونقدم مجموعة واسعة من الأجهزة الإلكترونية الأصلية.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed">
            نفخر بفريقنا المدرب والمعتمد دوليًا، والذي يعمل بدون توقف لضمان رضاك بخدماتنا.
          </p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-gray-50 py-16 px-4 md:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center">إحصائياتنا</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { number: '10+', label: 'سنوات من الخبرة' },
              { number: '50K+', label: 'عميل مرضي' },
              { number: '500+', label: 'جهاز مصلح شهريًا' },
              { number: '99%', label: 'معدل الرضا' },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-4xl font-bold text-primary-blue mb-2">{stat.number}</div>
                <p className="text-gray-600">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 px-4 md:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center">فريقنا</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { role: 'المؤسس والمدير', name: 'أحمد الكويتي', expertise: 'خبير الإلكترونيات' },
              { role: 'رئيس الصيانة', name: 'محمد علي', expertise: 'تقني معتمد' },
              { role: 'مدير المبيعات', name: 'فاطمة الحمد', expertise: 'متخصصة العملاء' },
            ].map((member) => (
              <div key={member.name} className="text-center p-6 rounded-lg bg-gray-50">
                <div className="w-24 h-24 rounded-full bg-primary-blue mx-auto mb-4"></div>
                <h3 className="text-xl font-bold mb-1">{member.name}</h3>
                <p className="text-primary-blue font-semibold mb-2">{member.role}</p>
                <p className="text-gray-600">{member.expertise}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="bg-gray-50 py-16 px-4 md:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center">شهاداتنا والشراكات</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              'معتمدون من جنرال إليكتريك',
              'شركاء معتمدون من سامسونج',
              'مرخصون من وزارة التجارة الكويتية',
            ].map((cert) => (
              <div key={cert} className="p-6 border-2 border-primary-blue rounded-lg text-center">
                <p className="text-lg font-semibold text-primary-blue">{cert}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}