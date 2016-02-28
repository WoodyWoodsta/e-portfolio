Polymer({
  is: 'site-header-bar',

  properties: {
    positionTop: {
      type: Number,
      value: 0,
      observer: '_onPositionTopChanged'
    },

    titleText: {
      type: String
    }
  },

  listeners: {
    'iron-activate': 'onIronActivate'
  },

  attached() {
    this.fire('iron-activate', {selected: 'homepage'});
  },

  onIronActivate(e) {
    console.log('Getting here');
    switch (e.detail.selected) {
      case 'homepage':
        this.titleText = `me.e-portfolio.homepage`;
        break;
      case 'cv':
        this.titleText = `me.e-portfolio.cv`;
        break;
      case 'social':
        this.titleText = `me.e-portfolio.social`;
        break;
      default:
    }
  },

  _onPositionTopChanged(newValue) {
    this.style.top = `${newValue}px`;
  }
});
