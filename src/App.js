import Navbar from "./components/Navbar/Navbar";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import ProjectDetails from "./components/ProjectDetails/ProjectDetails";
import { projects } from "./components/Works/Projects";
import ScrollTop from "./components/ScrollTop/ScrollTop";
import Home from "./Home";
import { useState } from "react";

function App() {
    const [Language, setLanguage] = useState("fr");
    return (
        <div className="App">
            <BrowserRouter basename="our-portfolio">
                <ScrollTop />
                <Navbar setLanguage={setLanguage} Language={Language} />
                <Switch>
                    <Route
                        exact
                        path="/"
                        component={() => <Home Language={Language} />}
                    />
                    <Route
                        path="/MAC"
                        component={() => (
                            <ProjectDetails
                                Language={Language}
                                project={projects[1]}
                            />
                        )}
                    />
                    <Route
                        path="/Crispy"
                        component={() => (
                            <ProjectDetails
                                Language={Language}
                                project={projects[0]}
                            />
                        )}
                    />
                </Switch>
            </BrowserRouter>
        </div>
    );
}

export default App;
