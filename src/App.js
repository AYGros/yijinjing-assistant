import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";
import {useState, useEffect} from "react";
import {Route, Switch } from "react-router-dom";
import Welcome from "./components/Welcome";
import Exercise from "./components/Exercise";
import Guide from "./components/Guide";
import Cooldown from "./components/Cooldown";
import AboutMe from "./components/AboutMe";


function App() {
  
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

const [section, setSection]=useState(0);
const [color, setColor]= useState();
const [isRunning, setIsRunning]=useState(false);

  const handleRunSet = () => {
    setSection(1);
    setColor(backgrounds[section-1])
    setIsRunning(true);
}

  return (
    <div className="App">
      <Header />
      <Main>
        <Switch>
          <Route exact path="/">
            <Welcome handleRunSet={handleRunSet} />
          </Route>
          <Route exact path="/exercise">
            <Exercise 
              backgrounds={backgrounds}
              color={color}
              setColor={setColor}
              section={section}
              setSection={setSection}
              isRunning={isRunning}/>
          </Route>
          <Route exact path="/guide">
            <Guide />
          </Route>
          <Route exact path="/cooldown">
            <Cooldown />
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
