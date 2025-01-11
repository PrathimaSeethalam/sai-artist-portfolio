// import About from './components/About';
// import Hero from './components/Hero';
// import Navbar from './components/Navbar';
// import Projects from './components/Projects';
// import Skills from './components/Skills';

// const App = () => {
//   return (
//     <>
//       <Navbar />
//       <Hero />
//       <Skills />
//       <About />
//       <Projects />
//     </>
//   );
// };
// export default App;


import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import ProjectDetails from "./components/ProjectDetails"; // New component for individual project pages

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={
          <>
            <Hero />
            <Skills />
            <About />
            <Projects />
          </>
        } />
        <Route path="/projects/:slug" element={<ProjectDetails />} />
      </Routes>
    </Router>
  );
};

export default App;


// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Projects from './components/Projects';
// import ProjectDetails from './components/ProjectDetails'; // Component for project detail page

// const App = () => {
//   return (
//     <Router>
//       <Routes>
//         <Route path="/" element={<Projects />} />
//         <Route path="/projects/:slug" element={<ProjectDetails />} />
//       </Routes>
//     </Router>
//   );
// };

// export default App;
