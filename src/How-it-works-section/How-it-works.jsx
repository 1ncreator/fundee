import "./how-it-works.css"
import "../index.css"

export default function HowWorks() {

    return(
        <div className="hiw-creator">
            <div className="main-title">
                <p>How it works</p>
            </div>
            <div className="part-1">
                <div>
                    <img src="../images/HIW-creator-1.png"></img>
                </div>

                <div className="text-side">
                    <div className="ellipse"><p>1</p></div>
                    <p className="prime-title">Submit the projects you want to work on or check out the projects that your fans want you to make </p>
                    <p className="secondary-title">Creators often have the problem of not knowing which project to get started on first. By submitting your top ideas here, you can have your fans upvote it, discuss it, or even fund your ideas.</p>
                </div>
            </div>
            <img className="arrow-line1" src="../icons/arrow-line-1.png"></img>
            <div className="part-2">
                <div className="text-side-2">
                    <div className="ellipse"><p>2</p></div>
                    <p className="prime-title">Discuss projects with your fans, set funding goals on each of your projects.  </p>
                    <p className="secondary-title">Never guess again whether a video will perform well or not, interact directly with your viewers to find out what content they want to watch and how your vision and their vision aligns.</p>
                </div>
                <div>
                    <img src="../images/HIW-creator-2.png"></img>
                </div>
            </div>
            <img className="arrow-line2" src="../icons/arrow-line-2.png"></img>
            <div className="part-3">
                <div>
                    <img src="../images/HIW-creator-3.png"></img>
                </div>

                <div className="text-side">
                    <div className="ellipse"><p>3</p></div>
                    <p className="prime-title">Approve fan-submitted ideas, which they will try to get funded so that you will make them! </p>
                    <p className="secondary-title">Fans will submit ideas, and when you approve them you also set the "funding goal", at which you will agree to bring the idea to life!</p>
                </div>
            </div>
            <img className="arrow-line1" src="../icons/arrow-line-1.png"></img>
            <div className="part-4">
                <div className="text-side-2">
                    <div className="ellipse"><p>4</p></div>
                    <p className="prime-title">Have the option to share a portion of the ad-revenue you generate with your fans </p>
                    <p className="secondary-title">Think an idea will go viral? You can choose to "IPO" a project and return a portion of the revenue back to the community. Incentivize more people to fund the project!</p>
                </div>
                <div>
                    <img src="../images/HIW-creator-4.png"></img>
                </div>
            </div>
                <div className="hiw-btn">
                    <button>Call to action</button>
                </div>
        </div>
    )
}