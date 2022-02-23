import type { NextPage } from 'next'
import Grid from '../components/Grid'
import Card from '../components/Card'
import Footer from '../components/Footer'

const Home: NextPage = () => (
  <>
    <main className="min-h-screen flex flex-1 flex-col py-16 justify-center items-center">
      <h1 className="text-6xl font-bold text-center">
        Welcome to{' '}
        <a
          className="text-blue-500 cursor-pointer hover:underline"
          href="https://nextjs.org"
        >
          Next.js!
        </a>
      </h1>
      <p className="leading-6 text-xl text-center my-16">
        Get started by editing{' '}
        <code className="bg-slate-50 rounded-sm p-3 text-base">
          pages/index.tsx
        </code>
      </p>
      <Grid>
        <Card
          title="Documentation"
          description="Find in-depth information about Next.js features and API."
          link="https://nextjs.org/docs"
        />
        <Card
          title="Learn"
          description="Learn about Next.js in an interactive course with quizzes!"
          link="https://nextjs.org/learn"
        />
        <Card
          title="Examples"
          description="Discover and deploy boilerplate example Next.js projects."
          link="https://github.com/vercel/next.js/tree/master/examples"
        />
        <Card
          title="Deploy"
          description="Instantly deploy your Next.js site to a public URL with Vercel."
          link="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
        />
      </Grid>
    </main>
    <Footer />
  </>
)

export default Home
