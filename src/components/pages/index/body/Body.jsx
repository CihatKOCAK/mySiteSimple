import React from 'react';
import "./body.scss";
import Typical from 'react-typical';
import { Link } from 'react-router-dom';


function Body() {
  var codes = ["JavaScript", "TypeScript", "HTML", "CSS", "Python", "Java", "PHP"];
  var tools = ["React", "Redux", "NodeJS", "Storybook", "MaterialUI", "Heroku"];
  var stepsTypical = ['front-end developer 💻', 1000, 'computer teacher 👨🏻‍🏫', 1000, 'maybe one day youtuber 🤳🏻', 1000];

  const codeList = codes.map((code, index) => {
    return <>{window.screen.width <= 768 ? <div>&emsp;&emsp; <span className='code' key={index}>{codes.length - 1 > index ? code + ", " : code}</span></div> : <span className='code' key={index}>{codes.length - 1 > index ? code + ", " : code}</span>}

    </>
  });

  const toolsList = tools.map((tool, index) => {
    return <>{window.screen.width <= 768 ? <div>&emsp;&emsp; <span className='tool' key={index}>{tools.length - 1 > index ? tool + ", " : tool}</span></div> : <span className='tool' key={index}>{tools.length - 1 > index ? tool + ", " : tool}</span>}

    </>
  });

  const TypingAnimation = React.memo(
    () => {
      return (
        <Typical
          steps={stepsTypical}
          loop={Infinity}
          wrapper="p"
        />
      )
    }, (porps, preProps) => true
  )
  console.log(window.screen.width);
  return (
    <>
      <div className='context-side'>
        <h1>Hi, I'm Cihat</h1>
        <p>I'm a</p>
        <div className='typical'>
          <TypingAnimation />
        </div>
      </div>
      <div className='code-container'>
        <pre className='code-pre'>
          <span className='codeComment'>//portfolio.js</span>
          <div><span className='varType'>const</span> cihatKocak <span className='codeKey'>=</span> {'{ '}</div>
          <div>&emsp;&emsp;<span className="codeKey">pronouns:</span> <span className='varStr'>&quot;he&quot;</span> | <span className='varStr'>&quot;his&quot;</span>,</div>
          <div>&emsp;&emsp;<span className="codeKey">code</span>: [{codeList}],</div>
          <div>&emsp;&emsp;<span className="codeKey">tools</span>: [{toolsList}],</div>
          <div>&emsp;&emsp;<span className="codeKey">techCommunities</span>: &#123;</div>
          <div>&emsp;&emsp;&emsp;&emsp;<span className="codeKey">coorganizer</span>: <span className='varStr'>&quot;kodluyoruz&quot;</span>,</div>
          <div>&emsp;&emsp;&emsp;&emsp;<span className="codeKey">mentor</span>: <span className='varStr'>&quot;patika d<Link className="varStr" style={{cursor:"text"}} to="/my-private-space">e</Link>v&quot;</span></div>
          <div>&emsp;&emsp;&emsp;&#125;,</div>
          <div>&emsp;&emsp;<span className="codeKey">challenge</span>: <span className='varStr'>&quot;not for now&quot;</span></div>
          <div>&#125;</div>
          <div className='code-botSide'>

            <div className="projects">  <Link id='projects' to="/projects" replace >{' > '}getProjects! 📁</Link>

            </div>
            <div className="forMore">
              <a href="/cv.pdf" download target="_blank">//For Resume!</a></div>
          </div>
          <Link id='contact' to="/contact-me" replace >{' > '}contactMe 📮</Link>
        </pre>
      </div>
      <div className="social-menu">
        <ul>
          <li key={"git"}><a href="https://github.com/CihatKOCAK" target="blank"><i className="fab fa-github"></i></a></li>
          <li key={"hackerrank"}><a href="https://www.hackerrank.com/pcihatkocakk" target="blank"><i className="fab fa-hackerrank"></i></a></li>
          <li key={"linkedn"}><a href="https://www.linkedin.com/in/cihat-kocakk/" target="blank"><i className="fab fa-linkedin-in"></i></a></li>
          <li key={"tw"}><a href="https://twitter.com/davsanavi"><i className="fab fa-twitter" target="blank"></i></a></li>
        </ul>
      </div>
    </>
  );
}

export default Body;
