import './App.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import RootLayout from "./routes/RootLayout";
import ErrorPage from "./routes/ErrorPage";
import Homepage from "./routes/Homepage";
import BlogDetail from "./routes/BlogDetail";
import NewPost from "./routes/NewPost";


const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <Homepage /> },
      { path: "/BlogDetail/:id", element: <BlogDetail /> },
      { path: "/NewPost", element: <NewPost /> },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}


export default App
