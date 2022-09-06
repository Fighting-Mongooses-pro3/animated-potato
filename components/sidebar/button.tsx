import React from 'react'

type Props = {
    text: string
    icon: JSX.Element | React.ReactNode
    customCss?: string
}

export const Button = ({text, icon, customCss}: Props) => {
  return (
    <button className={` ${customCss}`}>{icon}{text}</button>
  ) 
}