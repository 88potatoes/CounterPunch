import { Link, Outlet, useNavigate } from 'react-router-dom'
import { ClerkProvider, SignedIn, SignedOut, SignIn, UserButton } from '@clerk/clerk-react'
import { ReactComponent as Logo } from '/CounterPunchLogo.svg';


const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY

if (!PUBLISHABLE_KEY) {
  throw new Error("Missing Publishable Key")
}

export default function RootLayout() {
  const navigate = useNavigate();

  return (
    <ClerkProvider
      routerPush={(to) => navigate(to)}
      routerReplace={(to) => navigate(to, { replace: true })}
      publishableKey={PUBLISHABLE_KEY}
    >
      <header className="header">
        <div>
          <div>
            <Logo/>
          </div>
          <SignedIn>
            <UserButton />
          </SignedIn>
          <SignedOut>
            <SignIn/>
          </SignedOut>
        </div>
      </header>
      <main>
        <Outlet />
      </main>
    </ClerkProvider>
  )
}