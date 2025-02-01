import { createHashRouter, RouterProvider } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import ProfilePage from "./pages/ProfilePage";
import ProjectPage from "./pages/ProjectPage";
import ContactPage from "./pages/ContactPage";
import ProjectDetailPage from "./pages/ProjectDetailPage";

const router = createHashRouter([
    {
        path: "/",  
        element: <MainLayout />,   
        children:[
            {
                index: true,
                element: <ProfilePage />
            },
            {
                path: "/project",   
                element: <ProjectPage />
            },
            {
                path: 'project/:id',
                element: <ProjectDetailPage />,
              },
            {
                path: "/contact",
                element: <ContactPage />
            },
        ] 
    }

])

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
