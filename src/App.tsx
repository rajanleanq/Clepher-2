import Layout from "./components/organisms/layout";
import AppRoutes from "./routes/app.routing";

export default function AppRouters() {
  return (
    <Layout>
      <AppRoutes />
    </Layout>
  );
}
