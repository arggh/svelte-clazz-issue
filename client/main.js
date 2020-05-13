import './main.html';
import { Meteor } from 'meteor/meteor';
import App from './App.svelte';


Meteor.startup(() => {
  const target = document.getElementById('app');

  const app = new App({
    target,
    props: {
      answer: 'YES!'
    }
  });
});
