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
import { Container } from "reactstrap";
import "./app.css";

import "bootstrap/dist/css/bootstrap.min.css";

export default function App() {
  return (
    <Router>
      <Container>
        <div style={{ border: "1px solid red" }}>
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

          <nav className="page_footer">
            <Link to="/category">Categories</Link>{" "}
            <Link to="/location">Locations</Link>
          </nav>
        </div>
      </Container>
    </Router>
  );
}

function LocationPage() {
  let match = useRouteMatch();

  return (
    <div>
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
