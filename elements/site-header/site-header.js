// site header

Polymer({
  is: 'site-header',

  properties: {
    _headerBarHeight: {
      type: Number
    },

    _headerHeight: {
      type: Number
    }
  },

  attached() {
    window.addEventListener('scroll', this._onScroll.bind(this));
    this._updateHeaderBarStyle();
    this._updateHeaderContentStyle();
  },

  detached() {
    window.removeEventListener('scroll', this._onScroll.bind(this));
  },

  _updateHeights() {
    this._headerBarHeight = this.$.siteHeaderBar.getBoundingClientRect().height;
    this._headerHeight = this.getBoundingClientRect().height;
  },

  _updateHeaderContentStyle() {
    this._updateHeights();

    this.transform(`translateY(${window.scrollY/3}px)`, this.$.headerContent);
    this.$.headerContent.style.opacity = `${(window.innerHeight - window.scrollY*1.2)/window.innerHeight}`;
  },

  _updateHeaderBarStyle() {
    var headerBarBottom = this.getBoundingClientRect().bottom;
    var pos = headerBarBottom - this._headerBarHeight;
    this._updateHeights();

    this.$.siteHeaderBar.style.opacity = `${1 - 3*((this._headerHeight - this._headerBarHeight) - window.scrollY)/(this._headerHeight - this._headerBarHeight)}`;

    this.$.siteHeaderBar.positionTop = (pos <= 0) ? 0 : pos;
  },

  _onScroll(e) {
    this._updateHeaderContentStyle();
    this._updateHeaderBarStyle();
  }
});
