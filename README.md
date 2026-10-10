# Rick & GO

A Hebrew, right-to-left business website for moving and handyman services, built with React, TypeScript, and Vite. The page helps visitors explore services and contact the business through WhatsApp or phone.

[Production website](https://rick-and-go.vercel.app/)

The production link may show an earlier revision until these changes are explicitly approved for deployment.

## Preview

Screenshots captured from the local production build in headless Chrome. Narrow screenshots are browser viewport captures, not physical-device tests.

[Desktop screenshot](docs/screenshots/desktop.png) | [Full mobile screenshot](docs/screenshots/mobile.png)

<img src="docs/screenshots/desktop.png" alt="Desktop page showing the hero, services, advantages, contact section, and footer" width="700" />

<img src="docs/screenshots/mobile-menu.png" alt="Expanded navigation menu at a narrow viewport" width="300" />

## Features

- Responsive layouts with the original green identity and mascot illustration.
- Mobile navigation disclosure with accessible naming, expanded state, Escape handling, and closure on link selection, outside pointer interaction, focus leaving the header, or breakpoint changes.
- Services and business advantages rendered from data.
- Direct phone, WhatsApp, Facebook, and Google Business links.
- Hebrew language and RTL layout, with isolated LTR phone numbers and English attribution.
- Skip link, visible focus styles, semantic landmarks, decorative-icon handling, and reduced-motion styles.
- Responsive WebP hero sources with a JPEG fallback, reserved dimensions, and high fetch priority.
- Canonical URL, Open Graph and social metadata, branded icons, robots.txt, and a sitemap.
- Dynamic copyright year and developer attribution.

There is no contact form, backend, database, authentication, or analytics integration.

## Technology

React 19, TypeScript 6, Vite 8, plain CSS, React Icons, and ESLint. Vercel hosts the existing production website.

The implementation keeps state local to the mobile menu. Shared CSS handles button variants and design tokens; the page does not require a routing or state-management library.

## Getting started

Use Node.js 22.12 or newer and npm. Run these commands from the directory containing package.json (the client directory in the enclosing workspace):

```sh
npm ci
npm run dev
```

Use the URL printed by Vite. On Windows PowerShell, use npm.cmd if local execution policy blocks npm.ps1.

## Commands

| Command | Purpose |
| --- | --- |
| npm run dev | Start the development server |
| npm run typecheck | Check application and Vite configuration types |
| npm run lint | Run ESLint |
| npm run check:content | Reject literal and encoded em dashes in frontend text files |
| npm run build | Check types and produce dist |
| npm run preview | Serve the production build locally |

No command deploys or pushes the project.

## Project structure

```text
src/
  assets/       Original artwork and optimized display assets
  components/   Navbar, Hero, Services, WhyUs, Contact, Footer
  data/         Services, advantages, and existing contact destinations
  styles/       Reset, shared tokens, buttons, focus, and motion styles
  types/        Typed service data
public/         Icons, social preview, robots.txt, sitemap.xml
scripts/        Dependency-free content verification
docs/           Screenshots and verification notes
```

## Technical decisions

**Spacing:** The hero customizes section padding through custom properties, avoiding competing physical/logical padding rules and !important overrides. The fixed header and anchor offsets share a height token.

**Color:** Bright green remains part of the identity. The darker primary button surface provides approximately 5.72:1 contrast with white text; green text on the base background provides approximately 5.40:1. These checks are not a complete accessibility certification.

**Images:** The 640px WebP hero is about 70 KB, compared with the original 238 KB JPEG. The browser selects an appropriate source for viewport width and pixel density. The navbar derivative is about 6.8 KB, compared with its 86 KB original. Original JPEG files are retained as source artwork. The hero is not lazy-loaded.

**Contact data:** Shared constants reduce duplication. Contact and Footer retain their original, distinct Google Business short links.

**Content:** Keep the existing business claims, service list, section IDs, and contact destinations. Do not add unverified ratings, reviews, locations, or achievements. User-facing text must not contain Unicode U+2014; run the content check after copy changes.

## Verification

TypeScript, ESLint, the content check, and production build pass. The local production build was inspected in headless Chrome at desktop and narrow viewport sizes.

See [verification notes](docs/verification.md) for exact coverage and remaining manual checks. No Lighthouse score, Core Web Vitals result, full WCAG conformance, or cross-browser certification is claimed.

## Deployment

Vercel should use this directory as the project root, npm run build as the build command, and dist as the output directory. Deployment requires separate approval.

If the production domain changes, update the canonical URL, social URLs, robots.txt, and sitemap.xml together. Verify the social preview after deployment because the local asset is not available at the production URL until published.

## Portfolio description

Rick & GO is a responsive Hebrew RTL service-business website built with React and TypeScript. It combines reusable presentation styles, data-driven service sections, accessible navigation patterns, responsive image delivery, and SEO metadata while preserving direct business contact flows.

## Developer

Designed & Developed by Bar Shirom.
