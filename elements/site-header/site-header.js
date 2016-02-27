// site header

Polymer({
  is: 'site-header',

  properties: {
    _headerBarHeight: {
      type: Number
    }
  },

  attached() {
    window.addEventListener('scroll', this._onScroll.bind(this));
  },

  detached() {
    window.removeEventListener('scroll', this._onScroll.bind(this));
  },

  _updateHeaderContentStyle() {
    this.transform(`translateY(${window.scrollY/3}px)`, this.$.headerContent);
    this.$.headerContent.style.opacity = `${(window.innerHeight - window.scrollY*1.2)/window.innerHeight}`;
  },

  _updateHeaderBarStyle() {
    var headerBarBottom = this.getBoundingClientRect().bottom;
    this._headerBarHeight = this.$.siteHeaderBar.getBoundingClientRect().height;
    var pos = headerBarBottom - this._headerBarHeight;
    this.$.siteHeaderBar.style.opacity = `${1 - 3*((window.innerHeight - this._headerBarHeight) - window.scrollY)/(window.innerHeight - this._headerBarHeight)}`;

    this.$.siteHeaderBar.positionTop = (pos <= 0) ? 0 : pos;
  },

  _onScroll(e) {
    this._updateHeaderContentStyle();
    this._updateHeaderBarStyle();
  }
});
