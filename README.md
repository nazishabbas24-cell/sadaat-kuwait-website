# Sadaat Al Kuwait - Electronics Sales & Repair Centre

## Project Overview

A professional, bilingual (Arabic/English) website for **Sadaat Al Kuwait**, an electronics sales and repair centre in Kuwait.

### Key Features
- **Bilingual Interface**: Arabic (RTL) and English
- **Repair Services**: Service listings, pricing, and online booking
- **E-Commerce**: Product catalog with categories
- **Customer Tools**: Repair status tracker, price estimator, warranty registration
- **Local Kuwait Focus**: Google Maps integration, WhatsApp support, KNET payment
- **Performance**: <2 second load time, fully mobile-responsive

## Technology Stack

- **Frontend**: Next.js 14+ (React)
- **Styling**: Tailwind CSS
- **Backend**: Node.js with Express
- **Database**: MongoDB
- **Authentication**: NextAuth.js
- **Payments**: KNET integration + COD
- **Hosting**: Vercel (frontend) + Cloud service (backend)

## Project Structure

```
sadaat-kuwait-website/
├── frontend/              # Next.js application
├── backend/               # Express.js API
├── docs/                  # Documentation
└── deployment/            # Deployment configs
```

## Getting Started

### Prerequisites
- Node.js 18+
- npm or yarn
- MongoDB account
- Git

### Installation

```bash
# Clone the repository
git clone https://github.com/nazishabbas24-cell/sadaat-kuwait-website.git

# Frontend setup
cd frontend
npm install

# Backend setup
cd ../backend
npm install
```

### Environment Variables

Create `.env.local` files in both frontend and backend directories with required variables (see `.env.example` files).

### Running Locally

```bash
# Terminal 1: Frontend
cd frontend
npm run dev

# Terminal 2: Backend
cd backend
npm run dev
```

Frontend runs on `http://localhost:3000`
Backend runs on `http://localhost:5000`

## Development Roadmap

- [ ] Homepage with hero section and CTAs
- [ ] Repair services page with pricing
- [ ] Product shop with categories
- [ ] Repair booking system
- [ ] Repair status tracker
- [ ] Price estimator tool
- [ ] Warranty registration system
- [ ] WhatsApp integration
- [ ] Online payment (KNET + COD)
- [ ] Admin dashboard
- [ ] SEO optimization
- [ ] Performance optimization

## Brand Guidelines

- **Color Scheme**: Professional blue (#0056B3), white (#FFFFFF), silver/grey (#6C757D)
- **Tone**: Trustworthy, expert, local, customer-friendly
- **Language**: Bilingual Arabic (primary) and English
- **Target**: Mobile-first (most customers browse on phones)

## Contributing

See [CONTRIBUTING.md](docs/CONTRIBUTING.md) for guidelines.

## License

Private - All rights reserved © Sadaat Al Kuwait
