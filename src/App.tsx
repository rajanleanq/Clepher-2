import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import PostEngagement from "./pages/post-engagements/post-engagement";
import PostEngagementEdit from "./pages/post-engagements/page/post-engagement-edit/post-engagement-edit";

export default function AppRouters() {
  return (
    <Router>
      <Routes>
        <Route
          path="/:id/capture-tools/:captureTool"
          element={<PostEngagement />}
        />
        <Route
          path="/:id/capture-tools/post-engagement/:captureTool/edit"
          element={<PostEngagementEdit />}
        />
      </Routes>
    </Router>
  );
}
