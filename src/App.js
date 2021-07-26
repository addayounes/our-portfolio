import Navbar from "./components/Navbar/Navbar";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import ProjectDetails from "./components/ProjectDetails/ProjectDetails";
import { projects } from "./components/Works/Projects";
import ScrollTop from "./components/ScrollTop/ScrollTop";
import Home from "./Home";

function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <ScrollTop />
                <Navbar />
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route
                        path="/MAC"
                        component={() => (
                            <ProjectDetails project={projects[1]} />
                        )}
                    />
                    <Route
                        path="/Crispy"
                        component={() => (
                            <ProjectDetails project={projects[0]} />
                        )}
                    />
                </Switch>
            </BrowserRouter>
        </div>
    );
}

export default App;
