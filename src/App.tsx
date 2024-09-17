import Layout from "./components/molecule/layout/layout";
import AppRoutes from "./routes/app.routing";

export default function AppRouters() {
  return (
    <Layout>
      <AppRoutes />
    </Layout>
  );
}
