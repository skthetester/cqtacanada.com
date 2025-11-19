import { ClerkProvider, SignedIn, SignedOut, SignInButton, UserButton } from '@clerk/nextjs';
import { ReactNode } from 'react';

export default function AdminLayout({ children }: { children: ReactNode }) {
  return (
    <ClerkProvider>
      <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
        <header style={{ padding: '1rem', borderBottom: '1px solid #eee', display: 'flex', justifyContent: 'space-between' }}>
          <h1>Admin Panel</h1>
          <SignedIn>
            <UserButton afterSignOutUrl="/" />
          </SignedIn>
          <SignedOut>
            <SignInButton />
          </SignedOut>
        </header>
        <main style={{ flex: 1, padding: '2rem' }}>
          <SignedIn>
            {children}
          </SignedIn>
          <SignedOut>
            <p>Please sign in to access the admin panel.</p>
          </SignedOut>
        </main>
      </div>
    </ClerkProvider>
  );
}
