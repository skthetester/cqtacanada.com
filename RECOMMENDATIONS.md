# Recommended Free Services for Website Maintenance

## Practical Options for Future Maintenance

### Carousel Management (images/text, order)

- Store carousel items in a JSON or Markdown file (e.g., `carousel.json` or `carousel.md`) in your repo. Edit this file to add, remove, or reorder items. Your Carousel component can read from this file.
- For non-technical users, consider a simple admin UI (protected route) to manage carousel content, which updates the JSON/Markdown file or a backend API.

### Event Management (add, move current/past)

- Use a structured data file (e.g., `events.json`) with a status field (current/past). Update this file to add new events or change their status.
- Alternatively, build a basic admin page to manage events, which updates the data file or a backend.

### Blog/Newsletter Posting (weekly/monthly)

- Store posts as Markdown files in a `/posts` or `/newsletters` directory. Add new files for each post. Use frontmatter for metadata (date, title, etc.).
- For easier management, integrate a headless CMS (e.g., Netlify CMS, Sanity, Contentful) that allows non-technical users to create/edit posts via a web UI.

#### Summary of Options

- **For developers:** Use structured files (JSON/Markdown) in the repo for all content. Edit via code or GitHub.
- **For non-developers:** Add a simple admin UI or connect a headless CMS for content management without code changes.

## 1. Headless CMS
- **Netlify CMS**: Open-source, Git-based, easy for static sites, no backend needed.
- **Sanity.io**: Generous free tier, cloud-hosted, real-time editing.
- **Strapi (Community Edition)**: Self-hosted, flexible, requires your own server.

**Recommended:** Netlify CMS for static sites, Sanity.io for dynamic needs.

## 2. Web Admin UI with Free Sign-In
- **Clerk**: Free tier, easy integration, supports Google and other providers.
- **Firebase Authentication**: Free tier, supports Google and more, integrates well with Next.js.
- **Auth0**: Free tier, supports social logins, monthly active user limits.

**Recommended:** Clerk for easiest integration, Firebase Auth for Google-centric projects.

## 3. Free Tier Database (User Management, Forms, etc.)
- **Supabase**: Generous free tier, Postgres-based, real-time, authentication, storage, and more.
- **Firebase Firestore**: Free tier, scalable NoSQL, integrates with Firebase Auth.
- **Planetscale**: Free tier, MySQL-compatible, good for relational data.

**Recommended:** Supabase for Postgres and all-in-one features, Firebase for NoSQL and tight integration with Firebase Auth.

## 4. Free Email Sender
- **Resend**: Free tier with 3,000 emails/month, easy API, good for transactional emails.
- **SendGrid**: Free tier with 100 emails/day, widely used.
- **Mailgun**: Free tier with 5,000 emails/month for 3 months.

**Recommended:** Resend for simplicity and generous free tier, SendGrid as a popular alternative.

## 5. Free Image & Video Storage
- **Cloudinary**: Free tier with 25 GB bandwidth/month, 25 GB storage, powerful image/video transformations.
- **Supabase Storage**: Included in Supabase’s free tier, 2 GB storage, integrates with Supabase Auth and Database.
- **Firebase Storage**: Free tier with 5 GB storage, 1 GB downloads/day, integrates with Firebase Auth.
- **ImageKit**: Free tier with 20 GB bandwidth/month, 20 GB storage, real-time image optimization.

**Recommended:**
- For all-in-one (auth, db, storage): Supabase Storage.
- For advanced media features: Cloudinary.
- For simple static storage: Firebase Storage.

---

Let me know if you need setup or integration steps for any of these services!