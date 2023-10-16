import React from 'react'
import { useState } from 'react'
import { Container, Wrapper, Title, Desc, CardContainer, ToggleButtonGroup, ToggleButton, Divider } from './InterestStyle'
import InterestCard from '../Cards/InterestCards'
import { interest } from '../../data/constants'


const Interest = ({openModal,setOpenModal}) => {
  const [toggle, setToggle] = useState('all');
  return (
    <Container id="interest">
      <Wrapper>
        <Title>Interest</Title>
        <Desc>
        "Interest" is a term that refers to someone's attraction or enthusiasm for something. It can mean an interest in a specific topic, hobby, or activity that someone enjoys and cares about. Interests can vary from person to person and can encompass a wide range of things, from sports, arts, music to scientific research, and much more.
        </Desc>
 
        <CardContainer>
          {toggle === 'all' && interest
            .map((interest) => (
              <InterestCard interest={interest} openModal={openModal} setOpenModal={setOpenModal}/>
            ))}
          {interest
            .filter((item) => item.category == toggle)
            .map((interest) => (
              <InterestCard interest={interest} openModal={openModal} setOpenModal={setOpenModal}/>
            ))}
        </CardContainer>
      </Wrapper>
    </Container>
  )
}

export default Interest