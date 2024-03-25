import { Route, Router, Switch } from 'wouter-preact'
import DetailsPage from 'screens/DetailsPage'
import Main from 'screens/Main'
import useHashLocation from 'hooks/useHashLocation'

export default function () {
  return (
    <div className="container mx-auto p-5 md:p-10 prose">
      <Router hook={useHashLocation}>
        <Switch>
          <Route
            path="/patient/:name"
            component={({ params }) => <DetailsPage {...params} />}
          />
          <Route component={Main} />
        </Switch>
      </Router>
    </div>
  )
}
