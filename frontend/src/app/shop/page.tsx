'use client';

import { useState } from 'react';

export default function Shop() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [priceRange, setPriceRange] = useState([0, 5000]);

  const products = [
    {
      id: 1,
      name: 'iPhone 15 Pro',
      category: 'phones',
      price: 1299,
      image: '📱',
      brand: 'Apple',
      stock: 5,
      featured: true,
    },
    {
      id: 2,
      name: 'Samsung Galaxy S24',
      category: 'phones',
      price: 999,
      image: '📱',
      brand: 'Samsung',
      stock: 8,
      featured: true,
    },
    {
      id: 3,
      name: 'MacBook Pro 16',
      category: 'laptops',
      price: 2499,
      image: '💻',
      brand: 'Apple',
      stock: 3,
      featured: true,
    },
    {
      id: 4,
      name: 'Dell XPS 15',
      category: 'laptops',
      price: 1799,
      image: '💻',
      brand: 'Dell',
      stock: 6,
    },
    {
      id: 5,
      name: 'iPad Pro 12.9',
      category: 'tablets',
      price: 1199,
      image: '📱',
      brand: 'Apple',
      stock: 4,
    },
    {
      id: 6,
      name: 'Samsung Galaxy Tab S9',
      category: 'tablets',
      price: 799,
      image: '📱',
      brand: 'Samsung',
      stock: 7,
    },
    {
      id: 7,
      name: 'Sony WH-1000XM5',
      category: 'audio',
      price: 399,
      image: '🎧',
      brand: 'Sony',
      stock: 12,
    },
    {
      id: 8,
      name: 'Apple AirPods Pro',
      category: 'audio',
      price: 249,
      image: '🎧',
      brand: 'Apple',
      stock: 15,
    },
    {
      id: 9,
      name: 'PS5 Console',
      category: 'gaming',
      price: 499,
      image: '🎮',
      brand: 'Sony',
      stock: 2,
    },
    {
      id: 10,
      name: 'Xbox Series X',
      category: 'gaming',
      price: 499,
      image: '🎮',
      brand: 'Microsoft',
      stock: 3,
    },
  ];

  const categories = [
    { id: 'all', name: 'الكل', icon: '📦' },
    { id: 'phones', name: 'الهواتف', icon: '📱' },
    { id: 'laptops', name: 'اللابتوب', icon: '💻' },
    { id: 'tablets', name: 'التابلت', icon: '📱' },
    { id: 'audio', name: 'الصوتيات', icon: '🎧' },
    { id: 'gaming', name: 'الألعاب', icon: '🎮' },
  ];

  const filteredProducts = products.filter((product) => {
    const categoryMatch = selectedCategory === 'all' || product.category === selectedCategory;
    const priceMatch = product.price >= priceRange[0] && product.price <= priceRange[1];
    return categoryMatch && priceMatch;
  });

  return (
    <main className="min-h-screen bg-white">
      {/* Header */}
      <section className="bg-primary-blue text-white py-12 px-4 md:px-8 text-center">
        <h1 className="text-4xl font-bold mb-4">متجرنا</h1>
        <p className="text-xl opacity-90">أفضل الأجهزة الإلكترونية بأسعار مناسبة</p>
      </section>

      {/* Content */}
      <section className="py-12 px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Filters Sidebar */}
            <div className="md:col-span-1">
              <div className="bg-gray-50 p-6 rounded-lg sticky top-20">
                <h2 className="text-2xl font-bold mb-6">التصفية</h2>

                {/* Category Filter */}
                <div className="mb-8">
                  <h3 className="text-lg font-bold mb-4">الفئة</h3>
                  <div className="space-y-2">
                    {categories.map((cat) => (
                      <button
                        key={cat.id}
                        onClick={() => setSelectedCategory(cat.id)}
                        className={`w-full text-right p-3 rounded-lg transition-colors ${
                          selectedCategory === cat.id
                            ? 'bg-primary-blue text-white'
                            : 'bg-white text-gray-700 hover:bg-gray-100'
                        }`}
                      >
                        {cat.icon} {cat.name}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Price Filter */}
                <div>
                  <h3 className="text-lg font-bold mb-4">السعر</h3>
                  <input
                    type="range"
                    min="0"
                    max="5000"
                    value={priceRange[1]}
                    onChange={(e) => setPriceRange([priceRange[0], parseInt(e.target.value)])}
                    className="w-full"
                  />
                  <p className="text-gray-600 mt-2 text-center">
                    0 د.ك - {priceRange[1]} د.ك
                  </p>
                </div>
              </div>
            </div>

            {/* Products Grid */}
            <div className="md:col-span-3">
              <div className="mb-6 flex justify-between items-center">
                <h2 className="text-2xl font-bold">
                  {filteredProducts.length} منتج
                </h2>
                <select className="px-4 py-2 border-2 border-gray-300 rounded-lg">
                  <option>الأحدث</option>
                  <option>الأرخص</option>
                  <option>الأغلى</option>
                  <option>الأكثر مبيعاً</option>
                </select>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredProducts.map((product) => (
                  <div
                    key={product.id}
                    className="bg-white border-2 border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-shadow"
                  >
                    {/* Product Image */}
                    <div className="bg-gray-100 p-8 text-center text-6xl h-48 flex items-center justify-center">
                      {product.image}
                    </div>

                    {/* Featured Badge */}
                    {product.featured && (
                      <div className="bg-primary-blue text-white px-3 py-1 text-sm font-bold m-3 inline-block rounded-full">
                        مميز ⭐
                      </div>
                    )}

                    {/* Product Info */}
                    <div className="p-4">
                      <p className="text-sm text-gray-500 mb-2">{product.brand}</p>
                      <h3 className="text-lg font-bold mb-2">{product.name}</h3>

                      {/* Stock Status */}
                      <div className="mb-3">
                        {product.stock > 0 ? (
                          <span className="text-sm text-success-green font-semibold">
                            في المخزون ({product.stock})
                          </span>
                        ) : (
                          <span className="text-sm text-danger-red font-semibold">
                            غير متوفر
                          </span>
                        )}
                      </div>

                      {/* Price */}
                      <div className="flex justify-between items-center mb-4">
                        <span className="text-2xl font-bold text-primary-blue">
                          {product.price} د.ك
                        </span>
                      </div>

                      {/* Add to Cart Button */}
                      <button className="w-full btn-primary py-2" disabled={product.stock === 0}>
                        {product.stock > 0 ? '🛒 أضف للسلة' : 'غير متوفر'}
                      </button>
                    </div>
                  </div>
                ))}
              </div>

              {filteredProducts.length === 0 && (
                <div className="text-center py-12">
                  <p className="text-xl text-gray-600">لا توجد منتجات مطابقة لبحثك</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}