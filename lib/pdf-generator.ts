import { jsPDF } from "jspdf";

interface SponsorshipTier {
  level: string;
  price: string;
  highlight?: boolean;
  popular?: boolean;
  features: string[];
  description: string;
  contactButton?: boolean;
}


export interface SponsorshipBrochureContent {
  title: string;
  subtitle?: string;
  intro: string;
  tiers: SponsorshipTier[];
  ctaTitle: string;
  ctaText: string;
  website: string;
  email: string;
  contactLine: string;
  contactLinks: { label: string; url: string }[];
}

export function generateSponsorshipBrochure({
  title,
  subtitle,
  intro,
  tiers,
  ctaTitle,
  ctaText,
  website,
  email,
  contactLine,
  contactLinks
}: SponsorshipBrochureContent): jsPDF {
  const doc = new jsPDF();
  const pageWidth = doc.internal.pageSize.getWidth();
  const pageHeight = doc.internal.pageSize.getHeight();
  const margin = 20;
  const contentWidth = pageWidth - 2 * margin;
  let yPosition = margin;

  // Set PDF document properties
  doc.setProperties({
    title,
    subject: subtitle ? `${title} - ${subtitle}` : title,
    author: 'Canadian Quality and Testing Association (CQTA)',
    keywords: 'CQTA, Sponsorship, Quality Engineering, Software Testing, QA, Canada, Tech Events, Brand Exposure',
    creator: 'CQTA - cqtacanada.com',
    description: subtitle ? `${subtitle} ${intro}` : intro
  });

  // Helper function to check if we need a new page
  const checkNewPage = (requiredSpace: number = 20) => {
    if (yPosition + requiredSpace > pageHeight - margin) {
      addFooter();
      doc.addPage();
      yPosition = margin;
      return true;
    }
    return false;
  };

  // Helper function to add footer to each page
  const addFooter = () => {
    const footerY = pageHeight - 12;
    doc.setFontSize(9);
    doc.setTextColor(100, 100, 100);
    doc.setFont("helvetica", "normal");
    doc.text(`© ${new Date().getFullYear()} Canadian Quality and Testing Association. All rights reserved.`, pageWidth / 2, footerY, { align: "center" });
    doc.setTextColor(0, 0, 0);
  };

  // Header - CQTA branding with logo (white background for logo visibility)
  const headerHeight = 36; // increased to accommodate larger logo
  doc.setFillColor(255, 255, 255); // White color for logo visibility
  doc.rect(0, 0, pageWidth, headerHeight, "F");
  
  // Add CQTA logo
  const logoData = 'data:image/png;base64,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';
  try {
    // Render larger logo and vertically center inside the header; if decoding fails we'll catch it
    const logoWidth = 18;
    const logoHeight = 18;
    const logoX = 16;
    const logoY = (headerHeight - logoHeight) / 2; // vertically center inside header
    doc.addImage(logoData, 'PNG', logoX, logoY, logoWidth, logoHeight);
  } catch (err) {
    // If adding the embedded image fails (e.g. typed array length), fall back
    // to a tiny 1x1 transparent PNG so PDF generation continues.
    console.warn('Failed to add logo image to PDF, using tiny fallback.', err);
    const tinyPng = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR4nGMAAQAABQABDQottAAAAABJRU5ErkJggg==';
    try {
      doc.addImage(tinyPng, 'PNG', 16, 10, 8, 8);
    } catch {
      // If even the tiny fallback fails, skip the image silently.
    }
  }
  
  // Add red border at bottom of header
  doc.setDrawColor(204, 0, 0);
  doc.setLineWidth(3);
  doc.line(0, headerHeight, pageWidth, headerHeight);

  // Header title, vertically centered in header area and placed to the right of logo
  doc.setTextColor(204, 0, 0); // Red text
  doc.setFontSize(22);
  doc.setFont("helvetica", "bold");
  const logoAreaRight = 16 + 18 + 8; // logo X + logoWidth + gap
  const headerTextY = headerHeight / 2 + 3; // slight optical offset
  doc.text("Canadian Quality and Testing Association", logoAreaRight, headerTextY, { align: "left" });

  yPosition = headerHeight + 10;
  doc.setTextColor(0, 0, 0);

  // Main Title
  doc.setFontSize(18);
  doc.setFont("helvetica", "bold");

  doc.text(title, pageWidth / 2, yPosition, { align: "center" });
  yPosition += 9;

  // Introduction box
  doc.setFillColor(245, 245, 245); // Very light gray
  // Combine subtitle and intro for the intro block, but avoid duplication
  let introBlock = intro;
  if (subtitle && !intro.includes(subtitle)) {
    introBlock = `${subtitle} ${intro}`;
  }
  // Make intro box narrower and font larger to reduce line count
  const introBoxWidth = Math.min(contentWidth, 280); // ~320pt is about 4.4in, adjust as needed
  const introBoxX = (pageWidth - introBoxWidth) / 2;
  doc.setFontSize(10);
  doc.setFont("helvetica", "normal");
  const introLines = doc.splitTextToSize(introBlock, introBoxWidth);
  // Add vertical gap (padding) between box and text
  const introPaddingY = 5;
  const introHeight = introLines.length * 8 + introPaddingY * 2;
  doc.rect(introBoxX, yPosition, introBoxWidth, introHeight, "F");
  doc.setTextColor(60, 60, 60); // Dark gray for better readability
  // Vertically center the text in the intro block
  const totalTextHeight = introLines.length * 8;
  let introY = yPosition + (introHeight - totalTextHeight) / 2;
  introLines.forEach((line: string) => {
    doc.text(line, pageWidth / 2, introY, { align: "center" });
    introY += 8;
  });
  doc.setTextColor(0, 0, 0);
  yPosition += introHeight + 12;

  // Sponsorship tiers data
  const sponsorshipTiers: SponsorshipTier[] = tiers;

  // Helper function to render a single tier card
  const renderTierCard = (tier: SponsorshipTier, xPos: number, yPos: number, cardWidth: number) => {
    let cardY = yPos;
    const cardHeight = 70;
    
    // Border color: all cards use light gray
    doc.setDrawColor(200, 200, 200);
    doc.setLineWidth(0.5);
    
    doc.setFillColor(249, 249, 249);
    doc.roundedRect(xPos, cardY, cardWidth, cardHeight, 3, 3, "FD");

    // Tier name
    doc.setTextColor(0, 0, 0);
    doc.setFontSize(14);
    doc.setFont("helvetica", "bold");
    doc.text(`${tier.level} Sponsor`, xPos + cardWidth / 2, cardY + 9, { align: "center" });
    
    // Price - at bottom, $ in front, prominent, center-aligned
    const priceText = tier.price.replace(/\$/g, '').trim();
    const hasPrice = !tier.price.includes('Contact');
    const priceY = yPos + cardHeight - 8;
    if (hasPrice) {
      doc.setTextColor(204, 0, 0);
      doc.setFontSize(26);
      doc.setFont("helvetica", "bold");
      doc.text(`$ ${priceText}`, xPos + cardWidth / 2, priceY, { align: "center" });
    } else {
      doc.setTextColor(204, 0, 0);
      doc.setFontSize(16);
      doc.setFont("helvetica", "bold");
      doc.text(tier.price, xPos + cardWidth / 2, priceY, { align: "center" });
    }
    doc.setTextColor(0, 0, 0);
    
    cardY += 14;

    // Description
    doc.setFontSize(8);
    doc.setFont("helvetica", "italic");
    doc.setTextColor(80, 80, 80);
    const descLines = doc.splitTextToSize(tier.description, cardWidth - 10);
    descLines.forEach((line: string) => {
      doc.text(line, xPos + 5, cardY);
      cardY += 3.5;
    });
    doc.setTextColor(0, 0, 0);
    cardY += 2;

    // Features
    doc.setFontSize(8);
    doc.setFont("helvetica", "normal");
    tier.features.forEach((feature) => {
      if (cardY > yPos + cardHeight - 5) return; // Stop if we run out of space
      doc.setTextColor(204, 0, 0);
      doc.text("✓", xPos + 5, cardY);
      doc.setTextColor(0, 0, 0);
      const featureLines = doc.splitTextToSize(feature, cardWidth - 15);
      const firstLine = featureLines[0];
      doc.text(firstLine, xPos + 9, cardY);
      cardY += 4;
    });

    return cardHeight;
  };

  // Row 1: Executive and Gold
  checkNewPage(80);
  const columnGap = 8;
  const cardWidth = (contentWidth - columnGap) / 2;
  

  // Render tiers: 2 per row, then last as full width if odd
  let i = 0;
  while (i < sponsorshipTiers.length) {
    checkNewPage(80);
    if (i + 1 < sponsorshipTiers.length - 1) {
      renderTierCard(sponsorshipTiers[i], margin, yPosition, cardWidth);
      renderTierCard(sponsorshipTiers[i + 1], margin + cardWidth + columnGap, yPosition, cardWidth);
      yPosition += 75;
      i += 2;
    } else {
      // Last card, full width
      doc.setDrawColor(200, 200, 200);
      doc.setLineWidth(0.5);
      doc.setFillColor(249, 249, 249);
      doc.roundedRect(margin, yPosition, contentWidth, 65, 3, 3, "FD");
      const tier = sponsorshipTiers[i];
      doc.setTextColor(0, 0, 0);
      doc.setFontSize(16);
      doc.setFont("helvetica", "bold");
      doc.text(`${tier.level} Sponsor`, margin + 5, yPosition + 10);
      // Price at bottom, $ in front, center-aligned and prominent
      const priceY = yPosition + 65 - 8;
      doc.setTextColor(204, 0, 0);
      doc.setFontSize(22);
      doc.setFont("helvetica", "bold");
      doc.text(tier.price.startsWith('$') ? tier.price : `$ ${tier.price}`, pageWidth / 2, priceY, { align: "center" });
      doc.setTextColor(0, 0, 0);
      let tierY = yPosition + 18;
      // Description
      doc.setFontSize(9);
      doc.setFont("helvetica", "italic");
      doc.setTextColor(80, 80, 80);
      const descLines = doc.splitTextToSize(tier.description, contentWidth - 15);
      descLines.forEach((line: string) => {
        doc.text(line, margin + 5, tierY);
        tierY += 4;
      });
      doc.setTextColor(0, 0, 0);
      tierY += 2;
      // Features
      doc.setFontSize(9);
      doc.setFont("helvetica", "normal");
      tier.features.forEach((feature) => {
        doc.setTextColor(204, 0, 0);
        doc.text("✓", margin + 7, tierY);
        doc.setTextColor(0, 0, 0);
        const featureLines = doc.splitTextToSize(feature, contentWidth - 20);
        featureLines.forEach((line: string, index: number) => {
          doc.text(line, margin + 12, tierY);
          if (index < featureLines.length - 1) tierY += 4;
        });
        tierY += 5;
      });
      yPosition += 75;
      i++;
    }
  }


  // CTA Section
  checkNewPage(60);
  doc.setFillColor(204, 0, 0);
  doc.roundedRect(margin, yPosition, contentWidth, 60, 5, 5, "F");
  doc.setTextColor(255, 255, 255);
  doc.setFontSize(16);
  doc.setFont("helvetica", "bold");
  doc.text(ctaTitle, pageWidth / 2, yPosition + 11, { align: "center" });
  doc.setFontSize(11);
  doc.setFont("helvetica", "normal");
  // Wrap CTA text
  const ctaLines = doc.splitTextToSize(ctaText, contentWidth - 20);
  let ctaY = yPosition + 22;
  ctaLines.forEach((line: string) => {
    doc.text(line, pageWidth / 2, ctaY, { align: "center" });
    ctaY += 5;
  });
  // Contact line
  doc.setFont("helvetica", "bold");
  doc.text(contactLine, pageWidth / 2, ctaY + 2, { align: "center" });
  // Website and email
  doc.setFontSize(10);
  doc.setFont("helvetica", "normal");
  doc.setTextColor(255, 255, 255);
  const webEmailY = ctaY + 10;
  const webEmailLine = `${website}  |  ${email}`;
  doc.text(webEmailLine, pageWidth / 2, webEmailY, { align: "center" });
  // Add clickable links
  const leftX = pageWidth / 2 - doc.getTextWidth(webEmailLine) / 2;
  doc.textWithLink(website, leftX, webEmailY, { url: `https://${website.replace(/^https?:\/\//, "")}` });
  const emailX = leftX + doc.getTextWidth(`${website}  |  `);
  doc.textWithLink(email, emailX, webEmailY, { url: `mailto:${email}` });
  yPosition += 70;
  doc.setTextColor(0, 0, 0);

  // Footer
  doc.setFillColor(204, 0, 0);
  doc.rect(0, pageHeight - 28, pageWidth, 28, "F");
  
  doc.setTextColor(255, 255, 255);
  doc.setFontSize(14);
  doc.setFont("helvetica", "bold");
  doc.text("Canadian Quality and Testing Association", pageWidth / 2, pageHeight - 18, { align: "center" });
  
  doc.setFontSize(8);
  doc.setFont("helvetica", "normal");
  doc.text(`© ${new Date().getFullYear()} Canadian Quality and Testing Association. All rights reserved.`, pageWidth / 2, pageHeight - 8, { align: "center" });

  return doc;
}
