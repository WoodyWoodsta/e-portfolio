Polymer({
  is: 'site-header-bar',

  properties: {
    positionTop: {
      type: Number,
      value: 0,
      observer: '_onPositionTopChanged'
    },
  },

  attached() {
    this.fire('iron-activate', {selected: 'homepage'});
  },

  _onPositionTopChanged(newValue) {
    this.style.top = `${newValue}px`;
  }
});
