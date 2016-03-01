// site container

Polymer({
  is: 'site-container',

  listeners: {
    'iron-activate': 'onIronActivate',
    'site-activate': 'onSiteActivate'
  },

  onSiteActivate: function(e) {
    console.log(e);
  },

  onIronActivate: function(e) {
    this.getContentChildNodes()[3].pageSelected = e.detail.selected;
  }
});
