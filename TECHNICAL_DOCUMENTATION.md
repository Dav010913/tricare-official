# Technical Project Summary & Deployment Guide

## 1. System Architecture

### Monorepo-style Structure
The project is structured with logic contained within the `tricare - web` subdirectory. This approach:
- **Isolation**: Separates environment-specific configuration from application code.
- **Future-proofing**: Allows for additional services (e.g., a separate admin dashboard or backend) to be added at the root level without cluttering the main web app.

### Tech Stack
- **Framework**: [Next.js v16.1.6](https://nextjs.org/) (App Router).
- **Runtime**: Node.js 20+.
- **Language**: TypeScript.
- **Styling**: Tailwind CSS v4 with PostCSS.

### Why API Routes?
Instead of using a headless CMS or an external form service (like Formspree or Netlify Forms), we implemented a custom **Next.js API Route** using **Nodemailer**.
- **Control**: Total ownership of data handling and formatting.
- **Cost**: No additional subscriptions for form handling services.
- **Reliability**: Eliminates dependency on external form processing redirect flows.

---

## 2. Core Logic & Integration

### Contact Form Workflow
1.  **Client-Side**: `src/app/contact/page.tsx` captures user input using standard HTML forms and `FormData`.
2.  **Validation**: Basic frontend validation occurs via HTML5 attributes (`required`, `type="email"`).
3.  **Submission**: Data is sent as a JSON POST request to `/api/contact`.
4.  **Backend Relay**: `src/app/api/contact/route.ts` receives the JSON, checks environment variables, and utilizes an SMTP relay through **Zoho Mail**.

### Critical Dependencies
- **`next`**: React framework for production.
- **`nodemailer`**: Node.js module to allow easy email sending.
- **`lucide-react`**: Provides the UI icon set.
- **`tailwindcss`**: Handles all layout and responsive design.
- **`@tailwindcss/postcss`**: Modern PostCSS integration for Tailwind.

---

## 3. Infrastructure & DevOps

### Vercel Deployment Pipeline
- **Root Directory Override**: The Vercel project is configured to use `tricare - web` as the root.
- **Build Settings**:
    - Build Command: `npm run build`
    - Output Directory: `.next`
    - Install Command: `npm install`
- **Automatic Deployment**: Any push to the `main` branch triggers a production build.

### DNS Configuration & Handover
The project was migrated from Netlify to Vercel/Zoho:
- **Host**: Vercel (A Record: `76.76.21.21`, CNAME: `cname.vercel-dns.com`).
- **Domain/DNS**: Managed via **VentraIP**.
- **Email**: Zoho Mail (MX records properly configured on the domain).

---

## 4. Scalability & Future Refactoring

### Potential Risks
- **Zoho SMTP Limits**: Zoho Mail is a personal/business email service, not a dedicated transactional mailer. It has daily sending limits (approx. 200-500/day) and may flag high volumes as spam.
- **Cold Starts**: As a serverless function, the first form submission after inactivity may experience a slight "cold start" delay.

### Refactoring Advice
- **Transactional Mailers**: If traffic grows, replace the Zoho SMTP relay with a service like **Resend**, **SendGrid**, or **Postmark**. These offer better deliverability, analytics, and higher volume support.
- **Zod Validation**: Consider adding `zod` for more robust server-side schema validation in the API route.

---

## 5. Environment Variable Schema

The following keys must be set in the **Vercel Project Settings > Environment Variables**:

| Variable | Description | Default/Example |
| :--- | :--- | :--- |
| `ZOHO_USER` | The authenticated Zoho email account | `info@tricareglobal.com.au` |
| `ZOHO_PASS` | **Zoho App Password** (Not main password) | `abcd-efgh-ijkl-mnop` |
| `CONTACT_RECEIVER` | The recipient of the form messages | `info@tricareglobal.com.au` |

---
*Last updated: 2026-02-10*
