import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import PostEngagement from "./pages/post-engagements/post-engagement";

export default function AppRouters() {
  return (
    <Router>
      <Routes>
        <Route path="/:id/capture-tools/:captureTool" element={<PostEngagement />} />
      </Routes>
    </Router>
  );
}
