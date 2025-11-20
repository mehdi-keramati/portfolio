export interface PersonSchema {
  '@context': string
  '@type': string
  name: string
  jobTitle: string
  url: string
  sameAs: string[]
  image: string
  description: string
  knowsAbout: string[]
  alumniOf?: {
    '@type': string
    name: string
  }
  workLocation: {
    '@type': string
    name: string
  }
}

export const personSchema: PersonSchema = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Mehdi Keramati',
  jobTitle: 'Frontend Developer & UI/UX Designer',
  url: 'https://mehdikeramati.ir',
  sameAs: [
    'https://github.com/mehdi-keramati',
    'https://linkedin.com/in/mehdikeramti',
    'https://instagram.com/eule_blauu',
    'https://t.me/blue_zoomer'
  ],
  image: 'https://mehdikeramati.ir/me.png',
  description: 'Passionate Frontend Web Developer crafting innovative digital experiences with React, Svelte, TypeScript, and modern web technologies.',
  knowsAbout: [
    'Frontend Development',
    'React',
    'Svelte',
    'TypeScript',
    'JavaScript',
    'Tailwind CSS',
    'UI/UX Design',
    'Web Development',
    'Responsive Design',
    'Performance Optimization'
  ],
  workLocation: {
    '@type': 'Place',
    name: 'Remote'
  }
}

export interface WebsiteSchema {
  '@context': string
  '@type': string
  name: string
  url: string
  description: string
  author: {
    '@type': string
    name: string
  }
  inLanguage: string[]
  keywords: string
}

export const websiteSchema: WebsiteSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: 'Mehdi Keramati Portfolio',
  url: 'https://mehdikeramati.ir',
  description: 'Frontend Developer Portfolio showcasing modern web development projects and skills',
  author: {
    '@type': 'Person',
    name: 'Mehdi Keramati'
  },
  inLanguage: ['en', 'fa', 'de'],
  keywords: 'frontend developer, web developer, react, svelte, typescript, portfolio'
}

export function generateStructuredData(schemas: (PersonSchema | WebsiteSchema)[]): string {
  return `<script type="application/ld+json">
${JSON.stringify(schemas, null, 2)}
</script>`
}