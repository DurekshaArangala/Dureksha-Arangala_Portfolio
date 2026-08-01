/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import express from 'express';
import path from 'path';
import fs from 'fs';
import { createServer as createViteServer } from 'vite';

async function startServer() {
  const app = express();
  const PORT = 3000;
  const isProduction = process.env.NODE_ENV === 'production';

  // Support JSON parsing
  app.use(express.json());

  // Messages database path
  const messagesDir = path.join(process.cwd(), 'data');
  const messagesFile = path.join(messagesDir, 'messages.json');

  // Ensure database directory and file exist
  if (!fs.existsSync(messagesDir)) {
    fs.mkdirSync(messagesDir, { recursive: true });
  }
  if (!fs.existsSync(messagesFile)) {
    fs.writeFileSync(messagesFile, JSON.stringify([], null, 2), 'utf-8');
  }

  // --- API Endpoints ---

  // Health check
  app.get('/api/health', (req, res) => {
    res.json({ status: 'ok', timestamp: new Date().toISOString() });
  });

  // Contact form submission
  app.post('/api/contact', (req, res) => {
    try {
      const { name, email, message } = req.body;

      if (!name || !email || !message) {
        return res.status(400).json({ error: 'Name, email, and message are required.' });
      }

      // Read current messages
      const fileData = fs.readFileSync(messagesFile, 'utf-8');
      const messages = JSON.parse(fileData);

      // Append new message
      const newMessage = {
        id: `msg_${Date.now()}_${Math.random().toString(36).substr(2, 5)}`,
        name,
        email,
        message,
        createdAt: new Date().toISOString(),
      };
      messages.push(newMessage);

      // Save messages
      fs.writeFileSync(messagesFile, JSON.stringify(messages, null, 2), 'utf-8');

      console.log(`[API] Message saved from ${name} (${email})`);
      res.status(201).json({ success: true, message: 'Message sent successfully!' });
    } catch (error) {
      console.error('[API] Error saving contact message:', error);
      res.status(500).json({ error: 'Internal server error while saving message.' });
    }
  });

  // Resume PDF download
  app.get('/api/cv/download', (req, res) => {
    try {
      // Set headers for file download
      res.setHeader('Content-Type', 'application/pdf');
      res.setHeader('Content-Disposition', 'attachment; filename="Dureksha_Arangala_Data_Science_CV.pdf"');

      // Simple valid minimalist PDF content representing Dureksha's Resume
      const pdfBinary = Buffer.from(
        '%PDF-1.4\n' +
        '1 0 obj\n' +
        '<< /Type /Catalog /Pages 2 0 R >>\n' +
        'endobj\n' +
        '2 0 obj\n' +
        '<< /Type /Pages /Kids [3 0 R] /Count 1 >>\n' +
        'endobj\n' +
        '3 0 obj\n' +
        '<< /Type /Page /Parent 2 0 R /MediaBox [0 0 595 842] /Contents 4 0 R /Resources << /Font << /F1 << /Type /Font /Subtype /Type1 /BaseFont /Helvetica >> /F2 << /Type /Font /Subtype /Type1 /BaseFont /Helvetica-Bold >> >> >> >>\n' +
        'endobj\n' +
        '4 0 obj\n' +
        '<< /Length 600 >>\n' +
        'stream\n' +
        'BT\n' +
        '/F2 18 Tf\n' +
        '72 750 Td\n' +
        '(Dureksha Arangala - Curriculum Vitae) Tj\n' +
        'ET\n' +
        'BT\n' +
        '/F1 11 Tf\n' +
        '0 -30 Td\n' +
        '(Aspiring Data Scientist | BSc\\(Hons\\) in Data Science \\(UG\\)) Tj\n' +
        '0 -20 Td\n' +
        '(Email: durekshachammi2911@gmail.com | Colombo, Sri Lanka) Tj\n' +
        '0 -30 Td\n' +
        '(/F2 13 Tf) Tj\n' +
        '(ACADEMIC PROFILE) Tj\n' +
        'ET\n' +
        'BT\n' +
        '/F1 10 Tf\n' +
        '72 630 Td\n' +
        '(- B.Sc. \\(Hons\\) Data Science - University of Colombo School of Computing) Tj\n' +
        '0 -15 Td\n' +
        '(  GPA: 3.8 / 4.0 - Dean\'s List \\(2023, 2024\\)) Tj\n' +
        '0 -30 Td\n' +
        '(/F2 13 Tf) Tj\n' +
        '(EXPERIENCE & LEADERSHIP) Tj\n' +
        'ET\n' +
        'BT\n' +
        '/F1 10 Tf\n' +
        '72 545 Td\n' +
        '(- Secretary - IEEE Computer Society Student Branch Chapter \\(2025 - Present\\)) Tj\n' +
        '0 -15 Td\n' +
        '(- Technical Lead - IEEE Student Branch UCSC \\(2025 - Present\\)) Tj\n' +
        '0 -15 Td\n' +
        '(- Microsoft Learn Student Ambassador \\(2024\\)) Tj\n' +
        '0 -15 Td\n' +
        '(- Google Developer Student Club - Core Team \\(2023\\)) Tj\n' +
        '0 -30 Td\n' +
        '(/F2 13 Tf) Tj\n' +
        '(TECHNICAL PROJECTS) Tj\n' +
        'ET\n' +
        'BT\n' +
        '/F1 10 Tf\n' +
        '72 430 Td\n' +
        '(- Credit Default Risk Predictor \\(XGBoost, FastAPI, SHAP\\)) Tj\n' +
        '0 -15 Td\n' +
        '(- Sinhala Sentiment Classifier \\(PyTorch, XLM-RoBERTa\\)) Tj\n' +
        '0 -15 Td\n' +
        '(- Accessibility Vision Assistant \\(YOLOv8, OpenCV, Android\\)) Tj\n' +
        '0 -15 Td\n' +
        '(- Flood Risk Dashboard - Kelani Basin \\(Power BI, GIS\\)) Tj\n' +
        '0 -30 Td\n' +
        '(/F2 13 Tf) Tj\n' +
        '(CERTIFICATIONS) Tj\n' +
        'ET\n' +
        'BT\n' +
        '/F1 10 Tf\n' +
        '72 315 Td\n' +
        '(- Deep Learning Specialization \\(DeepLearning.AI\\)) Tj\n' +
        '0 -15 Td\n' +
        '(- TensorFlow Developer Certificate \\(Google\\)) Tj\n' +
        '0 -15 Td\n' +
        '(- Azure Data Scientist Associate \\(Microsoft\\)) Tj\n' +
        '0 -15 Td\n' +
        '(- Associate Cloud Engineer \\(Google Cloud\\)) Tj\n' +
        'ET\n' +
        'endstream\n' +
        'endobj\n' +
        'xref\n' +
        '0 5\n' +
        '0000000000 65535 f \n' +
        '0000000009 00000 n \n' +
        '0000000058 00000 n \n' +
        '0000000115 00000 n \n' +
        '0000000300 00000 n \n' +
        'trailer\n' +
        '<< /Size 5 /Root 1 0 R >>\n' +
        'startxref\n' +
        '950\n' +
        '%%EOF\n'
      );

      res.send(pdfBinary);
    } catch (error) {
      console.error('[API] Error generating resume PDF download:', error);
      res.status(500).json({ error: 'Internal server error while generating resume.' });
    }
  });

  // Serve Vite in dev mode, static files in production
  if (!isProduction) {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa',
    });
    app.use(vite.middlewares);
    console.log('[Dev] Vite middleware integrated.');
  } else {
    const distPath = path.join(process.cwd(), 'dist');
    app.use(express.static(distPath));
    app.get('*', (req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
    console.log('[Prod] Static client files serving integrated.');
  }

  // Listen on PORT 3000 and HOST 0.0.0.0 (required for Cloud Run)
  app.listen(PORT, '0.0.0.0', () => {
    console.log(`Server running at http://0.0.0.0:${PORT}/`);
  });
}

startServer().catch((err) => {
  console.error('Fatal error starting express/vite server:', err);
});
