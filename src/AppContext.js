import React from 'react';

const AppContext = React.createContext({
   places: [],
   users: [],
   collectionList: [],
   
   showSignupForm: false,   
   showModal: () => {},
   hideModal: () => {},

   isSignedIn: "",

   isMenuActive: false,

   createUser: () => {},
   
   addPlace: () => {},

   updateSearchResults: () => {}
})

export default AppContext