import * as si from 'simple-icons';

const slugMap: Record<string, string> = {
  'TypeScript': 'typescript',
  'Node.js': 'nodedotjs',
  'Go': 'go',
  'Gin': 'gin',
  'C#': 'dotnet',
  'C# / .NET': 'dotnet',
  '.NET': 'dotnet',
  'ASP.NET': 'dotnet',
  'Python': 'python',
  'React': 'react',
  'React Native': 'react',
  'Astro': 'astro',
  'HTML & CSS': 'html5',
  'HTML': 'html5',
  'CSS': 'css',
  'Bootstrap': 'bootstrap',
  'MySQL': 'mysql',
  'MongoDB': 'mongodb',
  'SQLite': 'sqlite',
  'Git': 'git',
  'Linux': 'linux',
  'Firebase': 'firebase',
  'Express': 'express',
  'Express.js': 'express',
  'NestJS': 'nestjs',
  'Expo': 'expo',
  'Vite': 'vite',
  'React Router': 'reactrouter',
  'JWT': 'jsonwebtokens',
  'MinIO': 'minio',
};

// Override near-black brand colors so they're visible on dark backgrounds
const colorOverrides: Record<string, string> = {
  'express': 'c4c4c4',
  'expo': 'c4c4c4',
  'jsonwebtokens': 'c4c4c4',
};

export function getTechIcon(name: string): { path: string; hex: string } | null {
  const slug = slugMap[name];
  if (!slug) return null;
  const key = 'si' + slug.charAt(0).toUpperCase() + slug.slice(1);
  const icon = (si as Record<string, { path: string; hex: string } | undefined>)[key];
  if (!icon) return null;
  const hex = colorOverrides[slug] ?? icon.hex;
  return { path: icon.path, hex };
}
