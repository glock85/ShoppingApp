import { AppTheme } from "./theme";
import { Layout } from "./ui";
import { AppRouter } from "./router/AppRouter";

const Shopping = () => {
  return (
    <AppTheme>
      <Layout>
        <AppRouter />
      </Layout>
    </AppTheme>
  );
};

export default Shopping;
