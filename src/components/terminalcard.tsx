import CardSwap, { Card } from '@/components/ui/CardSwap'
import { TerminalDemo } from './Codeblock'
import React from 'react'

function Terminalcard() {
  return (
    <div style={{ height: '300px', position: 'relative' }} className='h-full'>
  <CardSwap
    cardDistance={100}
    verticalDistance={70}
    delay={5000}
    pauseOnHover={true}
  >
    <Card>
      <TerminalDemo/>
    </Card>
    <Card>
       <TerminalDemo/>
    </Card>
    <Card>
     <TerminalDemo/>
    </Card>
  </CardSwap>
</div>
  )
}

export default Terminalcard
