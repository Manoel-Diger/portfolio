const StructuredData = () => {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Manoel Armenteiro Diger Neto",
    "jobTitle": "Gestor em Logística e Transportes",
    "description": "Especialista em liderança de equipes, gestão multirregional e otimização de operações logísticas com mais de 20 anos de experiência.",
    "url": "https://manoel-portfolio.lovable.app",
    "image": "https://drive.google.com/uc?id=1ooDYdhTWUSvYnT_a2jUpIpjoqLtVRJ6q",
    "telephone": "+5573991836588",
    "email": "armenteiromanoel@gmail.com",
    "sameAs": [
      "https://www.linkedin.com/in/manoel-armenteiro/",
      "https://github.com/Manoel-Diger"
    ],
    "worksFor": {
      "@type": "Organization",
      "name": "GP Brasil Transportes"
    },
    "alumniOf": {
      "@type": "EducationalOrganization",
      "name": "Estácio - Logística"
    },
    "knowsAbout": [
      "Gestão de Unidades e Operações",
      "Indicadores de Performance",
      "Padronização de Processos",
      "Excel & Power BI",
      "Programação Full Stack",
      "Logística",
      "Transportes"
    ],
    "hasCredential": [
      {
        "@type": "EducationalOccupationalCredential",
        "name": "Power BI Do Zero ao Expert",
        "educationalLevel": "Professional Certificate",
        "credentialCategory": "Business Intelligence"
      },
      {
        "@type": "EducationalOccupationalCredential", 
        "name": "Programação Full-Stack",
        "educationalLevel": "Professional Certificate",
        "credentialCategory": "Software Development"
      }
    ]
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
};

export default StructuredData;