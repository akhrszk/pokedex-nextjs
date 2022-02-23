import React from 'react'
import Image from 'next/image'

export const Footer: React.FC = () => (
  <footer className="flex h-20 flex-1 justify-center items-center border-t border-slate-300">
    <a
      href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
      target="_blank"
      rel="noopener noreferrer"
    >
      Powered by{' '}
      <span className="h-4">
        <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
      </span>
    </a>
  </footer>
)

export default Footer
