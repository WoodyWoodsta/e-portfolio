// site container

Polymer({
  is: 'site-container',

  listeners: {
    'iron-activate': 'onIronActivate',
    'site-activate': 'onSiteActivate'
  },

  onSiteActivate(e) {
    console.log(e);
  },
  
  onIronActivate(e) {
    this.getContentChildNodes()[3].pageSelected = e.detail.selected;
  }
});
