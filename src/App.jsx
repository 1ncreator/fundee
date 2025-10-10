import Header from "./Header/Header.jsx"
import HeroSection from "./Hero-section/Hero.jsx"
import HowWorks from "./How-it-works-section/How-it-works.jsx"
import TrendingProjects from "./Trending Projects/Trending.jsx"
import Footer from "./Footer/footer.jsx"

import Button from "./components/Button/index.jsx"

import styled from "styled-components"

const App = () => {
  return (
    <div>
      <Title>Hello World!</Title>
      <Wrapper>
        <Left></Left>
        <Right></Right>
      </Wrapper>

      <Header />
      <HeroSection />

      <TrendingProjects />
      <HowWorks />
      <Footer />
    </div>
  )
}

const Title = styled.h1`
  color: red;
`

const Wrapper = styled.div`
  border: 1px solid blue;
  display: flex;
  padding: 20px;
`

const Left = styled.div`
  border: 1px solid green;
  width: 50%;
  height: 200px;
`

const Right = styled.div`
  border: 1px solid red;
  width: 50%;
  height: 200px;
`

export default App
