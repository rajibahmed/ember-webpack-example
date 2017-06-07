import Ember from 'ember';
import React from 'react';
import ReactDOM from 'react-dom';
import Capture from './capture/index.jsx';

let { get } = Ember;

const ReactComponent = Ember.Component.extend({
  didRender: function() {
    ReactDOM.render( React.createElement(
      Capture, { name : 'Rajib'}, null
      ), get(this, 'element'));
  },

  willDestroyElement: function() {
    ReactDOM.unmountComponentAtNode(get(this, 'element'));
  }
});

export default ReactComponent;
