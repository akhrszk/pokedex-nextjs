import React from 'react'

export interface CardProps {
  title: string
  description: string
  link: string
}

export const Card: React.FC<CardProps> = (props: CardProps) => (
  <a
    href={props.link}
    className="max-w-xs p-6 rounded-lg border border-slate-200 hover:border-blue-500 hover:text-blue-500"
  >
    <h2 className="text-2xl font-bold mb-4">{props.title} &rarr;</h2>
    <p className="text-xl">{props.description}</p>
  </a>
)

export default Card
