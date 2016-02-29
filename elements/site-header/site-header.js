// site header

Polymer({
  is: 'site-header',

  properties: {
    _headerBarHeight: {
      type: Number
    },

    _headerHeight: {
      type: Number
    },

    pageSelected: {
      type: String,
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

    var toolbar = this.$.siteHeaderBar.$.siteHeaderToolbar;
    var image = this.$.siteHeaderBar.$.imageWrapper;
    var title = this.$.siteHeaderBar.$.siteTitle;

    var opacity = 1 - 3*((this._headerHeight - this._headerBarHeight) - window.scrollY)/(this._headerHeight - this._headerBarHeight);

    image.style.opacity = title.style.opacity = `${opacity}`;
    toolbar.style.background = `rgba(63, 81, 181, ${opacity})`;

    // this.$.siteHeaderBar.positionTop = (pos <= 0) ? 0 : pos;
  },

  _onScroll(e) {
    this._updateHeaderContentStyle();
    this._updateHeaderBarStyle();
  }
});
