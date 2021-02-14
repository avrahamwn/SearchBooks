export const loadState = () => {
    try {
      const serializedState = localStorage.getItem('state');
      if (serializedState === null) {
        return { wishList: [], username: '' };
      }
      return JSON.parse(serializedState);
    } catch (err) {
      return { wishList: [], username: '' };
    }
  }; 

  export const saveState = (state) => {
    try {
      const serializedState = JSON.stringify(state);
      localStorage.setItem('state', serializedState);
    } catch {
      // ignore write errors
    }
  };