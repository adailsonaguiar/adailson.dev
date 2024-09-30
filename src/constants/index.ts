import { AVATAR, ABOUT, LINKS, CAREER, PROJECTS } from '@/data'
import type {
  AvatarProps,
  AboutProps,
  LinksProps,
  CareerProps,
  ProjectProps
} from '@/types'

export const data = {
  avatar: AVATAR as AvatarProps,
  about: ABOUT as AboutProps,
  links: LINKS as LinksProps[],
  career: CAREER as CareerProps[],
  projects: PROJECTS as ProjectProps[]
}

export const navLinks = [
  { title: 'Sobre', label: 'about', url: '/' },
  //{ title: 'Carreira', label: 'career', url: '/career' },
  //{ title: 'Projetos', label: 'projects', url: '/projects' },
  //{ title: 'Contact', label: 'contact', url: '/contact' }
]
