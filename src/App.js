import logo from "./logo.svg";
import "./App.css";
import Create from "./components/Create";
import Delete from "./components/Delete";
import Read from "./components/Read";
import Edit from "./components/Update";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import PostPage from "./PostPage";
import Sidebar from "./components/Sidebar";
import Layout from "./components/Layout";
import EsparkCareers from "./components/EsparkCareers";
function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Read />} />
          <Route path={`postpage/:id`} element={<PostPage />} />
          <Route path="/esparkBlogs" element={<Read />} />
          <Route path="/eSparkCareers" element={<EsparkCareers />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
