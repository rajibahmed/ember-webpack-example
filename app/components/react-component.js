import Ember from 'ember';
import React from 'react';
import ReactDOM from 'react-dom';

let { get } = Ember;

class Hello extends React.Component {
  render() {
    return React.createElement('div', null, `Hello ${this.props.toWhat}`);
  }
}

const ReactComponent = Ember.Component.extend({
  didRender: function() {
    ReactDOM.render( React.createElement(
      Hello, {toWhat: 'World'}, null
      ), get(this, 'element'));
  },

  willDestroyElement: function() {
    ReactDOM.unmountComponentAtNode(get(this, 'element'));
  }
});

export default ReactComponent;
