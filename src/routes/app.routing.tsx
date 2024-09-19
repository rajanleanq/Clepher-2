import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import PostEngagement from "../pages/post-engagements/post-engagement";
import PostEngagementEdit from "../pages/post-engagements/page/post-engagement-edit/post-engagement-edit";
import { routes } from "../constant/routes";
import Layout from "../components/organisms/layout";
import NotFound from "../pages/not-found/404";

export default function AppRoutes() {
  return (
    <Router>
      <Routes>
        {/* Default route for post-engagement */}
        <Route
          path="/:id/capture-tools/:captureTool"
          element={
            <Layout>
              <PostEngagement />
            </Layout>
          }
        />

        {/* Route for edit mode */}
        <Route
          path="/:id/capture-tools/post-engagement/:captureTool/edit"
          element={
            <Layout>
              <PostEngagementEdit />
            </Layout>
          }
        />

        {/* Catch-all route for non-existing routes: NotFound page */}
        <Route path="/not-found" element={<NotFound />} />

        {/* Redirect to 'not-found' for any unknown routes */}
        <Route path="*" element={<Navigate to="/not-found" replace />} />

        {/* Catch-all route (optional): Redirect to the default post-engagement page */}
        <Route path="/" element={<Navigate to={routes?.index} replace />} />
      </Routes>
    </Router>
  );
}
