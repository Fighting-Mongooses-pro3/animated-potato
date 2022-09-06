import React from 'react'

type Props = {
    customCss?: string
    children?: JSX.Element | React.ReactNode
}

export const Container = ({customCss, children}: Props) => {
  return (
    <section className={`${customCss}`}>
      {children}
    </section>
  )
}