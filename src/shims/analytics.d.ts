import { SegmentAnalytics } from '@segment/analytics.js-core'

declare global {
  interface Window {
    analytics: SegmentAnalytics.AnalyticsJS
  }
}
