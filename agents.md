# Project Plan: InkWell AI Landing Page with A/B Testing

This document outlines the step-by-step process for an AI coding agent to create the "InkWell AI" landing page project. The agent should execute these steps sequentially.

## Step 1: Project Initialization

First, initialize a new Next.js project with all the required configurations and install necessary dependencies.

```bash
npx create-next-app@latest inkwell-ai-landing-page --ts --tailwind --eslint --app --src-dir --import-alias "@/*"
cd inkwell-ai-landing-page
npm install framer-motion
```

## Step 2: Clean Up Boilerplate

Clear the default content from the global CSS file and the main page to start from a clean slate.

### 2.1 Clear `src/app/globals.css`

Replace the entire content of `src/app/globals.css` with the following Tailwind CSS directives.

```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

### 2.2 Clear `src/app/page.tsx`

The content of this file will be replaced later. For now, it can be cleared or left as is, as our middleware will intercept the route.

## Step 3: Create Reusable Components

Create all the necessary React components inside the `src/components/` directory.

### 3.1 Create `src/components/Header.tsx`

```tsx
// src/components/Header.tsx
import React from 'react';

const Header = () => {
  return (
    <header className="absolute top-0 left-0 w-full z-10 py-6 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div className="text-2xl font-bold text-gray-800">InkWell AI</div>
        <nav className="flex items-center space-x-6">
          <a href="#" className="text-gray-600 hover:text-gray-900 transition-colors">Pricing</a>
          <a href="#" className="bg-gray-800 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-gray-700 transition-colors">
            Sign In
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
```

### 3.2 Create `src/components/Hero.tsx`

```tsx
// src/components/Hero.tsx
"use client";
import React from 'react';

interface HeroProps {
  headline: string;
  subheadline: string;
  onCtaClick: () => void;
}

const Hero: React.FC<HeroProps> = ({ headline, subheadline, onCtaClick }) => {
  return (
    <section className="relative h-screen flex items-center justify-center text-center bg-gray-50 overflow-hidden">
      <div className="relative z-10 max-w-4xl mx-auto px-4">
        <h1 className="text-4xl md:text-6xl font-extrabold text-gray-900 mb-4 leading-tight">
          {headline}
        </h1>
        <p className="text-lg md:text-xl text-gray-600 mb-8">
          {subheadline}
        </p>
        <button 
          onClick={onCtaClick}
          className="bg-blue-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-700 transition-transform transform hover:scale-105"
        >
          Start Free Trial
        </button>
      </div>
    </section>
  );
};

export default Hero;
```

### 3.3 Create `src/components/Features.tsx`

```tsx
// src/components/Features.tsx
import React from 'react';

const FeatureCard = ({ title, description }: { title: string; description: string }) => (
  <div className="bg-white p-6 rounded-lg border border-gray-200">
    <h3 className="text-xl font-semibold text-gray-800 mb-2">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </div>
);

const Features = () => {
  const features = [
    { title: "智能续写", description: "AI 助您文思泉涌，打破写作僵局。" },
    { title: "语法优化", description: "自动校对，提升文章专业度。" },
    { title: "风格调整", description: "轻松切换正式、休闲或创意等多种写作风格。" },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900">写作从未如此简单</h2>
          <p className="mt-4 text-lg text-gray-600">探索 InkWell AI 的强大功能</p>
        </div>
        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {features.map((feature, index) => (
            <FeatureCard key={index} title={feature.title} description={feature.description} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
```

### 3.4 Create `src/components/SocialProof.tsx`

```tsx
// src/components/SocialProof.tsx
import React from 'react';

const TestimonialCard = ({ quote, name, title }: { quote: string; name: string; title: string }) => (
    <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
        <p className="text-gray-700 mb-4">"{quote}"</p>
        <div className="font-semibold text-gray-900">{name}</div>
        <div className="text-sm text-gray-500">{title}</div>
    </div>
);

const SocialProof = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900">深受创作者信赖</h2>
        </div>
        <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          <TestimonialCard quote="InkWell AI 帮我节省了 50% 的写作时间！" name="Anna Bell" title="内容营销经理" />
          <TestimonialCard quote="这是我用过最流畅的写作工具，强烈推荐。" name="Mark Chen" title="自由撰稿人" />
          <TestimonialCard quote="从构思到成稿，AI 给了我源源不断的灵感。" name="Sophia Lee" title="技术博主" />
        </div>
      </div>
    </section>
  );
};

export default SocialProof;
```

### 3.5 Create `src/components/Footer.tsx`

```tsx
// src/components/Footer.tsx
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-white border-t border-gray-200">
      <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8 text-center text-sm text-gray-500">
        <p>© 2025 InkWell AI. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
```

## Step 4: Create A/B Test Page Variants

Create the two different page versions that the middleware will route users to.

### 4.1 Create `src/app/_variants/page-a/page.tsx`

```tsx
// src/app/_variants/page-a/page.tsx
"use client";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import SocialProof from "@/components/SocialProof";
import Footer from "@/components/Footer";

export default function PageA() {
  const handleCtaClick = async () => {
    await fetch('/api/track', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ variant: 'A' }),
    });
    alert("Conversion tracked for Variant A!");
  };

  return (
    <main>
      <Header />
      <Hero
        headline="释放你的创作潜力，用 AI 驱动的写作助手"
        subheadline="告别写作障碍，将您的想法以前所未有的速度转化为精彩内容。"
        onCtaClick={handleCtaClick}
      />
      <Features />
      <SocialProof />
      <Footer />
    </main>
  );
}
```

### 4.2 Create `src/app/_variants/page-b/page.tsx`

```tsx
// src/app/_variants/page-b/page.tsx
"use client";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import SocialProof from "@/components/SocialProof";
import Footer from "@/components/Footer";

export default function PageB() {
  const handleCtaClick = async () => {
    await fetch('/api/track', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ variant: 'B' }),
    });
    alert("Conversion tracked for Variant B!");
  };

  return (
    <main>
      <Header />
      <Hero
        headline="内容创作提速 10 倍"
        subheadline="我们的 AI 技术能帮助您快速生成高质量初稿，让您专注于核心创意。"
        onCtaClick={handleCtaClick}
      />
      <Features />
      <SocialProof />
      <Footer />
    </main>
  );
}
```

## Step 5: Implement A/B Testing Middleware

Create the middleware file in the `src` directory to handle the A/B test routing logic.

### 5.1 Create `src/middleware.ts`

```typescript
// src/middleware.ts
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

const AB_TEST_COOKIE = 'ab_test_variant';

export function middleware(req: NextRequest) {
  let variant: 'A' | 'B';
  const cookie = req.cookies.get(AB_TEST_COOKIE);

  if (cookie?.value === 'A' || cookie?.value === 'B') {
    variant = cookie.value;
  } else {
    variant = Math.random() < 0.5 ? 'A' : 'B';
  }
  
  const url = req.nextUrl.clone();

  if (variant === 'A') {
    url.pathname = '/_variants/page-a';
  } else {
    url.pathname = '/_variants/page-b';
  }

  const res = NextResponse.rewrite(url);

  if (!cookie) {
    res.cookies.set(AB_TEST_COOKIE, variant, {
      path: '/',
      maxAge: 60 * 60 * 24 * 7, // 1 week
    });
  }

  return res;
}

export const config = {
  matcher: ['/'],
};
```

## Step 6: Create Conversion Tracking API

Create the API route to handle tracking clicks on the CTA button.

### 6.1 Create `src/app/api/track/route.ts`

```typescript
// src/app/api/track/route.ts
import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  try {
    const { variant } = await req.json();
    if (variant === 'A' || variant === 'B') {
      console.log(`[A/B Test Conversion]: Variant ${variant} clicked the CTA.`);
      return NextResponse.json({ success: true, message: `Tracked variant ${variant}` });
    }
    return NextResponse.json({ success: false, message: 'Invalid variant' }, { status: 400 });
  } catch (error) {
    return NextResponse.json({ success: false, message: 'Bad request' }, { status: 400 });
  }
}
```

## Step 7: Finalize Root Layout and Page

Update the root layout and the placeholder main page.

### 7.1 Update `src/app/layout.tsx`

```tsx
// src/app/layout.tsx
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "InkWell AI - AI Writing Assistant",
  description: "Unleash your creative potential with an AI-powered writing assistant.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
```

### 7.2 Update `src/app/page.tsx`

```tsx
// src/app/page.tsx
// This page is a placeholder. The middleware will rewrite requests from "/"
// to one of the variants, so this component will not be rendered.
export default function Home() {
  return null;
}
```

## Step 8: Run the Project

The project is now complete. Run the development server to test it.

```bash
npm run dev
```

Open `http://localhost:3000`. You will be randomly assigned to Variant A or B. To see the other variant, clear your browser cookies for localhost or use an incognito window. Check the server console logs after clicking the "Start Free Trial" button to see the conversion tracking in action.

