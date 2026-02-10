import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req: Request) {
    try {
        const { name, email, company, message } = await req.json();

        // 检查环境变量
        const user = process.env.ZOHO_USER;
        const pass = process.env.ZOHO_PASS;
        const receiver = process.env.CONTACT_RECEIVER || user;

        if (!user || !pass) {
            console.error('Missing ZOHO_USER or ZOHO_PASS environment variables');
            return NextResponse.json(
                { error: 'Mail server configuration missing' },
                { status: 500 }
            );
        }

        // 创建运输对象
        // Zoho SMTP 配置: smtp.zoho.com.au (澳洲) 或 smtp.zoho.com (通用)
        // 端口 465 (SSL)
        const transporter = nodemailer.createTransport({
            host: 'smtp.zoho.com.au',
            port: 465,
            secure: true,
            auth: {
                user: user,
                pass: pass,
            },
        });

        const mailOptions = {
            from: user,
            to: receiver,
            replyTo: email,
            subject: `New Contact Form Inquiry from ${name}`,
            text: `
Name: ${name}
Email: ${email}
Company: ${company || 'N/A'}

Message:
${message}
      `,
            html: `
<h3>New Contact Form Inquiry</h3>
<p><strong>Name:</strong> ${name}</p>
<p><strong>Email:</strong> ${email}</p>
<p><strong>Company:</strong> ${company || 'N/A'}</p>
<br/>
<p><strong>Message:</strong></p>
<p>${message.replace(/\n/g, '<br>')}</p>
      `,
        };

        await transporter.sendMail(mailOptions);

        return NextResponse.json({ message: 'Email sent successfully' }, { status: 200 });
    } catch (error: any) {
        console.error('Error sending email:', error);
        return NextResponse.json(
            { error: 'Failed' },
            { status: 500 }
        );
    }
}
