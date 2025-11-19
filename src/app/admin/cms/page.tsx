import { redirect } from 'next/navigation';

export default function AdminCMSPage() {
  // Redirect to the Netlify CMS static admin UI
  redirect('/admin/');
  return null;
}
