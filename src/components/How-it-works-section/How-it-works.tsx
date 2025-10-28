
import { styled } from "styled-components"
import { useState } from "react"
import Button from "../Button/index.tsx"

const flows: { 
    creator: { id: number; image: string; title: string; description: string; timeline?: string; }[]; 
    fan: { id: number; image: string; title: string; description: string; timeline?: string; }[];
} = {
    creator: [
        {
            id: 1,
            image: "../images/HIW-creator-1.png",
            title: "Submit the projects you want to work on or check out the projects that your fans want you to make ",
            description: "Creators often have the problem of not knowing which project to get started on first. By submitting your top ideas here, you can have your fans upvote it, discuss it, or even fund your ideas.",
            timeline: "../icons/arrow-line-1.png",
        },
        {
            id: 2,
            image: "../images/HIW-creator-2.png",
            title: "Discuss projects with your fans, set funding goals on each of your projects. ",
            description: "Never guess again whether a video will perform well or not, interact directly with your viewers to find out what content they want to watch and how your vision and their vision aligns.",
            timeline: "../icons/arrow-line-2.png",
        },
        {
            id: 3,
            image: "../images/HIW-creator-3.png",
            title: "Approve fan-submitted ideas, which they will try to get funded so that you will make them! ",
            description: `Fans will submit ideas, and when you approve them you also set the "funding goal", at which you will agree to bring the idea to life!`,
            timeline: "../icons/arrow-line-1.png",
        },
        {
            id: 4,
            image: "../images/HIW-creator-4.png",
            title: "Have the option to share a portion of the ad-revenue you generate with your fans ",
            description: `Think an idea will go viral? You can choose to "IPO" a project and return a portion of the revenue back to the community. Incentivize more people to fund the project!`,
        }
    ],
    fan: [
        {
            id: 1,
            image: "../images/HIW-creator-2.png",
            title: "Submit the projects you want to work on or check out the projects that your fans want you to make ",
            description: "Creators often have the problem of not knowing which project to get started on first. By submitting your top ideas here, you can have your fans upvote it, discuss it, or even fund your ideas.",
            timeline: "../icons/arrow-line-1.png",
        },
        {
            id: 2,
            image: "../images/HIW-creator-4.png",
            title: "Discuss projects with your fans, set funding goals on each of your projects. ",
            description: "Never guess again whether a video will perform well or not, interact directly with your viewers to find out what content they want to watch and how your vision and their vision aligns.",
            timeline: "../icons/arrow-line-2.png",
        },
        {
            id: 3,
            image: "../images/HIW-creator-1.png",
            title: "Approve fan-submitted ideas, which they will try to get funded so that you will make them! ",
            description: `Fans will submit ideas, and when you approve them you also set the "funding goal", at which you will agree to bring the idea to life!`,
            timeline: "../icons/arrow-line-1.png",
        },
        {
            id: 4,
            image: "../images/HIW-creator-3.png",
            title: "Have the option to share a portion of the ad-revenue you generate with your fans ",
            description: `Think an idea will go viral? You can choose to "IPO" a project and return a portion of the revenue back to the community. Incentivize more people to fund the project!`,
        }
    ],
}


export default function HowItWorks() {

    const [activeFlow, setActiveFlow] = useState('creator');
    const steps = flows[activeFlow as keyof typeof flows];

    return( 
        <ZaebalWrapper>
        <Tabs>
            <p>I am</p>
            <Btns>
                <TabButton $active={activeFlow === 'creator'} onClick={() => setActiveFlow('creator')}>Creator</TabButton>
                <TabButton $active={activeFlow === 'fan'} onClick={() => setActiveFlow('fan')}>Fan</TabButton>
            </Btns>
        </Tabs>
        <HowItWorksWrapper>
            {steps.map((item, index) => (
                <Step key={item.id} $reverse={index % 2 === 1}>
                    <StepImage src={item.image} />
                    <StepContent>
                        <StepTitle>{item.title}</StepTitle>
                        <StepDescription>{item.description}</StepDescription>
                    </StepContent>
                    <Timeline src={item.timeline} />
                </Step>
            ))}
        </HowItWorksWrapper>
        <Button onClick={() => {}} btntext={'Call to action'} variant="purple-button" />
        </ZaebalWrapper>
    )
}

const ZaebalWrapper = styled.div`
    display: flex;
    flex-flow: column nowrap;
    gap: 17px;
    align-items: center;
`

const HowItWorksWrapper = styled.div`
    display: flex;
    flex-flow: column;
    gap: 150px;
`

const Timeline = styled.img`
    position: absolute;
    top: 250px;
    left: 50%;
    transform: translateX(-50%);
`
const Step = styled.div<{ $reverse: boolean }>`
    display: flex;
    position: relative;
    align-items: center;
    gap: 70px;
    column-gap: 150px;
    flex-direction: ${({ $reverse }) => ($reverse ? 'row-reverse' : 'row')};
`

const StepImage = styled.img`
    max-width: 508px;
`
const StepContent = styled.div`
    max-width: 500px;
`
const StepTitle = styled.p`
    font-size: 26px;
    font-weight: 600;
    color: #212130;
`
const StepDescription = styled.p`
    font-size: 13px;
    font-weight: 400;
    color: #56566B;
`

const Tabs = styled.div`
    display: flex;
    flex-flow: row nowrap;
    gap: 20px;
    align-items: center;
`

const Btns = styled.div`
    border: 1px solid gray;
    border-radius: 20px;
`

const TabButton = styled.button<{ $active: boolean }>`
    width: 116px;
    height: 36px;
    border-radius: 20px;
    border: none;
    font-size: 13px;
    font-weight: 600;
    color: ${({ $active }) => ($active ? '#FFFFFF' : '#212130')};
    background-color: ${({ $active }) => ($active ? '#6B68F3' : '#FFFFFF')};
    transition: 1s ease;
`
// export default function HowWorks() {

//     return(
//         <div className="hiw-creator">
//             <div className="main-title">
//                 <p>How it works</p>
//             </div>
//             <div className="part-1">
//                 <div>
//                     <img src="../images/HIW-creator-1.png"></img>
//                 </div>

//                 <div className="text-side">
//                     <div className="ellipse"><p>1</p></div>
//                     <p className="prime-title">Submit the projects you want to work on or check out the projects that your fans want you to make </p>
//                     <p className="secondary-title">Creators often have the problem of not knowing which project to get started on first. By submitting your top ideas here, you can have your fans upvote it, discuss it, or even fund your ideas.</p>
//                 </div>
//             </div>
//             <img className="arrow-line1" src="../icons/arrow-line-1.png"></img>
//             <div className="part-2">
//                 <div className="text-side-2">
//                     <div className="ellipse"><p>2</p></div>
//                     <p className="prime-title">Discuss projects with your fans, set funding goals on each of your projects.  </p>
//                     <p className="secondary-title">Never guess again whether a video will perform well or not, interact directly with your viewers to find out what content they want to watch and how your vision and their vision aligns.</p>
//                 </div>
//                 <div>
//                     <img src="../images/HIW-creator-2.png"></img>
//                 </div>
//             </div>
//             <img className="arrow-line2" src="../icons/arrow-line-2.png"></img>
//             <div className="part-3">
//                 <div>
//                     <img src="../images/HIW-creator-3.png"></img>
//                 </div>

//                 <div className="text-side">
//                     <div className="ellipse"><p>3</p></div>
//                     <p className="prime-title">Approve fan-submitted ideas, which they will try to get funded so that you will make them! </p>
//                     <p className="secondary-title">Fans will submit ideas, and when you approve them you also set the "funding goal", at which you will agree to bring the idea to life!</p>
//                 </div>
//             </div>
//             <img className="arrow-line1" src="../icons/arrow-line-1.png"></img>
//             <div className="part-4">
//                 <div className="text-side-2">
//                     <div className="ellipse"><p>4</p></div>
//                     <p className="prime-title">Have the option to share a portion of the ad-revenue you generate with your fans </p>
//                     <p className="secondary-title">Think an idea will go viral? You can choose to "IPO" a project and return a portion of the revenue back to the community. Incentivize more people to fund the project!</p>
//                 </div>
//                 <div>
//                     <img src="../images/HIW-creator-4.png"></img>
//                 </div>
//             </div>
//                 <div className="hiw-btn">
//                     <Button btntext={'Call to action'} variant="purple-button" />
//                 </div>
//         </div>
//     )
// }
