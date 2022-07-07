import { Outlet } from 'react-router-dom';
import CategoryDirectory from '../../components/category-directory/category-directory'



const Home = () => {
  
  
return (
  <div>
    <Outlet />
    <CategoryDirectory/>
  </div>
  
);
}

export default Home;
