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

  attached: function() {
    this.fire('iron-activate', {selected: 'homepage'});
  },

  onIronActivate: function(e) {
    var self = this.onIronActivate;

    console.log('Getting here');
    switch (e.detail.selected) {
      case 'homepage':
        this.titleText = 'me.e-portfolio.homepage';
        break;
      case 'cv':
        this.titleText = 'me.e-portfolio.cv';
        break;
      case 'social':
        this.titleText = 'me.e-portfolio.social';
        break;
      case 'nvp':
        this.titleText = 'me.e-portfolio.nvp';
        break;
      default:
    }

    if (self.hasLoaded) {
      window.EPPZScrollTo.scrollVerticalToElementById('siteContent', this.getBoundingClientRect().height);
    } else {
      self.hasLoaded = true;
    }
  },

  _onPositionTopChanged: function(newValue) {
    this.style.top = `${newValue}px`;
  }
});
