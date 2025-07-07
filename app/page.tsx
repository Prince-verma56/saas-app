import CompanionCard from '@/components/CompanionCard'
import CompanionsList from '@/components/CompanionsList'
import CTA from '@/components/CTA'
import { Button } from '@/components/ui/button'
import React from 'react'
import { recentSessions } from '@/constants/index'


const Page = () => {
  return (
    <>
      <main>

        <h1 className='text-2xl '>Popular Companions</h1>
        <section className='home-section'>

          <CompanionCard
            id='123'
            name='Neura the Brainy Explorer'
            topic="Neural Network of the Brain"
            subject="science"
            duration={45}
            color="#7F56D9"

          />

          <CompanionCard
            id='456'
            name='Countsy the Number Wizard'
            topic="Derivitives & Integrals"
            subject="science"
            duration={45}
            color="#94d2bd"

          />

          <CompanionCard
            id='678'
            name='Verba the Vocabulary Builder'
            topic="language"
            subject="English Literature"
            duration={45}
            color="#73d2de"

          />


        </section>


        <section className='home-section'>
          <CompanionsList
            title="Recent completed sessions"
            companions={recentSessions}
            classNames="w-2/3 max-lg:w-full"
          />
          <CTA />
        </section>
      </main>

    </>
  )
}

export default Page