import '@testing-library/jest-dom/vitest'
import { vi } from 'vitest'

// JSDOM doesn't implement IntersectionObserver; framer-motion's whileInView needs it.
class MockIntersectionObserver {
  observe = vi.fn()
  unobserve = vi.fn()
  disconnect = vi.fn()
  takeRecords = vi.fn(() => [])
  root = null
  rootMargin = ''
  thresholds = []
}

vi.stubGlobal('IntersectionObserver', MockIntersectionObserver)
