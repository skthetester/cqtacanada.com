import { ClerkProvider, SignedIn, SignedOut, SignInButton, UserButton } from '@clerk/nextjs';
import { ReactNode } from 'react';

export default function AdminLayout({ children }: { children: ReactNode }) {
  return (
    <ClerkProvider>
      <div style={{ minHeight: '100vh', background: '#181a20', display: 'flex', flexDirection: 'column' }}>
        <header style={{
          padding: '1rem 2rem',
          borderBottom: '1px solid #23242a',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          background: '#23242a',
          maxWidth: 1100,
          width: '100%',
          margin: '0 auto',
        }}>
          <h1 style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 700, color: '#fff', fontSize: '2rem', letterSpacing: '-1px', margin: 0 }}>Admin Panel</h1>
          <div>
            <SignedIn>
              <UserButton afterSignOutUrl="/" />
            </SignedIn>
            <SignedOut>
              <div style={{ display: 'inline-block', background: '#ff5252', borderRadius: '0.5rem', padding: '0.5rem 1.5rem' }}>
                <SignInButton
                  afterSignInUrl="/admin"
                  mode="modal"
                  // @ts-ignore
                  style={{ color: '#fff', fontWeight: 600, fontSize: '1rem', background: 'none', border: 'none', boxShadow: 'none', cursor: 'pointer' }}
                />
              </div>
            </SignedOut>
          </div>
        </header>
        <div style={{ borderBottom: '1px solid #23242a', width: '100%', maxWidth: 1100, margin: '0 auto' }} />
        <main style={{
          flex: 1,
          padding: '3rem 1rem',
          maxWidth: 1100,
          width: '100%',
          margin: '0 auto',
          color: '#e0e0e0',
        }}>
          <SignedIn>
            {children}
          </SignedIn>
          <SignedOut>
            <div style={{ textAlign: 'center', marginTop: 80 }}>
              <p style={{ color: '#ff5252', fontWeight: 500, fontSize: '1.2rem' }}>Please sign in to access the admin panel.</p>
            </div>
          </SignedOut>
        </main>
      </div>
    </ClerkProvider>
  );
}
