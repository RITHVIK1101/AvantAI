import * as serviceWorkerRegistration from "./serviceWorkerRegistration";

// Register the service worker
serviceWorkerRegistration.register();

export function register() {
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker
      .register('/service-worker.js')
      .then((registration) => {
        console.log('Service Worker registered with scope:', registration.scope);
      })
      .catch((error) => {
        console.log('Service Worker registration failed:', error);
      });
  }
}
