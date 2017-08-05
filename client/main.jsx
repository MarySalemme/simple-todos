import React from 'react';
import { Meteor } from 'meteor/meteor';
import { render } from 'react-dom';

import App from '../imports/ui/App.jsx';


// This code loads the App and Task components and renders them into the #render-target html element.
Meteor.startup(() =>{
  render(<App />, document.getElementById('render-target'));
});
