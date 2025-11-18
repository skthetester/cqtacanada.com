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

export function generateSponsorshipBrochure(): jsPDF {
  const doc = new jsPDF();
  const pageWidth = doc.internal.pageSize.getWidth();
  const pageHeight = doc.internal.pageSize.getHeight();
  const margin = 20;
  const contentWidth = pageWidth - 2 * margin;
  let yPosition = margin;

  // Set PDF document properties
  doc.setProperties({
    title: 'CQTA Sponsorship Opportunities',
    subject: 'CQTA Sponsorship Package Information',
    author: 'CQTA - Canadian Quality and Testing Association',
    keywords: 'CQTA, Sponsorship, Quality Engineering, Testing, Canada',
    creator: 'CQTA'
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
    const footerY = pageHeight - 15;
    doc.setFontSize(8);
    doc.setTextColor(100, 100, 100);
    doc.setFont("helvetica", "normal");
    doc.text("CQTA", margin, footerY);
    doc.text(`© ${new Date().getFullYear()} CQTA. All rights reserved.`, pageWidth / 2, footerY, { align: "center" });
    doc.text(`Page ${doc.getCurrentPageInfo().pageNumber}`, pageWidth - margin, footerY, { align: "right" });
    doc.setTextColor(0, 0, 0);
  };

  // Header - CQTA branding
  doc.setFillColor(204, 0, 0); // Red color #cc0000
  doc.rect(0, 0, pageWidth, 32, "F");
  doc.setTextColor(255, 255, 255);
  doc.setFontSize(20);
  doc.setFont("helvetica", "bold");
  doc.text("CQTA", pageWidth / 2, 15, { align: "center" });
  doc.setFontSize(9);
  doc.text("Canadian Quality and Testing Association", pageWidth / 2, 24, { align: "center" });
  
  yPosition = 40;
  doc.setTextColor(0, 0, 0);

  // Main Title
  doc.setFontSize(16);
  doc.setFont("helvetica", "bold");
  doc.text("Sponsorship Opportunities", pageWidth / 2, yPosition, { align: "center" });
  yPosition += 10;

  // Introduction box
  doc.setFillColor(243, 244, 246); // Light gray
  const introHeight = 30;
  doc.rect(margin, yPosition, contentWidth, introHeight, "F");
  doc.setFontSize(9);
  doc.setFont("helvetica", "normal");
  const introLines = doc.splitTextToSize(
    "Partner with CQTA to elevate your brand and contribute to the advancement of quality engineering across the nation. Our sponsorship packages provide exceptional opportunities for brand exposure, industry leadership, and engagement with Canada's premier quality engineering community.",
    contentWidth - 10
  );
  let introY = yPosition + 6;
  introLines.forEach((line: string) => {
    doc.text(line, margin + 5, introY);
    introY += 5;
  });
  yPosition += introHeight + 10;

  // Sponsorship tiers data
  const sponsorshipTiers: SponsorshipTier[] = [
    {
      level: "Executive",
      price: "$7,500 CAD",
      highlight: true,
      features: [
        "All Gold, Silver & Bronze benefits",
        "Exclusive 30-minute speaker slot",
        "Opportunity to demo product(s)",
        "Sponsor CQTA Awards",
        "Highest tier branding & recognition"
      ],
      description: "Includes all benefits of Gold, Silver and Bronze sponsors with exclusive premium features"
    },
    {
      level: "Gold",
      price: "$5,000 CAD",
      popular: true,
      features: [
        "5 social media shoutouts (2 post-event)",
        "Recognition twice during the event",
        "Table booth at event venue",
        "Post-event attendee contact list (opt-in)",
        "6 complimentary event passes",
        "5-minute speaking slot in keynote/panel",
        "Branded swag in attendee kits"
      ],
      description: "Premium sponsorship with extensive brand exposure and engagement opportunities"
    },
    {
      level: "Silver",
      price: "$3,000 CAD",
      features: [
        "3 social media shoutouts (1 post-event)",
        "Recognition once during the event",
        "Table booth at event venue",
        "4 complimentary event passes",
        "Branded swag in attendee kits"
      ],
      description: "Ideal mid-tier sponsorship with excellent brand visibility"
    },
    {
      level: "Bronze",
      price: "$2,000 CAD",
      features: [
        "2 social media shoutouts (1 post-event)",
        "Recognition once during the event",
        "Sponsor logo displayed on event banner",
        "2 complimentary event passes",
        "Branded swag in attendee kits"
      ],
      description: "Entry-level sponsorship with solid brand exposure"
    },
    {
      level: "After Hours",
      price: "Contact CQTA",
      contactButton: true,
      features: [
        "Exclusive after-hours networking session sponsorship",
        "3 social media shoutouts (1 post-event)",
        "Recognition during after-hours session",
        "Table booth at the venue",
        "Post-event attendee contact list (opt-in)"
      ],
      description: "Exclusive sponsorship opportunity for the after-hours networking experience"
    }
  ];

  // Render each sponsorship tier
  sponsorshipTiers.forEach((tier) => {
    checkNewPage(70);

    // Tier box
    const tierBoxHeight = 60;
    
    // Border color based on tier
    if (tier.highlight) {
      doc.setDrawColor(204, 0, 0); // Red
      doc.setLineWidth(1.5);
    } else if (tier.popular) {
      doc.setDrawColor(74, 85, 104); // Dark gray
      doc.setLineWidth(1.5);
    } else {
      doc.setDrawColor(200, 200, 200);
      doc.setLineWidth(0.5);
    }
    
    doc.setFillColor(249, 249, 249);
    doc.roundedRect(margin, yPosition, contentWidth, tierBoxHeight, 3, 3, "FD");
    
    // Badge if premium or popular
    if (tier.highlight) {
      doc.setFillColor(204, 0, 0);
      doc.rect(margin, yPosition, contentWidth, 6, "F");
      doc.setTextColor(255, 255, 255);
      doc.setFontSize(8);
      doc.setFont("helvetica", "bold");
      doc.text("PREMIUM TIER", pageWidth / 2, yPosition + 4, { align: "center" });
      yPosition += 6;
    } else if (tier.popular) {
      doc.setFillColor(74, 85, 104);
      doc.rect(margin, yPosition, contentWidth, 6, "F");
      doc.setTextColor(255, 255, 255);
      doc.setFontSize(8);
      doc.setFont("helvetica", "bold");
      doc.text("POPULAR CHOICE", pageWidth / 2, yPosition + 4, { align: "center" });
      yPosition += 6;
    }

    // Tier name and price
    doc.setTextColor(0, 0, 0);
    doc.setFontSize(14);
    doc.setFont("helvetica", "bold");
    doc.text(`${tier.level} Sponsor`, margin + 5, yPosition + 10);
    
    doc.setTextColor(204, 0, 0);
    doc.setFontSize(16);
    doc.text(tier.price, pageWidth - margin - 5, yPosition + 10, { align: "right" });
    doc.setTextColor(0, 0, 0);
    
    yPosition += 16;

    // Description
    doc.setFontSize(8);
    doc.setFont("helvetica", "italic");
    doc.setTextColor(100, 100, 100);
    const descLines = doc.splitTextToSize(tier.description, contentWidth - 15);
    descLines.forEach((line: string) => {
      doc.text(line, margin + 5, yPosition);
      yPosition += 4;
    });
    doc.setTextColor(0, 0, 0);
    yPosition += 2;

    // Features
    doc.setFontSize(8);
    doc.setFont("helvetica", "normal");
    tier.features.forEach((feature) => {
      doc.setTextColor(204, 0, 0);
      doc.text("V", margin + 7, yPosition);
      doc.setTextColor(0, 0, 0);
      const featureLines = doc.splitTextToSize(feature, contentWidth - 20);
      featureLines.forEach((line: string, index: number) => {
        doc.text(line, margin + 12, yPosition);
        if (index < featureLines.length - 1) yPosition += 3.5;
      });
      yPosition += 4.5;
    });

    yPosition += 10;
    doc.setLineWidth(0.5);
    doc.setDrawColor(200, 200, 200);
  });

  // Call to Action
  checkNewPage(40);
  doc.setFillColor(204, 0, 0);
  doc.roundedRect(margin, yPosition, contentWidth, 35, 5, 5, "F");
  doc.setTextColor(255, 255, 255);
  doc.setFontSize(14);
  doc.setFont("helvetica", "bold");
  doc.text("Join CQTA as a Sponsor", pageWidth / 2, yPosition + 10, { align: "center" });
  
  doc.setFontSize(9);
  doc.setFont("helvetica", "normal");
  doc.text("Showcase your commitment to quality engineering and connect directly with", pageWidth / 2, yPosition + 18, { align: "center" });
  doc.text("industry professionals through a trusted national platform.", pageWidth / 2, yPosition + 24, { align: "center" });
  
  doc.setFont("helvetica", "bold");
  doc.text("Contact us today to discuss your sponsorship package!", pageWidth / 2, yPosition + 31, { align: "center" });
  yPosition += 45;

  // Contact Information
  checkNewPage(30);
  doc.setTextColor(0, 0, 0);
  doc.setFontSize(10);
  doc.setFont("helvetica", "bold");
  doc.text("Contact Information", pageWidth / 2, yPosition, { align: "center" });
  yPosition += 8;
  
  doc.setFontSize(9);
  doc.setFont("helvetica", "normal");
  doc.text("Website: cqtacanada.com", pageWidth / 2, yPosition, { align: "center" });
  yPosition += 6;
  doc.text("Email: info@cqtacanada.com", pageWidth / 2, yPosition, { align: "center" });
  yPosition += 6;
  doc.text("Visit our website for more information and to apply", pageWidth / 2, yPosition, { align: "center" });

  // Footer
  doc.setFillColor(204, 0, 0);
  doc.rect(0, pageHeight - 30, pageWidth, 30, "F");
  
  doc.setTextColor(255, 255, 255);
  doc.setFontSize(12);
  doc.setFont("helvetica", "bold");
  doc.text("CQTA", pageWidth / 2, pageHeight - 21, { align: "center" });
  
  doc.setFontSize(7);
  doc.setFont("helvetica", "normal");
  doc.text("Canadian Quality and Testing Association", pageWidth / 2, pageHeight - 15, { align: "center" });
  doc.text(`© ${new Date().getFullYear()} CQTA. All rights reserved.`, pageWidth / 2, pageHeight - 10, { align: "center" });
  doc.text("cqtacanada.com | info@cqtacanada.com", pageWidth / 2, pageHeight - 5, { align: "center" });

  return doc;
}
