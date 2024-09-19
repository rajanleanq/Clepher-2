import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import { lazy } from "react";
import { routes } from "../constant/routes";
import PostEngagement from "../pages/post-engagements/post-engagement";
import NotFound from "../pages/not-found/404";
import withSuspense from "../components/hoc/withSuspense";
import AdminLayout from "../components/organisms/layout/admin-layout";

// Lazy loading of edit page
const PostEngagementEdit = lazy(
  () =>
    import(
      "../pages/post-engagements/page/post-engagement-edit/post-engagement-edit"
    )
);
const LazyPostEngagementEdit = withSuspense(PostEngagementEdit);

export default function AppRoutes() {
  return (
    <Router>
      <Routes>
        <Route
          path="/:id/capture-tools/:captureTool"
          element={
            <AdminLayout>
              <PostEngagement />
            </AdminLayout>
          }
        />
        <Route
          path="/:id/capture-tools/post-engagement/:captureTool/edit"
          element={
            <AdminLayout>
              <LazyPostEngagementEdit />
            </AdminLayout>
          }
        />
        <Route path="/not-found" element={<NotFound />} />
        <Route path="*" element={<Navigate to="/not-found" replace />} />
        <Route path="/" element={<Navigate to={routes?.index} replace />} />
      </Routes>
    </Router>
  );
}
