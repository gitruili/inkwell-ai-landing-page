// src/i18n.ts
"use client";
import { useLocale } from '@/contexts/LocaleContext';

export const translations = {
  en: {
    header: {
      brand: 'InkWell AI',
      pricing: 'Pricing',
      signIn: 'Sign In',
    },
    hero: {
      cta: 'Start Free Trial',
    },
    features: {
      title: 'Writing, now effortless',
      subtitle: 'Explore the power of InkWell AI',
      items: [
        { title: 'Smart Continuation', description: 'AI helps you overcome writer’s block with flowing ideas.' },
        { title: 'Grammar Polish', description: 'Automatic proofreading to boost professionalism.' },
        { title: 'Style Control', description: 'Switch between formal, casual, or creative styles.' },
      ],
    },
    socialProof: {
      title: 'Trusted by creators',
      items: [
        { quote: 'InkWell AI cuts my writing time in half!', name: 'Anna Bell', title: 'Content Marketing Manager' },
        { quote: 'The smoothest writing tool I’ve used. Highly recommend.', name: 'Mark Chen', title: 'Freelance Writer' },
        { quote: 'From ideas to drafts, the AI keeps me inspired.', name: 'Sophia Lee', title: 'Tech Blogger' },
      ],
    },
    footer: {
      copyright: '© 2025 InkWell AI. All rights reserved.',
    },
    variants: {
      A: {
        headline: 'Unleash your creative potential with an AI‑powered writing assistant',
        subheadline: 'Goodbye writer’s block. Turn your ideas into great content faster than ever.',
      },
      B: {
        headline: 'Create content 10× faster',
        subheadline: 'Let AI draft high‑quality first versions so you focus on ideas.',
      },
    },
  },
  zh: {
    header: {
      brand: 'InkWell AI',
      pricing: '定价',
      signIn: '登录',
    },
    hero: {
      cta: '开始免费试用',
    },
    features: {
      title: '写作从未如此简单',
      subtitle: '探索 InkWell AI 的强大功能',
      items: [
        { title: '智能续写', description: 'AI 助您文思泉涌，打破写作僵局。' },
        { title: '语法优化', description: '自动校对，提升文章专业度。' },
        { title: '风格调整', description: '轻松切换正式、休闲或创意等多种写作风格。' },
      ],
    },
    socialProof: {
      title: '深受创作者信赖',
      items: [
        { quote: 'InkWell AI 帮我节省了 50% 的写作时间！', name: 'Anna Bell', title: '内容营销经理' },
        { quote: '这是我用过最流畅的写作工具，强烈推荐。', name: 'Mark Chen', title: '自由撰稿人' },
        { quote: '从构思到成稿，AI 给了我源源不断的灵感。', name: 'Sophia Lee', title: '技术博主' },
      ],
    },
    footer: {
      copyright: '© 2025 InkWell AI. 保留所有权利。',
    },
    variants: {
      A: {
        headline: '释放你的创作潜力，用 AI 驱动的写作助手',
        subheadline: '告别写作障碍，将您的想法以前所未有的速度转化为精彩内容。',
      },
      B: {
        headline: '内容创作提速 10 倍',
        subheadline: '我们的 AI 技术能帮助您快速生成高质量初稿，让您专注于核心创意。',
      },
    },
  },
};

export function useT() {
  const { locale } = useLocale();
  return translations[locale];
}

