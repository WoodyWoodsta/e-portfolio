Polymer({
  is: 'site-header-bar',

  properties: {
    positionTop: {
      type: Number,
      value: 0,
      observer: '_onPositionTopChanged'
    }
  },

  _onPositionTopChanged(newValue) {
    this.style.top = `${newValue}px`;
  }
});
