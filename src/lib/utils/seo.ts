export interface SEOConfig {
  title: string
  description: string
  keywords?: string
  image?: string
  url?: string
  type?: string
  siteName?: string
  locale?: string
  alternateLocales?: string[]
}

export const defaultSEO: SEOConfig = {
  title: 'Mehdi Keramati - Frontend Developer',
  description: 'Passionate Frontend Web Developer crafting innovative digital experiences with React, Svelte, TypeScript, and modern web technologies. View my portfolio and projects.',
  keywords: 'frontend developer, web developer, react, svelte, typescript, portfolio, mehdi keramati',
  image: '/portfolio-preview.jpg',
  url: 'https://mehdikeramati.ir',
  type: 'website',
  siteName: 'Mehdi Keramati Portfolio',
  locale: 'en',
  alternateLocales: ['fa', 'de']
}

export function generateSEOTags(config: Partial<SEOConfig> = {}): string {
  const seo = { ...defaultSEO, ...config }
  
  return `
    <title>${seo.title}</title>
    <meta name="description" content="${seo.description}" />
    <meta name="keywords" content="${seo.keywords}" />
    <meta name="author" content="Mehdi Keramati" />
    <meta name="robots" content="index, follow" />
    <meta name="googlebot" content="index, follow" />
    
    <!-- Open Graph / Facebook -->
    <meta property="og:type" content="${seo.type}" />
    <meta property="og:url" content="${seo.url}" />
    <meta property="og:title" content="${seo.title}" />
    <meta property="og:description" content="${seo.description}" />
    <meta property="og:image" content="${seo.image}" />
    <meta property="og:site_name" content="${seo.siteName}" />
    <meta property="og:locale" content="${seo.locale}" />
    ${seo.alternateLocales?.map(locale => 
      `<meta property="og:locale:alternate" content="${locale}" />`
    ).join('\n    ') || ''}
    
    <!-- Twitter -->
    <meta property="twitter:card" content="summary_large_image" />
    <meta property="twitter:url" content="${seo.url}" />
    <meta property="twitter:title" content="${seo.title}" />
    <meta property="twitter:description" content="${seo.description}" />
    <meta property="twitter:image" content="${seo.image}" />
    <meta property="twitter:creator" content="@mehdi_keramati" />
    
    <!-- Additional SEO -->
    <meta name="theme-color" content="#0F172A" />
    <meta name="apple-mobile-web-app-capable" content="yes" />
    <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
    <link rel="canonical" href="${seo.url}" />
  `.trim()
}

export const pageSEO = {
  home: {
    title: 'Mehdi Keramati - Frontend Developer',
    description: 'Welcome to my portfolio. I\'m a passionate Frontend Developer specializing in React, Svelte, and modern web technologies.',
    keywords: 'frontend developer, web developer, portfolio, react, svelte, typescript'
  },
  about: {
    title: 'About Mehdi Keramati - Frontend Developer',
    description: 'Learn about my journey as a Frontend Developer, my skills, and passion for creating innovative digital experiences.',
    keywords: 'about, frontend developer, skills, experience, web development'
  },
  service: {
    title: 'Skills & Services - Mehdi Keramati',
    description: 'Explore my technical skills including React, Svelte, TypeScript, Tailwind CSS, and other modern web technologies.',
    keywords: 'skills, services, react, svelte, typescript, tailwind css, web technologies'
  },
  projects: {
    title: 'Projects & Portfolio - Mehdi Keramati',
    description: 'View my latest web development projects including React applications, Svelte components, and innovative web solutions.',
    keywords: 'projects, portfolio, web applications, react projects, svelte projects'
  },
  contact: {
    title: 'Contact Mehdi Keramati - Frontend Developer',
    description: 'Get in touch with me for web development projects, collaboration opportunities, or just to say hello.',
    keywords: 'contact, hire frontend developer, web development services, collaboration'
  }
}