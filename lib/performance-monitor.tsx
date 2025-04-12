"use client"

import { useEffect, useState } from 'react'

interface PerformanceMetrics {
  fcp: number | null
  lcp: number | null
  cls: number | null
  fid: number | null
  ttfb: number | null
}

export function usePerformanceMonitoring(enableLog = false) {
  const [metrics, setMetrics] = useState<PerformanceMetrics>({
    fcp: null,
    lcp: null,
    cls: null,
    fid: null,
    ttfb: null,
  })

  useEffect(() => {
    if (typeof window === 'undefined' || !('PerformanceObserver' in window)) {
      return
    }

    // First Contentful Paint
    const fcpObserver = new PerformanceObserver((entryList) => {
      const entries = entryList.getEntries();
      if (entries.length > 0) {
        const fcp = entries[0].startTime;
        setMetrics(prev => ({ ...prev, fcp }));
        if (enableLog) console.log('FCP:', fcp);
      }
    });
    fcpObserver.observe({ type: 'paint', buffered: true });

    // Largest Contentful Paint
    const lcpObserver = new PerformanceObserver((entryList) => {
      const entries = entryList.getEntries();
      const lastEntry = entries[entries.length - 1];
      const lcp = lastEntry?.startTime || null;
      setMetrics(prev => ({ ...prev, lcp }));
      if (enableLog) console.log('LCP:', lcp);
    });
    lcpObserver.observe({ type: 'largest-contentful-paint', buffered: true });

    // Cumulative Layout Shift
    let clsValue = 0;
    const clsObserver = new PerformanceObserver((entryList) => {
      for (const entry of entryList.getEntries()) {
        if (!entry.hadRecentInput) {
          clsValue += (entry as any).value;
          setMetrics(prev => ({ ...prev, cls: clsValue }));
          if (enableLog) console.log('CLS:', clsValue);
        }
      }
    });
    clsObserver.observe({ type: 'layout-shift', buffered: true });

    // First Input Delay
    const fidObserver = new PerformanceObserver((entryList) => {
      const entries = entryList.getEntries();
      if (entries.length > 0) {
        const fid = entries[0].processingStart - entries[0].startTime;
        setMetrics(prev => ({ ...prev, fid }));
        if (enableLog) console.log('FID:', fid);
      }
    });
    fidObserver.observe({ type: 'first-input', buffered: true });

    // Time to First Byte
    const navEntry = performance.getEntriesByType('navigation')[0];
    if (navEntry) {
      const ttfb = (navEntry as any).responseStart;
      setMetrics(prev => ({ ...prev, ttfb }));
      if (enableLog) console.log('TTFB:', ttfb);
    }

    return () => {
      fcpObserver.disconnect();
      lcpObserver.disconnect();
      clsObserver.disconnect();
      fidObserver.disconnect();
    };
  }, [enableLog]);

  return metrics;
}
