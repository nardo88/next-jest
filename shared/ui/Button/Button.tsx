import { FC, ReactNode } from 'react'

interface IProps {
  children: ReactNode
  onClick: () => void
}

export const Button: FC<IProps> = ({ children, onClick }) => {
  return <button onClick={onClick}>{children}</button>
}
