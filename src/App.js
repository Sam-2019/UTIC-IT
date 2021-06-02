import "./styles.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch
} from "react-router-dom";
import Home from "./Home/Home";
import Category from "./Category/Category";
import Location from "./Location/Location";
import LocationInfo from "./Location/locationInfo";
import CategoryInfo from "./Category/categoryInfo";

import "bootstrap/dist/css/bootstrap.min.css";

export default function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/location">Location</Link>
            </li>
            <li>
              <Link to="/category">Category</Link>
            </li>
          </ul>
        </nav>

        <Switch>
          <Route path="/location">
            <LocationPage />
          </Route>

          <Route path="/category">
            <CategoryPage />
          </Route>

          <Route exact path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

function LocationPage() {
  let match = useRouteMatch();

  return (
    <div>
      <h2>Locations</h2>

      <Switch>
        <Route path={`${match.path}/:id`}>
          <LocationInfo />
        </Route>

        <Route path={match.path}>
          <Location />
        </Route>
      </Switch>
    </div>
  );
}

function CategoryPage() {
  let match = useRouteMatch();
  return (
    <div>
      <h2>Categories</h2>

      <Switch>
        <Route path={`${match.path}/:id`}>
          <CategoryInfo />
        </Route>

        <Route path={match.path}>
          <Category />
        </Route>
      </Switch>
    </div>
  );
}
