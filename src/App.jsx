import Header from "./components/Header/Header.jsx"
import HeroSection from "./components/Hero-section/Hero.jsx"
import HowWorks from "./components/How-it-works-section/How-it-works.jsx"
import TrendingProjects from "./components/Trending Projects/Trending.jsx"


import styled from "styled-components"

const App = () => {
  return (
    <div>

      <Header />
      <HeroSection />
      <TrendingProjects />
      <HowWorks />
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
