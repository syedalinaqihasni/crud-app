import logo from "./logo.svg";
import "./App.css";
import Create from "./components/Create";
import Delete from "./components/Delete";
import Read from "./components/Read";
import Edit from "./components/Update";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import PostPage from "./PostPage";
import Layout from "./components/Layout";
import EsparkCareers from "./components/EsparkCareers";

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Read />} />
          <Route path={`blogs/:id`} element={<PostPage />} />  
          <Route path="/blogs" element={<Read />} />
          <Route path="/careers" element={<EsparkCareers />} />
          <Route path="/create" element={<Create/>} />
          
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
