import { RouterProvider} from 'react-router-dom';
import myRoutes from './routes/routes';




function App() {
  return (
    <RouterProvider router={myRoutes}/>
  );
}

export default App;

