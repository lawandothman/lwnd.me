import {
  Dependabot, Figma, NextJs, Notion, Vercel, VSCode,
} from '@/components/Icons'
import { IStack } from 'types'

const stack: IStack[] = [
  {
    name: 'Visual Studio Code',
    description: 'My code editor of choice',
    url: 'https://code.visualstudio.com/',
    icon: VSCode({ viewBox: '0 0 58 58', w: '58', height: '58' }),
  },
  {
    name: 'Next.js',
    description: 'The best way to build modern React websites',
    url: 'https://nextjs.org/',
    icon: NextJs({ viewBox: '0 0 58 58', w: '58', height: '58' }),
  },
  {
    name: 'Figma',
    description: 'My design tool of choice',
    url: 'https://www.figma.com/',
    icon: Figma({ viewBox: '0 0 39 58', w: '58', height: '58' }),
  },
  {
    name: 'Vercel',
    description: 'Everything I build on the internet lives on Vercel. It is the gold standard of developer tools',
    url: 'https://vercel.com/',
    icon: Vercel({ viewBox: '0 0 58 58', w: '58', height: '58' }),
  },
  {
    name: 'Dependabot',
    description: 'Dependabot keeps all of my project dependecies up to date every month',
    url: 'https://dependabot.com/',
    icon: Dependabot({ viewBox: '0 0 58 58', w: '58', height: '58' }),
  },
  {
    name: 'Notion',
    description: 'My favourite productivity tool to keep notes and manage my tasks',
    url: 'https://www.notion.so/',
    icon: Notion({ viewBox: '0 0 58 58', w: '58', height: '58' }),
  },

]

export default stack
