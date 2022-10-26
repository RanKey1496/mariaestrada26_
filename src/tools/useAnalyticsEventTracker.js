import ReactGA from 'react-ga';

const useAnalyticsEventTracker = (category="Login") => {
    const eventTracker = (action = "test action", label = "test label") => {
      ReactGA.event({category, action, label});
    }
    return eventTracker;
  }
  export default useAnalyticsEventTracker;