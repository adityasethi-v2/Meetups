import { Route, Switch } from 'react-router-dom';
import AllMeetUpsPage from './pages/AllMeetUps';
import FavoritesPage from './pages/Favorites';
import NewMeetsUpsPage from './pages/NewMeetUps';
import Layout from './components/layouts/Layout';

function App() {
  return (
    <Layout>
      <Switch>
        <Route path='/' exact>
          <AllMeetUpsPage />
        </Route>
        <Route path='/favorites'>
          <FavoritesPage />
        </Route>
        <Route path='/newmeetups'>
          <NewMeetsUpsPage />
        </Route>
      </Switch>
    </Layout>
  );
}

export default App;
