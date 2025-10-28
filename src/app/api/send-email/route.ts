import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { empresa, contacto, email, telefono, mensaje } = body;

    // Validate required fields
    if (!empresa || !contacto || !email || !telefono) {
      return NextResponse.json(
        { error: 'Todos los campos requeridos deben ser completados' },
        { status: 400 }
      );
    }

    // Validate environment variables
    if (!process.env.SMTP_HOST || !process.env.SMTP_USER || !process.env.SMTP_PASS) {
      console.error('Missing SMTP configuration in environment variables');
      return NextResponse.json(
        { error: 'Configuración de correo no disponible. Por favor contacte al administrador.' },
        { status: 500 }
      );
    }

    // Create transporter
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: parseInt(process.env.SMTP_PORT || '587'),
      secure: false, // true for 465, false for other ports
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
      tls: {
        rejectUnauthorized: false // For development - remove in production if using valid certificates
      }
    });

    // Verify connection
    try {
      await transporter.verify();
      console.log('SMTP connection verified successfully');
    } catch (verifyError) {
      console.error('SMTP verification failed:', verifyError);
      return NextResponse.json(
        { error: 'Error de conexión con el servidor de correo. Por favor intente más tarde.' },
        { status: 500 }
      );
    }

    // Email content
    const emailContent = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <div style="background: linear-gradient(to right, #10b981, #047857); padding: 20px; text-align: center;">
          <h1 style="color: white; margin: 0;">Nueva Solicitud de Afiliación Empresarial</h1>
        </div>
        
        <div style="padding: 30px; background-color: #f9fafb;">
          <h2 style="color: #047857; margin-top: 0;">Información de la Empresa</h2>
          
          <table style="width: 100%; border-collapse: collapse;">
            <tr>
              <td style="padding: 10px; background-color: white; border: 1px solid #e5e7eb; font-weight: bold; width: 40%;">Empresa:</td>
              <td style="padding: 10px; background-color: white; border: 1px solid #e5e7eb;">${empresa}</td>
            </tr>
            <tr>
              <td style="padding: 10px; background-color: white; border: 1px solid #e5e7eb; font-weight: bold;">Contacto:</td>
              <td style="padding: 10px; background-color: white; border: 1px solid #e5e7eb;">${contacto}</td>
            </tr>
            <tr>
              <td style="padding: 10px; background-color: white; border: 1px solid #e5e7eb; font-weight: bold;">Email:</td>
              <td style="padding: 10px; background-color: white; border: 1px solid #e5e7eb;">${email}</td>
            </tr>
            <tr>
              <td style="padding: 10px; background-color: white; border: 1px solid #e5e7eb; font-weight: bold;">Teléfono:</td>
              <td style="padding: 10px; background-color: white; border: 1px solid #e5e7eb;">${telefono}</td>
            </tr>
            ${mensaje ? `
            <tr>
              <td style="padding: 10px; background-color: white; border: 1px solid #e5e7eb; font-weight: bold; vertical-align: top;">Mensaje:</td>
              <td style="padding: 10px; background-color: white; border: 1px solid #e5e7eb;">${mensaje}</td>
            </tr>
            ` : ''}
          </table>
          
          <div style="margin-top: 30px; padding: 20px; background-color: white; border-left: 4px solid #10b981;">
            <p style="margin: 0; color: #6b7280; font-size: 14px;">
              <strong>Nota:</strong> Este correo fue generado automáticamente desde el formulario de afiliación empresarial en fincentiva.com.mx
            </p>
          </div>
        </div>
        
        <div style="background-color: #047857; padding: 15px; text-align: center;">
          <p style="color: white; margin: 0; font-size: 12px;">
            © ${new Date().getFullYear()} Financiera Incentiva. Todos los derechos reservados.
          </p>
        </div>
      </div>
    `;

    // Send email
    const info = await transporter.sendMail({
      from: `"Fincentiva Web" <${process.env.SMTP_USER}>`,
      to: 'digital@fincentiva.com.mx',
      cc: 'asesor1@fincentiva.com.mx, dgarza@fincentiva.com.mx',
      subject: `Nueva Solicitud de Afiliación: ${empresa}`,
      html: emailContent,
      replyTo: email,
    });

    console.log('Email sent successfully:', info.messageId);

    return NextResponse.json(
      { message: 'Correo enviado exitosamente', messageId: info.messageId },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error sending email:', error);
    return NextResponse.json(
      { error: 'Error al enviar el correo. Por favor intente nuevamente.' },
      { status: 500 }
    );
  }
}