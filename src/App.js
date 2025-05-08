import { Provider } from "react-redux";
import { RouterProvider } from "react-router";
import { createBrowserRouter } from "react-router-dom";
import { Body } from "./components/Body/Body";
import { Header } from "./components/Header/Header";
import { MainContainer } from './components/MainContainer/MainContainer'
import { WatchPage } from './pages/WatchPage/WatchPage'
import { store } from "./utils/store";

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Body />,
    children:[{
      path: '/',
      element: <MainContainer/>
    },{
      path: 'watch',
      element: <WatchPage/>
    }]
  },
]);

function App() {
  return (
    <Provider store={store}>
      <Header />

      <RouterProvider router={appRouter} />
    </Provider>
  );
}

export default App;
