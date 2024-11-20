import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import MyResumes from "./features/dashboard/MyResumes";
import CreateResume from "./features/dashboard/CreateResume";
import PageNotFound from "./pages/PageNotFound";
import AppLayout from "./pages/AppLayout";
import MakeResume from "./pages/MakeResume";
import Content from "./pages/Content";
import { ResumeProvider } from "./contexts/ResumeContext";
import ResumePage from "./components/ResumePage";
function App() {
  return (
    <ResumeProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/app" element={<AppLayout />}>
            <Route index element={<Content />} />
            <Route path="myresume" element={<MyResumes />} />
            <Route path="createresume" element={<CreateResume />} />
            <Route path="createresume/create" element={<MakeResume />} />
            <Route path="final" element={<ResumePage />} />
            {/* Add the Resume route */}
          </Route>
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>
    </ResumeProvider>
  );
}

export default App;
