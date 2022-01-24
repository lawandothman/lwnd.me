import { ReactElement } from 'react'

export interface IProject {
  title: string
  source: string
  description: string
  url?: string
}

export interface IStack {
  name: string
  description: string
  url: string
  icon: ReactElement<any, any> | null
}
