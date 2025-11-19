
'use client';

import { motion } from "framer-motion";
import { useUser } from "@clerk/nextjs";
import { useEffect, useState } from "react";

const adminActions = [
  {
    title: "Content Management",
    description: "Edit site content and manage posts using Netlify CMS.",
    href: "/admin/cms",
    external: true,
    button: "Open Netlify CMS",
  },
  {
    title: "Storage Management",
    description: "Upload, view, and organize files in Supabase Storage.",
    href: "/admin/storage",
    external: false,
    button: "Manage Storage",
  },
  {
    title: "Email Testing",
    description: "Send a test email using Resend integration.",
    href: "/admin/email",
    external: false,
    button: "Send Test Email",
  },
];

export default function AdminPage() {
  const { user, isLoaded } = useUser();
  const username = user?.firstName || user?.username || user?.emailAddresses?.[0]?.emailAddress || "User";
  const [isAdmin, setIsAdmin] = useState<boolean | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!isLoaded) return;
    async function checkAdmin() {
      setLoading(true);
      const res = await fetch("/api/check-admin");
      if (res.ok) {
        const data = await res.json();
        setIsAdmin(data.admin);
      } else {
        setIsAdmin(false);
      }
      setLoading(false);
    }
    checkAdmin();
  }, [isLoaded]);

  if (loading || !isLoaded) {
    return <div style={{ color: '#fff', textAlign: 'center', marginTop: 80 }}>Checking admin access...</div>;
  }
  if (!isAdmin) {
    return <div style={{ color: '#ff5252', textAlign: 'center', marginTop: 80, fontWeight: 500, fontSize: '1.2rem' }}>Access denied. You are not an admin.</div>;
  }

  return (
    <motion.section
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      style={{ maxWidth: 1100, margin: "0 auto" }}
    >
      <h2
        style={{
          fontFamily: "Poppins, sans-serif",
          fontWeight: 600,
          fontSize: "2rem",
          marginBottom: "2rem",
          color: "#fff",
          letterSpacing: "-1px",
        }}
      >
        Welcome{user ? `, ${username}` : ""} to the Admin Panel
      </h2>
      <div
        style={{
          display: "grid",
          gap: "2rem",
          gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
        }}
      >
        {adminActions.map((action, idx) => (
          <motion.div
            key={action.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 * idx, duration: 0.5 }}
            style={{
              background: "#23242a",
              borderRadius: "1rem",
              boxShadow: "0 2px 16px 0 rgba(0,0,0,0.18)",
              padding: "2rem 1.5rem 1.5rem 1.5rem",
              border: "1px solid #292a33",
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
              minHeight: 200,
            }}
          >
            <h3
              style={{
                fontFamily: "Poppins, sans-serif",
                fontWeight: 500,
                fontSize: "1.25rem",
                marginBottom: 8,
                color: "#ff5252",
              }}
            >
              {action.title}
            </h3>
            <p style={{ color: "#bdbdbd", marginBottom: 24 }}>{action.description}</p>
            <a
              href={action.href}
              target={action.external ? "_blank" : undefined}
              rel={action.external ? "noopener noreferrer" : undefined}
              className="carousel-btn"
              style={{
                marginTop: "auto",
                background: "#ff5252",
                color: "#fff",
                borderColor: "#ff5252",
                boxShadow: "0 2px 8px 0 rgba(255,82,82,0.10)",
              }}
            >
              {action.button}
            </a>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}
