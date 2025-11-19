# CQTA Website

A modern, professional website for the Canadian Software Quality Testing Association (CQTA), built with Next.js and Tailwind CSS.

## About CQTA

CQTA is dedicated to advancing software quality engineering and supporting testing professionals across Canada. Our mission is to foster a vibrant community of QA professionals through education, networking, and advocacy.

## Features

- **Homepage**: Mission description and call-to-action for newsletter and partnerships
- **About Us**: Background, mission, and vision of CQTA
- **Events**: List of upcoming and past events with registration options
- **Partnership**: Partnership opportunities and benefits
- **Sponsorship**: Sponsorship tiers and options
- **Contact Us**: Contact form for inquiries
- **Responsive Design**: Optimized for desktop and mobile devices
- **Multilingual Support**: Language selector (EN/FR)
- **Admin UI**: Protected admin panel for content, storage, and email management
- **Content Management**: Netlify CMS for editing events, carousel, and posts
- **Authentication**: Clerk for secure admin access
- **File Storage**: Supabase for file and image uploads
- **Transactional Email**: Resend for sending emails (e.g., contact form)

## Tech Stack

- **Framework**: Next.js 16 with App Router
- **Styling**: Tailwind CSS
- **Language**: TypeScript
- **Fonts**: Inter (body), Poppins (headings)
- **Content Management**: Netlify CMS
- **Authentication**: Clerk
- **Storage**: Supabase
- **Email**: Resend

## Getting Started

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```
3. Copy `.env.example` to `.env.local` and fill in your credentials for Clerk, Supabase, and Resend:
   ```bash
   cp .env.example .env.local
   # Edit .env.local with your keys
   ```
4. Run the development server:
   ```bash
   npm run dev
   ```
5. Open [http://localhost:3000](http://localhost:3000) in your browser

## Admin Panel & Integrations

- **Admin UI**: `/admin` (Clerk-protected)
- **Netlify CMS**: `/admin/cms` (or `/admin/` for static UI)
- **Supabase Storage**: `/admin/storage` (upload files/images)
- **Resend Email**: `/admin/email` (send test emails)

## Environment Variables

See `.env.example` for all required keys:
- `RESEND_API_KEY` (Resend email)
- `NEXT_PUBLIC_SUPABASE_URL`, `NEXT_PUBLIC_SUPABASE_ANON_KEY` (Supabase)
- `NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY`, `CLERK_SECRET_KEY` (Clerk)

## Build for Production

```bash
npm run build
npm start
```

## Project Structure

```
src/
├── app/
│   ├── about/
│   ├── admin/           # Admin UI (protected)
│   ├── contact/
│   ├── events/
│   ├── partnership/
│   ├── sponsorship/
│   ├── layout.tsx
│   └── page.tsx
├── components/
│   ├── Header.tsx
│   └── Footer.tsx
└── ...
public/
└── admin/               # Netlify CMS config & UI
```

## Contributing

We welcome contributions to improve the CQTA website. Please feel free to submit issues or pull requests.

## License

© 2025 CQTA. All rights reserved.
