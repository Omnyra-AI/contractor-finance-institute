import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const name = searchParams.get("name");
  const course = searchParams.get("course");
  const date = searchParams.get("date");
  const certId = searchParams.get("certId");

  if (!name || !course || !date || !certId) {
    return NextResponse.json(
      { error: "Missing required parameters" },
      { status: 400 }
    );
  }

  // Generate SVG certificate
  const svg = generateCertificateSVG(name, course, date, certId);

  return new NextResponse(svg, {
    headers: {
      "Content-Type": "image/svg+xml",
      "Cache-Control": "public, max-age=31536000",
    },
  });
}

function generateCertificateSVG(
  name: string,
  course: string,
  date: string,
  certId: string
): string {
  return `<?xml version="1.0" encoding="UTF-8"?>
<svg width="1200" height="850" viewBox="0 0 1200 850" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="bgGradient" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#0A0D1E"/>
      <stop offset="100%" style="stop-color:#1B1F3B"/>
    </linearGradient>
    <linearGradient id="goldGradient" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#D4AF37"/>
      <stop offset="100%" style="stop-color:#F4CF47"/>
    </linearGradient>
    <filter id="glow">
      <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
      <feMerge>
        <feMergeNode in="coloredBlur"/>
        <feMergeNode in="SourceGraphic"/>
      </feMerge>
    </filter>
  </defs>

  <!-- Background -->
  <rect width="1200" height="850" fill="url(#bgGradient)"/>

  <!-- Border -->
  <rect x="30" y="30" width="1140" height="790" fill="none" stroke="url(#goldGradient)" stroke-width="3" rx="10"/>
  <rect x="45" y="45" width="1110" height="760" fill="none" stroke="#D4AF37" stroke-width="1" rx="8" opacity="0.5"/>

  <!-- Corner decorations -->
  <g fill="#D4AF37" opacity="0.6">
    <polygon points="30,30 80,30 30,80"/>
    <polygon points="1170,30 1170,80 1120,30"/>
    <polygon points="30,820 30,770 80,820"/>
    <polygon points="1170,820 1120,820 1170,770"/>
  </g>

  <!-- Logo/Header -->
  <text x="600" y="120" font-family="Georgia, serif" font-size="28" fill="#2ED6C3" text-anchor="middle" font-weight="bold">
    CONTRACTOR FINANCE INSTITUTE
  </text>

  <!-- Certificate Title -->
  <text x="600" y="200" font-family="Georgia, serif" font-size="52" fill="url(#goldGradient)" text-anchor="middle" font-weight="bold" filter="url(#glow)">
    Certificate of Completion
  </text>

  <!-- Decorative line -->
  <line x1="300" y1="240" x2="900" y2="240" stroke="#D4AF37" stroke-width="2"/>
  <circle cx="300" cy="240" r="5" fill="#D4AF37"/>
  <circle cx="600" cy="240" r="5" fill="#D4AF37"/>
  <circle cx="900" cy="240" r="5" fill="#D4AF37"/>

  <!-- This certifies text -->
  <text x="600" y="310" font-family="Georgia, serif" font-size="22" fill="#C3CBDC" text-anchor="middle">
    This is to certify that
  </text>

  <!-- Name -->
  <text x="600" y="390" font-family="Georgia, serif" font-size="48" fill="#F7F9FC" text-anchor="middle" font-weight="bold">
    ${escapeXml(name)}
  </text>

  <!-- Underline for name -->
  <line x1="250" y1="410" x2="950" y2="410" stroke="#D4AF37" stroke-width="1"/>

  <!-- Has completed text -->
  <text x="600" y="470" font-family="Georgia, serif" font-size="22" fill="#C3CBDC" text-anchor="middle">
    has successfully completed the course
  </text>

  <!-- Course Name -->
  <text x="600" y="540" font-family="Georgia, serif" font-size="36" fill="#2ED6C3" text-anchor="middle" font-weight="bold">
    ${escapeXml(course)}
  </text>

  <!-- Description -->
  <text x="600" y="590" font-family="Georgia, serif" font-size="16" fill="#C3CBDC" text-anchor="middle">
    demonstrating proficiency in contractor financial management principles
  </text>

  <!-- Date and Certificate ID -->
  <text x="250" y="700" font-family="Georgia, serif" font-size="18" fill="#C3CBDC" text-anchor="start">
    Issued: ${escapeXml(date)}
  </text>

  <text x="950" y="700" font-family="Georgia, serif" font-size="18" fill="#C3CBDC" text-anchor="end">
    Certificate ID: ${escapeXml(certId)}
  </text>

  <!-- Signature line -->
  <line x1="450" y1="720" x2="750" y2="720" stroke="#D4AF37" stroke-width="1"/>
  <text x="600" y="750" font-family="Georgia, serif" font-size="14" fill="#C3CBDC" text-anchor="middle">
    Contractor Finance Institute
  </text>

  <!-- Seal -->
  <circle cx="1050" cy="680" r="50" fill="none" stroke="url(#goldGradient)" stroke-width="3"/>
  <circle cx="1050" cy="680" r="40" fill="none" stroke="#D4AF37" stroke-width="1"/>
  <text x="1050" y="670" font-family="Georgia, serif" font-size="12" fill="#D4AF37" text-anchor="middle" font-weight="bold">
    CERTIFIED
  </text>
  <text x="1050" y="690" font-family="Georgia, serif" font-size="10" fill="#D4AF37" text-anchor="middle">
    CFI
  </text>

  <!-- Verification URL -->
  <text x="600" y="800" font-family="Arial, sans-serif" font-size="12" fill="#6B7280" text-anchor="middle">
    Verify at contractorfinanceinstitute.com/verify/${escapeXml(certId)}
  </text>
</svg>`;
}

function escapeXml(unsafe: string): string {
  return unsafe
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;");
}
