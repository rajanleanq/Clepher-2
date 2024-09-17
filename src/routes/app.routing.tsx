import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import PostEngagement from "../pages/post-engagements/post-engagement";
import PostEngagementEdit from "../pages/post-engagements/page/post-engagement-edit/post-engagement-edit";
import { routes } from "../constant/routes";

export default function AppRoutes() {
  return (
    <Router>
      <Routes>
        {/* Default route for post-engagement */}
        <Route
          path="/:id/capture-tools/:captureTool"
          element={<PostEngagement />}
        />

        {/* Route for edit mode */}
        <Route
          path="/:id/capture-tools/post-engagement/:captureTool/edit"
          element={<PostEngagementEdit />}
        />

        {/* Catch-all route (optional): Redirect to the default post-engagement page */}
        <Route
          path="/"
          element={<Navigate to={routes?.index} replace />}
        />
      </Routes>
    </Router>
  );
}
