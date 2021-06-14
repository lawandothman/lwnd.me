import { Figma, NextJs, VSCode } from '@/components/Icons'
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
]

export default stack
