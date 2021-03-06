import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";
import {useState, useRef,  useEffect} from "react";
import {Route, Switch, useHistory } from "react-router-dom";
import Welcome from "./components/Welcome";
import Exercise from "./components/Exercise";
import Guide from "./components/Guide";
import Cooldown from "./components/Cooldown";
import AboutMe from "./components/AboutMe";


function App() {

  const history = useHistory();
  const backgrounds=[
    "linear-gradient(358deg,var(--spring-green),var(--juicy-mango)",
    "linear-gradient(358deg,var(--aqua-green),var(--pool-blue)" ,
    "linear-gradient(358deg,var(--pale-green),var(--pale-yellow)" ,
    "linear-gradient(358deg,var(--pale-magenta),var(--pale-mandarin)",
    "linear-gradient(358deg,var(--deep-purple),var(--dark-mauve)" ,
    "linear-gradient(358deg,var(--lavender),var(--pale-blue)" ,
    "linear-gradient(358deg,var(--deep-red),var(--soft-pink)" ,
    "linear-gradient(358deg,var(--light-mud),var(--lady-grey)" ,
    "linear-gradient(358deg,var(--light-mauve),var(--horizon-blue)" ,
    "linear-gradient(358deg,var(--deep-teal),var(--lime-green)" ,
    "linear-gradient(358deg,var(--night-blue),var(--dawn-orange)" ,
    "linear-gradient(358deg,var(--fresh-yellow),var(--aqua-blue)" 
  ]

const [section, setSection]=useState(1);
const [color, setColor]= useState();
const [isRunning, setIsRunning]=useState(false);
const [mySetting, setMySetting]=useState({time: "1"});


// create audio for section start according to mySetting
let sectionStartAudio = new Audio(`/sounds/notifications/${mySetting.notification}`);
sectionStartAudio.volume = 0.4;

const backgroundAudio1 = useRef(new Audio('/sounds/background/zapsplatNightCrickets.mp3'));

const backgroundAudio2 = useRef(new Audio('sounds/background/zapsplatBeachAndSeagullsTrimmed.mp3'));

const backgroundAudio3 = useRef(new Audio('sounds/background/forestAlmost6Minutes.mp3'));

const backgroundAudio4 = useRef(new Audio('/sounds/background/zapsplatRainAndThunder.mp3'));


let backgroundAudio;
switch (mySetting.background) {

case "Crickets":
  backgroundAudio = backgroundAudio1;
  break;

case "Waves": 
  backgroundAudio = backgroundAudio2;
  break;

case "Forest":
  backgroundAudio = backgroundAudio3;
  break;

default:
  backgroundAudio = backgroundAudio4;
  break;
  
}
backgroundAudio.current.volume = 0.6;
backgroundAudio.current.loop = true;

const handleChangeForm = (e)=>{
  setMySetting((prevState)=>{
    return {...prevState, [e.target.name]: e.target.value}
  })
} 

const handleRunSet = () => {
    setSection(1);
    backgroundAudio.current.play();
    setColor(backgrounds[section-1])
    setIsRunning(true);
    history.push("/exercise");
    console.log(sectionStartAudio)
    console.log(backgroundAudio.current)
}

const handleRestart = () =>{
  history.push('/');
  backgroundAudio.current.pause();
  backgroundAudio.current.currentTime=0.0;
  window.location.reload();
}

const handleFinishSet = (e) => {
  e.preventDefault();
  backgroundAudio.current.pause();
  backgroundAudio.current.currentTime=0.0;
  history.push('/');
  window.location.reload();
}

  return (
    <div className="App">
      <Header />
      <Main>
        <Switch>
          <Route exact path="/">
            <Welcome 
            mySetting={mySetting}
            onChangeForm={handleChangeForm}
            backgroundAudio={backgroundAudio}
            handleRunSet={handleRunSet} />
          </Route>
          <Route exact path="/exercise">
            <Exercise 
              mySetting={mySetting}
              backgrounds={backgrounds}
              color={color}
              setColor={setColor}
              section={section}
              sectionStartAudio={sectionStartAudio}
              backgroundAudio={backgroundAudio}
              setSection={setSection}
              isRunning={isRunning}
              setIsRunning={setIsRunning}
              handleRestart={handleRestart}
              />
          </Route>
          <Route exact path="/guide">
            <Guide />
          </Route>
          <Route exact path="/cooldown">
            <Cooldown 
             backgroundAudio={backgroundAudio}
              section={section}
              handleFinishSet={handleFinishSet}
            />
          </Route>
          <Route exact path="/about">
            <AboutMe />
          </Route>
        </Switch>
      </Main>
      <Footer />
    </div>
  );
}

export default App;
