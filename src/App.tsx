import {
  IonApp,
  IonContent,
  IonMenu,
  IonRouterOutlet,
  setupIonicReact
} from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import React, { useEffect } from 'react';
import { Redirect, Route } from 'react-router-dom';


/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/display.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/padding.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';

/**
 * Ionic Dark Mode
 * -----------------------------------------------------
 * For more info, please see:
 * https://ionicframework.com/docs/theming/dark-mode
 */

// import '@ionic/react/css/palettes/dark.always.css';
// import '@ionic/react/css/palettes/dark.system.css';
import '@ionic/react/css/palettes/dark.class.css';

/* Theme variables */
import './theme/variables.css';

/* Leaflet CSS */
import 'leaflet/dist/leaflet.css';

/* Global styles */
import './App.scss';
import { AppContextProvider } from './data/AppContext';
import { connect } from './data/connect';
import { loadConfData } from './data/sessions/sessions.actions';
import {
  loadUserData,
  setIsLoggedIn,
  setUsername,
} from './data/user/user.actions';
import { Schedule } from './models/Schedule';
import MainApp from './pages/caa-app/MainApp';
import RootApp from './pages/RootApp';
// import * as ThamDinhApp from './pages/thamdinh-app/MainApp'; 
setupIonicReact();

const App: React.FC = () => {
  return (
    <AppContextProvider>
      <IonicAppConnected />
    </AppContextProvider>
  );
};

interface StateProps {
  darkMode: boolean;
  schedule: Schedule;
}

interface DispatchProps {
  loadConfData: typeof loadConfData;
  loadUserData: typeof loadUserData;
  setIsLoggedIn: typeof setIsLoggedIn;
  setUsername: typeof setUsername;
}

interface IonicAppProps extends StateProps, DispatchProps { }

const IonicApp: React.FC<IonicAppProps> = ({
  darkMode,
  schedule,
  setIsLoggedIn,
  setUsername,
  loadConfData,
  loadUserData,
}) => {
  useEffect(() => {
    loadUserData();
    loadConfData();
    // eslint-disable-next-line
  }, []);

  return (
    <IonApp>
      <IonReactRouter>
        <IonMenu contentId="main-content"><IonContent className="ion-padding">This is the menu content.</IonContent></IonMenu>
        <IonRouterOutlet>
          <Redirect path="/" exact to="/apps" />
          <Route path="/apps" component={RootApp} />
          <Route path="/caa" component={MainApp} />
          <Route path="/tham-dinh" component={MainApp} />
        </IonRouterOutlet>
      </IonReactRouter>
    </IonApp>
  )
};

// const IonicApp: React.FC<IonicAppProps> = ({
//   darkMode,
//   schedule,
//   setIsLoggedIn,
//   setUsername,
//   loadConfData,
//   loadUserData,
// }) => {
//   useEffect(() => {
//     loadUserData();
//     loadConfData();
//     // eslint-disable-next-line
//   }, []);

//   return schedule.groups.length === 0 ? (
//     <div></div>
//   ) : (
//     <IonApp className={`${darkMode ? 'ion-palette-dark' : ''}`}>
//       <IonReactRouter>
//         <IonSplitPane contentId="main">
//           <Menu />
//           <IonRouterOutlet id="main">
//             {/*
//                 We use IonRoute here to keep the tabs state intact,
//                 which makes transitions between tabs and non tab pages smooth
//                 */}
//             <Route path="/tabs" render={() => <MainTabs />} />
//             <Route path="/account" component={Account} />
//             <Route path="/login" component={Login} />
//             <Route path="/signup" component={Signup} />
//             <Route path="/support" component={Support} />
//             <Route path="/tutorial" component={Tutorial} />
//             <Route
//               path="/logout"
//               render={() => {
//                 return (
//                   <RedirectToLogin
//                     setIsLoggedIn={setIsLoggedIn}
//                     setUsername={setUsername}
//                   />
//                 );
//               }}
//             />
//             <Route path="/" component={HomeOrTutorial} exact />
//           </IonRouterOutlet>
//         </IonSplitPane>
//       </IonReactRouter>
//     </IonApp>
//   );
// };

export default App;

const IonicAppConnected = connect<{}, StateProps, DispatchProps>({
  mapStateToProps: (state) => ({
    darkMode: state.user.darkMode,
    schedule: state.data.schedule,
  }),
  mapDispatchToProps: {
    loadConfData,
    loadUserData,
    setIsLoggedIn,
    setUsername,
  },
  component: IonicApp,
});
