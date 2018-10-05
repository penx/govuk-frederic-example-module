import React from 'react'
import styled from 'react-emotion'

import { SPACING } from '@govuk-react/constants'

const StyledSection = styled('div')({
  width: '100%'
})

const Welcome = styled('div')({
  padding: SPACING.SCALE_3
})

const PageLinks = styled('div')({
  padding: SPACING.SCALE_3
})

const Heading = styled('div')({
  fontSize: '36px',
  fontWeight: 'bold',
  width: '100%',
  borderBottom: '1px solid #bfc1c3',
  paddingBottom: SPACING.SCALE_5
})

const Home = () => (
  <StyledSection>
    <Welcome>
      <Heading>Component prototype</Heading>
    </Welcome>
    <PageLinks>
      Example link
    </PageLinks>
  </StyledSection>
)

export default Home
