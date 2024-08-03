import { Outlet, useNavigate } from 'react-router-dom'
import { ClerkProvider, SignedIn, SignedOut, UserButton, useClerk } from '@clerk/clerk-react'
import { Button } from '@/components/ui/button';

const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY

if (!PUBLISHABLE_KEY) {
  throw new Error("Missing Publishable Key")
}

function SignInButton() {
  const { openSignIn } = useClerk();

  return (
    <Button onClick={() => openSignIn({ redirectUrl: window.location.href })}>
      Sign In
    </Button>
  );
}

export default function RootLayout() {
  const navigate = useNavigate();

  return (
    <ClerkProvider
      routerPush={(to) => navigate(to)}
      routerReplace={(to) => navigate(to, { replace: true })}
      publishableKey={PUBLISHABLE_KEY}
    >
      <header className="header flex justify-between px-3">
          <div className=''>
            <img src="/Discord-logo.svg" alt="Counter Punch Logo" className='h-[100px]'/>
          </div>
          <SignedIn>
            <UserButton />
          </SignedIn>
          <SignedOut>
            <SignInButton />
          </SignedOut>
      </header>
      <main>
        <Outlet />
      </main>
    </ClerkProvider>
  )
}