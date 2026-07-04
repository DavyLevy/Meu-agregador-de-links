import React from "react";

/* Brand-coloured social icons (inline SVG) */

export const InstagramIcon = ({ size = 22, className = "" }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    className={className}
    aria-hidden="true"
  >
    <defs>
      <radialGradient id="ig-grad" cx="30%" cy="110%" r="120%">
        <stop offset="0%" stopColor="#FED576" />
        <stop offset="25%" stopColor="#F47133" />
        <stop offset="50%" stopColor="#BC3081" />
        <stop offset="75%" stopColor="#4C63D2" />
      </radialGradient>
    </defs>
    <rect x="2" y="2" width="20" height="20" rx="5.5" fill="url(#ig-grad)" />
    <circle
      cx="12"
      cy="12"
      r="4.2"
      fill="none"
      stroke="#fff"
      strokeWidth="1.8"
    />
    <circle cx="17.4" cy="6.6" r="1.1" fill="#fff" />
  </svg>
);

export const FacebookIcon = ({ size = 22, className = "" }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    className={className}
    aria-hidden="true"
  >
    <path
      fill="#1877F2"
      d="M22 12.07C22 6.51 17.52 2 12 2S2 6.51 2 12.07c0 5.02 3.66 9.19 8.44 9.93v-7.02H7.9v-2.91h2.54V9.85c0-2.51 1.49-3.9 3.77-3.9 1.09 0 2.24.2 2.24.2v2.46h-1.26c-1.24 0-1.63.77-1.63 1.56v1.87h2.78l-.44 2.91h-2.34V22c4.78-.74 8.44-4.91 8.44-9.93Z"
    />
  </svg>
);

export const TikTokIcon = ({ size = 22, className = "" }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    className={className}
    aria-hidden="true"
  >
    {/* TikTok: black silhouette with cyan + magenta offsets */}
    <path
      fill="#25F4EE"
      d="M15.6 4.2c.7 1.4 2 2.4 3.6 2.6v3a7.7 7.7 0 0 1-3.9-1v6.7a5.6 5.6 0 1 1-5.6-5.6c.3 0 .6 0 .9.1v3.1a2.6 2.6 0 1 0 1.7 2.4V2.2h3.3v2Z"
    />
    <path
      fill="#FE2C55"
      d="M17.6 4.2c.7 1.4 2 2.4 3.6 2.6v3a7.7 7.7 0 0 1-3.9-1v6.7a5.6 5.6 0 1 1-5.6-5.6c.3 0 .6 0 .9.1v3.1a2.6 2.6 0 1 0 1.7 2.4V2.2h3.3v2Z"
    />
    <path
      fill="#000"
      d="M16.6 4.2c.7 1.4 2 2.4 3.6 2.6v3a7.7 7.7 0 0 1-3.9-1v6.7a5.6 5.6 0 1 1-5.6-5.6c.3 0 .6 0 .9.1v3.1a2.6 2.6 0 1 0 1.7 2.4V2.2h3.3v2Z"
    />
  </svg>
);

export const YouTubeIcon = ({ size = 22, className = "" }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    className={className}
    aria-hidden="true"
  >
    <path
      fill="#FF0000"
      d="M23.5 7.1a3 3 0 0 0-2.1-2.1C19.6 4.5 12 4.5 12 4.5s-7.6 0-9.4.5A3 3 0 0 0 .5 7.1 31.6 31.6 0 0 0 0 12a31.6 31.6 0 0 0 .5 4.9 3 3 0 0 0 2.1 2.1c1.8.5 9.4.5 9.4.5s7.6 0 9.4-.5a3 3 0 0 0 2.1-2.1A31.6 31.6 0 0 0 24 12a31.6 31.6 0 0 0-.5-4.9Z"
    />
    <path fill="#fff" d="M9.75 15.5V8.5L15.75 12l-6 3.5Z" />
  </svg>
);

export const WhatsAppIcon = ({ size = 28, className = "" }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 32 32"
    className={className}
    aria-hidden="true"
  >
    <circle cx="16" cy="16" r="16" fill="#25D366" />
    <path
      fill="#fff"
      d="M22.6 18.7c-.3-.2-1.9-.9-2.2-1-.3-.1-.5-.2-.7.2-.2.3-.8 1-1 1.2-.2.2-.4.2-.7.1-.3-.2-1.3-.5-2.5-1.5-.9-.8-1.5-1.8-1.7-2.1-.2-.3 0-.5.1-.6.1-.1.3-.4.5-.5.2-.2.2-.3.3-.5.1-.2 0-.4 0-.5 0-.1-.7-1.7-1-2.3-.2-.6-.5-.5-.7-.5h-.6c-.2 0-.5.1-.8.4-.3.3-1 1-1 2.5s1.1 2.9 1.2 3.1c.2.2 2.2 3.4 5.4 4.6.7.3 1.3.5 1.8.6.7.2 1.4.2 1.9.1.6-.1 1.9-.8 2.1-1.5.3-.7.3-1.3.2-1.5-.1-.2-.3-.3-.6-.4Z"
    />
    <path
      fill="#fff"
      d="M16.1 7.5c-4.8 0-8.7 3.9-8.7 8.6 0 1.5.4 3 1.1 4.3l-1.2 4.4 4.5-1.2c1.3.7 2.7 1.1 4.2 1.1 4.8 0 8.7-3.9 8.7-8.6S20.9 7.5 16.1 7.5Zm0 15.7c-1.3 0-2.7-.4-3.8-1l-.3-.2-2.7.7.7-2.6-.2-.3a7 7 0 0 1-1.1-3.7c0-3.9 3.2-7 7.1-7s7.1 3.1 7.1 7-3.2 7.1-7 7.1Z"
    />
  </svg>
);

export const MailIcon = ({ size = 16, className = "" }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    aria-hidden="true"
  >
    <rect x="3" y="5" width="18" height="14" rx="2.5" />
    <path d="m3 7 9 6 9-6" />
  </svg>
);

export const ArrowRightIcon = ({ size = 16, className = "" }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2.4"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    aria-hidden="true"
  >
    <path d="M5 12h14" />
    <path d="m13 5 7 7-7 7" />
  </svg>
);

export const ChevronLeftIcon = ({ size = 22, className = "" }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2.2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    aria-hidden="true"
  >
    <path d="m15 18-6-6 6-6" />
  </svg>
);

export const SearchEyeIcon = ({ size = 28, className = "", style }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.9"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    style={style}
    aria-hidden="true"
  >
    <circle cx="11" cy="11" r="7" />
    <path d="m20 20-3.5-3.5" />
    <circle cx="11" cy="11" r="2.2" fill="currentColor" stroke="none" />
  </svg>
);

export const PlayIcon = ({ size = 24, className = "" }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
    aria-hidden="true"
  >
    <path d="M8 5v14l11-7L8 5Z" />
  </svg>
);

export const AndroidIcon = ({ size = 28, className = "", style }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    className={className}
    style={style}
    aria-hidden="true"
  >
    <path
      fill="#3DDC84"
      d="M17.5 10.8c-.5 0-.9.4-.9.9v4.5c0 .5.4.9.9.9s.9-.4.9-.9v-4.5c0-.5-.4-.9-.9-.9Zm-11 0c-.5 0-.9.4-.9.9v4.5c0 .5.4.9.9.9s.9-.4.9-.9v-4.5c0-.5-.4-.9-.9-.9Zm.6 5.7v.9c0 .5.4.9.9.9h.9v2.3c0 .5.4.9.9.9s.9-.4.9-.9v-2.3h1.4v2.3c0 .5.4.9.9.9s.9-.4.9-.9v-2.3h.9c.5 0 .9-.4.9-.9v-6.4H7.1v5.5Zm8.5-7.4c0-2.1-1.6-3.9-3.7-4.1L13 4.4c.1-.1.1-.2 0-.3-.1-.1-.2-.1-.3 0l-.7 1.2c-.3-.1-.6-.1-1 0l-.7-1.2c-.1-.1-.2-.1-.3 0-.1.1-.1.2 0 .3l.7 1.2C8.6 5.9 7 7.7 7 9.1h9.6Zm-6-1.4c-.2 0-.4-.2-.4-.4s.2-.4.4-.4.4.2.4.4-.2.4-.4.4Zm3 0c-.2 0-.4-.2-.4-.4s.2-.4.4-.4.4.2.4.4-.2.4-.4.4Z"
    />
  </svg>
);

export const AppleIcon = ({ size = 28, className = "", style }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    className={className}
    style={style}
    aria-hidden="true"
  >
    <path
      fill="currentColor"
      d="M16.4 12.5c0-2.3 1.9-3.4 2-3.5-1.1-1.6-2.8-1.8-3.4-1.8-1.4-.1-2.8.9-3.6.9-.7 0-1.9-.8-3.1-.8-1.6 0-3.1.9-3.9 2.4-1.7 2.9-.4 7.2 1.2 9.6.8 1.1 1.8 2.4 3.1 2.4 1.2 0 1.7-.8 3.2-.8s1.9.8 3.2.8c1.3 0 2.2-1.2 3-2.3 1-1.4 1.4-2.7 1.4-2.7-.1-.1-2.7-1-2.7-4.2ZM14 5.1c.7-.8 1.1-2 1-3.1-1 0-2.2.6-2.9 1.4-.6.7-1.2 1.9-1 3 1.1.1 2.2-.5 2.9-1.3Z"
    />
  </svg>
);

export const MoneyIcon = ({ size = 28, className = "", style }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.9"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    style={style}
    aria-hidden="true"
  >
    <rect x="2.5" y="6.5" width="19" height="11" rx="2.5" />
    <circle cx="12" cy="12" r="2.6" />
    <path d="M6 10v4M18 10v4" />
  </svg>
);
