import { GitHubIcon } from '@/components/icons/github'
import { LinkedInIcon } from '@/components/icons/linkedin'
import { CSSIcon } from '@/components/icons/tags/css'
import { HTMLIcon } from '@/components/icons/tags/html'
import { JavaScriptIcon } from '@/components/icons/tags/javascript'
import { NextJSIcon } from '@/components/icons/tags/nextjs'
import { ReactIcon } from '@/components/icons/tags/react'
import { TypeScriptIcon } from '@/components/icons/tags/typescript'
import { ViteIcon } from '@/components/icons/tags/vite'
import { TailwindCSSIcon } from '@/components/icons/tags/tailwind-css'
import { VitestIcon } from '@/components/icons/tags/vitest'
import { ReduxIcon } from '@/components/icons/tags/redux'
import { GraphQLIcon } from '@/components/icons/tags/graphql'
import { MailIcon } from 'lucide-react'
import { NodeJSIcon } from '@/components/icons/tags/nodejs'

export const AVATAR = {
  name: 'Adailson Aguiar',
  initials: 'AA'
}

/*
export const ABOUT = {
  title: `Frontend Engineer, Developer Relations and AI research enthusiast.
  Always influenced by design. Based in Rosario, Argentina 🇦🇷`,
  description: `Passionate about creating innovative tech solutions for social impact.
  Focused on using advanced frontend technologies to improve
  accessibility and performance in web applications. My main goal is to
  enhance user experience, making the web a better place for everyone.`
}
*/

export const ABOUT = {
  title: `Desenvolvedor com especialização em frontend. Apaixonado por criar soluções tecnológicas inovadoras com impacto social.`,
  description: `
    Focado em utilizar tecnologias avançadas de frontend para melhorar
    a acessibilidade e o desempenho de aplicações web.
    \n
    Meu objetivo principal é aprimorar a experiência do usuário, tornando a web
    um lugar melhor para todos. Especialista em criar interfaces 
    intuitivas e acessíveis, além de otimizar o desempenho de aplicações web.`
}

export const LINKS = [
  {
    title: 'LinkedIn',
    url: 'https://linkedin.com/in/adailsonaguiar',
    icon: LinkedInIcon
  },
  {
    title: 'GitHub',
    url: 'https://github.com/adailsonaguiar',
    icon: GitHubIcon
  },
  /*
  {
    title: 'X (Twitter)',
    url: 'https://x.com/adailsonaguiar',
    icon: XIcon
  },
  {
    title: 'Resume',
    url: 'https://cv.adailsonaguiar.xyz',
    icon: FileTextIcon
  },
  */
  {
    title: 'Email',
    url: 'mailto:adailsonacj@live.com',
    icon: MailIcon
  }
]

export const CAREER = [
  {
    company: 'Frontend Lab',
    link: 'https://github.com/thefrontendlab',
    badges: ['Hybrid'],
    jobs: [
      {
        title: 'Frontend Developer',
        start: 'Aug, 2023',
        end: 'Present',
        description: [
          'Researched and implemented new frontend technologies and tools.',
          'Developed innovative solutions to improve the frontend community.',
          'Conducted technical research to stay ahead of industry trends.',
          'Created and maintained open-source projects.',
          'Collaborated with team members to enhance project outcomes.'
        ]
      },
      {
        title: 'Technical Researcher & Content Developer',
        start: 'Jul, 2021',
        end: 'Aug, 2023',
        description: [
          'Created technical content to educate and engage the frontend community.',
          'Developed tutorials and guides on the latest frontend technologies.',
          'Managed the content strategy to align with community needs and trends.',
          'Collaborated with experts to produce high-quality, informative content.',
          'Utilized various platforms to distribute content and maximize reach.'
        ]
      }
    ]
  },
  {
    company: 'Next.js Argentina',
    link: 'https://github.com/nextjsargentina',
    badges: ['Hybrid'],
    jobs: [
      {
        title: 'Developer Experience Architect',
        start: 'Aug, 2023',
        end: 'Present',
        description: [
          'Built and nurtured a non-profit open community for Next.js enthusiasts.',
          'Developed resources to enhance the developer experience with Next.js.',
          'Organized community events and workshops.',
          'Provided mentorship and support to community members.',
          'Collaborated with other community leaders to expand the community reach.'
        ]
      }
    ]
  },
  {
    company: 'Invisible Technologies',
    link: 'https://invisible.co',
    badges: ['Remote'],
    jobs: [
      {
        title: 'Operator & Advanced AI Trainer',
        start: 'May, 2024',
        end: 'Jun, 2024',
        description: [
          'Managed AI system operations to ensure optimal performance.',
          'Trained advanced AI models to improve system accuracy.',
          'Collaborated with cross-functional teams to develop AI solutions.',
          'Analyzed data to enhance AI training methodologies.',
          'Implemented feedback to refine AI models continuously.'
        ]
      }
    ]
  },
  {
    company: 'BaseHub',
    link: 'https://basehub.com',
    badges: ['Remote'],
    jobs: [
      {
        title: 'Developer Relations',
        start: 'Mar, 2024',
        end: 'May, 2024',
        description: [
          'Assisted developers in building applications using BaseHub CMS and native AI.',
          'Provided technical support and guidance to developers.',
          'Created documentation and tutorials for better product understanding.',
          'Organized and conducted webinars and workshops.',
          'Engaged with the developer community to gather feedback and improve the product.'
        ]
      }
    ]
  },
  {
    company: 'Smat.io',
    link: 'https://smat.io',
    badges: ['Remote'],
    jobs: [
      {
        title: 'QA Tester & Frontend Developer',
        start: 'Aug, 2022',
        end: 'Aug, 2023',
        description: [
          "Led QA testing using Jest and Playwright to ensure web applications' quality.",
          'Implemented Test-Driven Development (TDD) practices.',
          'Developed user-friendly interfaces with React.js.',
          'Collaborated with developers to optimize code quality.',
          'Conducted bug tracking and troubleshooting.'
        ]
      }
    ]
  },
  {
    company: 'Maker DAO',
    link: 'https://makerdao.com',
    badges: ['Remote'],
    jobs: [
      {
        title: 'Technical Writer and Translator',
        start: 'Feb, 2022',
        end: 'Aug, 2022',
        description: [
          'Authored technical documentation, including whitepapers, guides, and tutorials.',
          'Translated complex technical content for diverse audiences.',
          'Facilitated user understanding of blockchain and DeFi concepts.',
          'Collaborated with subject matter experts to ensure accuracy.',
          'Maintained and updated documentation as needed.'
        ]
      }
    ]
  },
  {
    company: 'El Chaperón',
    badges: ['On-site'],
    jobs: [
      {
        title: 'Web Designer & Community Manager',
        start: 'Jan, 2019',
        end: 'Dec, 2021',
        description: [
          'Developed and designed responsive websites using WordPress.',
          'Managed online tourist services for the city of Rosario.',
          'Coordinated with the Rosario Hotel Association and Tourist Entity (ETUR).',
          'Created engaging content for community outreach.',
          'Implemented SEO strategies to improve website visibility.'
        ]
      },
      {
        title: 'Commercial Advisor',
        start: 'Jan, 2016',
        end: 'Dec, 2018',
        description: [
          'Maintained customer database for accuracy.',
          'Executed marketing strategies to attract customers.',
          'Managed services and ensured customer satisfaction.',
          'Designed and implemented promotional campaigns with the marketing team.',
          'Analyzed feedback and trends to improve services and marketing.'
        ]
      }
    ]
  }
]

const TAGS = {
  NEXT: {
    name: 'Next.js',
    icon: NextJSIcon
  },
  REACT: {
    name: 'React',
    icon: ReactIcon
  },
  TYPESCRIPT: {
    name: 'TypeScript',
    icon: TypeScriptIcon
  },
  JAVASCRIPT: {
    name: 'JavaScript',
    icon: JavaScriptIcon
  },
  HTML: {
    name: 'HTML',
    icon: HTMLIcon
  },
  CSS: {
    name: 'CSS',
    icon: CSSIcon
  },
  VITE: {
    name: 'Vite',
    icon: ViteIcon
  },
  TAILWIND: {
    name: 'Tailwind CSS',
    icon: TailwindCSSIcon
  },
  NODE: {
    name: 'Node.js',
    icon: NodeJSIcon
  },
  VITEST: {
    name: 'Vitest',
    icon: VitestIcon
  },
  REDUX: {
    name: 'Redux',
    icon: ReduxIcon
  },
  GRAPHQL: {
    name: 'GraphQL',
    icon: GraphQLIcon
  }
}

export const PROJECTS = [
  {
    title: 'BaseHub - Next.js blog',
    tags: [
      TAGS.CSS,
      TAGS.NEXT,
      TAGS.REACT,
      TAGS.TAILWIND,
      TAGS.TYPESCRIPT,
    ],
    description:
      'A starter guide template blog made with Next.js and BaseHub CMS. It uses the BaseHub API to fetch and display posts.',
    link: {
      github: 'https://github.com/basehub-ai/nextjs-blog',
      preview: 'https://nextjs-blog-basehub.vercel.app'
    },
    image: '/images/basehub-nextjs-blog.png'
  },
  {
    title: 'Basement Challenge',
    tags: [
      TAGS.CSS,
      TAGS.NEXT,
      TAGS.REACT,
      TAGS.TAILWIND,
      TAGS.TYPESCRIPT
    ],
    description: 'Basement studio stream challenge.',
    link: {
      github: 'https://github.com/adailsonaguiar/basement-challenge',
      preview: 'https://adailsonaguiar-basement-challenge.vercel.app'
    },
    image: '/images/basement-challenge.png'
  }
]
