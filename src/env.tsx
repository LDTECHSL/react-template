declare global {
    interface Window {
      env: {
        BASE_URL: string;
        VERSION: string;
      }
    }
  }
  
  const env = {
    BASE_URL: window.env.BASE_URL,
    VERSION: window.env.VERSION
  };
  
  export default env;
