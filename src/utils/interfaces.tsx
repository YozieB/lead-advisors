import { Dispatch, SetStateAction } from 'react'

export interface IDate {
  days: number | string
  hours: number | string
  minutes: number | string
  seconds: number | string
}

export interface IAccItem {
  title: string
  image: string
  id: string
  date: string
}

export interface IAccItemC {
  title: string
  image: string
  id: string
  toggle: (key: string) => void
  open: boolean
  date: string
}

export interface IKey {
  key: string | null
}

export interface IHeaderProps {
  animate: boolean
}

export interface ICountDownProps {
  animate: boolean
}

export interface IModalProps {
  active: boolean
  setActive: Dispatch<SetStateAction<boolean>>
}

export interface ISearchProps {
  setActive: Dispatch<SetStateAction<boolean>>
}
