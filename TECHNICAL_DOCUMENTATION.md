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

### Static Visual Approach
The project uses a purely visual and informational approach for the contact page to maintain security and simplicity. All technical inquiries and documentation (COA/SDS) are directed to the primary contact email.

---

## 2. Core Logic & Integration

### Contact Information Workflow
1.  **Direct Communication**: Users are encouraged to contact the team directly via email for all inquiries.
2.  **Document Submission**: Specific instructions are provided for sending technical documents (COA/SDS) via email, as the site does not host file uploads.

### Critical Dependencies
- **`next`**: React framework for production.
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

### Future Transactional Email
If a contact form is reintroduced in the future, it is recommended to use a dedicated transactional mailer like **Resend**, **SendGrid**, or **Postmark** instead of a standard SMTP relay to ensure better deliverability and analytics.

---

| Variable | Description | Status |
| :--- | :--- | :--- |
| `ZOHO_USER` | The authenticated Zoho email account | **DEPRECATED** |
| `ZOHO_PASS` | Zoho App Password | **DEPRECATED** |
| `CONTACT_RECEIVER` | Recipient of form messages | **DEPRECATED** |

---
*Last updated: 2026-02-16*
