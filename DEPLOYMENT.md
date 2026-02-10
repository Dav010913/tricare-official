# Deployment & Maintenance Guide

## Project Summary
This project has been migrated from Netlify to **Vercel** to support a custom API-based contact form integrated with **Zoho Mail**. The migration involved replacing the static Netlify Form handler with a Next.js API route (`/api/contact`) powered by `nodemailer`.

## Current Status
- **Platform**: Vercel
- **Subdirectory**: `tricare - web`
- **Deployment URL**: [tricareglobal.com.au](https://tricareglobal.com.au)

## DNS Configuration
The domain `tricareglobal.com.au` is managed via external DNS and pointed to Vercel:
- **A Record**: `76.76.21.21`
- **CNAME (www)**: `cname.vercel-dns.com`
- **MX Records**: Configured for Zoho Mail.

## Environment Variables
The following environment variables are **required** in the Vercel Dashboard for the contact form to function:

| Key | Description |
| :--- | :--- |
| `ZOHO_USER` | The authenticated Zoho email address (e.g., `info@tricareglobal.com.au`). |
| `ZOHO_PASS` | Zoho **App Password** (Generated in Zoho Security settings). |
| `CONTACT_RECEIVER` | (Optional) The recipient email address. Defaults to `ZOHO_USER`. |

> [!IMPORTANT]
> Do NOT use your primary Zoho account password. Generate an **App Password** in Zoho Mail's security settings for SMTP access.

## Maintenance & Updates

### Updating Environment Variables
1. Log in to the [Vercel Dashboard](https://vercel.com/dashboard).
2. Select the `tricare-official` project.
3. Go to **Settings > Environment Variables**.
4. Add or update the keys listed above.
5. **Redeploy** the latest production deployment for changes to take effect.

### Redeploying
- Pushing changes to the `main` branch will automatically trigger a Vercel build.
- To manually redeploy: Go to the project **Deployments** tab, click the three dots on the latest deployment, and select **Redeploy**.

---
*Created on 2026-02-10*
