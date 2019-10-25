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
   activeUserId: null,
   
   addPlace: () => {},

   updateSearchResults: () => {},

   buttonAddHide: false,
   buttonUndoHide: true 
})

export default AppContext