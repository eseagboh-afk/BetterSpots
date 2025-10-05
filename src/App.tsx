import { Redirect, Route } from 'react-router-dom';
import { IonApp, IonRouterOutlet, setupIonicReact } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import Home from './pages/Home';
import Welcome from './pages/Welcome';
import signUp from './pages/signUp';
import signIn from './pages/signIn/signIn';
import userProfile from './pages/userProfile';
import viewUserProfile from './pages/viewUserProfile';
import postSignUp from './pages/postSignUp';
import findEvents from './pages/findEvents';




/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/**
 * Ionic Dark Mode
 * -----------------------------------------------------
 * For more info, please see:
 * https://ionicframework.com/docs/theming/dark-mode
 */

/* import '@ionic/react/css/palettes/dark.always.css'; */
/* import '@ionic/react/css/palettes/dark.class.css'; */
import '@ionic/react/css/palettes/dark.system.css';

/* Theme variables */
import './theme/variables.css';

setupIonicReact();

const App: React.FC = () => (
  <IonApp>
    <IonReactRouter>
      <IonRouterOutlet>
        <Route exact path="/home">
          <Home />
        </Route>
        <Route exact path="/">
          <Redirect to="/home" />
        </Route>
        <Route exact path="/" render={() => <Redirect to="/welcome" />} />
        <Route path="/Welcome" component={Welcome} exact />
        <Route path="/signUp" component={signUp} exact />
        <Route path="/signIn" component={signIn} exact/>
        <Route path="/userProfile" component={userProfile} exact/>
        <Route path="/viewUserProfile" component={viewUserProfile} exact/>
        <Route path="/postSignUp" component={postSignUp} exact/>
        <Route path="/findEvents" component={findEvents} exact/>
      </IonRouterOutlet>
    </IonReactRouter>
  </IonApp>
);

export default App;
