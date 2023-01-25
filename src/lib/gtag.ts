interface Window {
  gtag(
    _: string,
    GA_MEASUREMENT_ID: string,
    pagePath: { page_path: string },
  ): unknown;
}
declare const window: Window;

export const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA_ID || '';

export const pageview = (url: string) => {
  window.gtag('config', GA_MEASUREMENT_ID, {
    page_path: url,
  });
};
