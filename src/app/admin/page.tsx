export default function AdminPage() {
  return (
    <div>
      <h2>Welcome to the Admin Panel</h2>
      <ul>
        <li><a href="/admin/cms" target="_blank" rel="noopener noreferrer">Open Netlify CMS</a></li>
        <li><a href="/admin/storage">Manage Storage (Supabase)</a></li>
        <li><a href="/admin/email">Send Test Email (Resend)</a></li>
      </ul>
    </div>
  );
}
