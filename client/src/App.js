import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PageRender from "./PageRender";
function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <input type="checkbox" id="theme" />
          <div className="App">
            <div className="main">
              <Route path="/:page" element={<PageRender />} />
            </div>
          </div>
        </Routes>
      </Router>
    </div>
    // {/* <Router>
    //   <Routes>
    //     <Route exact path="/" component={<PageRender />} />
    //     <Route path="/login" element={<Login/> }  />
    //  <Route path="/signup" element={<Signup/> }  />

    //  <Route path="/apply" element={<Form/> }  />

    //   </Routes>
    // </Router> */}
  );
}

export default App;
