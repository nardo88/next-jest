import { FC } from 'react'
import cls from './Main.module.scss'
import { useRouter } from 'next/router'

export const Main: FC = () => {
  const { query } = useRouter()
  return (
    <div className={cls.wrapper}>
      <h1>{`ID пользователя - ${query.id}`}</h1>
    </div>
  )
}
