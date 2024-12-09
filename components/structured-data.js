import Head from 'next/head';

export function SkillsStructuredData({ skills }) {
  if (!skills) return null;

  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    itemListElement: skills.map((category, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      item: {
        '@type': 'Thing',
        name: category.category,
        description: `${category.category} skills including ${category.items?.join(', ') || ''}`,
      },
    })),
  };

  return (
    <Head>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
    </Head>
  );
}

export function ProjectsStructuredData({ projects }) {
  if (!projects) return null;

  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    itemListElement: projects.map((project, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      item: {
        '@type': 'SoftwareSourceCode',
        name: project.projectName || '',
        description: project.description?.[0] || '',
        programmingLanguage: project.technologies?.join(', ') || '',
        url: project.link || null,
      },
    })),
  };

  return (
    <Head>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
    </Head>
  );
}

export function ExperienceStructuredData({ experiences }) {
  if (!experiences) return null;

  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    itemListElement: experiences.map((exp, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      item: {
        '@type': 'WorkExperience',
        jobTitle: exp.role || '',
        name: exp.companyName || '',
        description: exp.companyDescription?.[0] || '',
        startDate: exp.duration?.split(' - ')?.[0] || '',
        endDate: exp.duration?.split(' - ')?.[1] || 'Present',
        skills: exp.technologies?.join(', ') || '',
      },
    })),
  };

  return (
    <Head>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
    </Head>
  );
}
