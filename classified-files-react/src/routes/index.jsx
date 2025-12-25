import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { lazy, Suspense } from 'react'
import LoadingScreen from '@components/UI/LoadingScreen'

// Lazy load route components for code splitting
const Home = lazy(() => import('./Home'))
const CaseSelection = lazy(() => import('./CaseSelection'))
const Game = lazy(() => import('./Game'))
const PaymentSuccess = lazy(() => import('./PaymentSuccess'))
const PaymentCancel = lazy(() => import('./PaymentCancel'))
const NotFound = lazy(() => import('./NotFound'))

// Route configuration
const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <Suspense fallback={<LoadingScreen />}>
        <Home />
      </Suspense>
    ),
  },
  {
    path: '/cases',
    element: (
      <Suspense fallback={<LoadingScreen />}>
        <CaseSelection />
      </Suspense>
    ),
  },
  {
    path: '/game/:caseId',
    element: (
      <Suspense fallback={<LoadingScreen />}>
        <Game />
      </Suspense>
    ),
  },
  {
    path: '/payment-success',
    element: (
      <Suspense fallback={<LoadingScreen />}>
        <PaymentSuccess />
      </Suspense>
    ),
  },
  {
    path: '/payment-cancel',
    element: (
      <Suspense fallback={<LoadingScreen />}>
        <PaymentCancel />
      </Suspense>
    ),
  },
  {
    path: '*',
    element: (
      <Suspense fallback={<LoadingScreen />}>
        <NotFound />
      </Suspense>
    ),
  },
])

export function AppRouter() {
  return <RouterProvider router={router} />
}

export default AppRouter
