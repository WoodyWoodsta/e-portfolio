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

  attached: function() {
    window.addEventListener('scroll', this._onScroll.bind(this));
    this._updateHeaderBarStyle();
    this._updateHeaderContentStyle();
  },

  detached: function() {
    window.removeEventListener('scroll', this._onScroll.bind(this));
  },

  _updateHeights: function() {
    this._headerBarHeight = this.$.siteHeaderBar.getBoundingClientRect().height;
    this._headerHeight = this.getBoundingClientRect().height;
  },

  _updateHeaderContentStyle: function() {
    this._updateHeights();

    this.transform(`translateY(${window.scrollY/3}px)`, this.$.headerContent);
    this.$.headerContent.style.opacity = `${(this._headerHeight - window.scrollY*1.2)/this._headerHeight}`;
  },

  _updateHeaderBarStyle: function() {
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

  _onScroll: function(e) {
    this._updateHeaderContentStyle();
    this._updateHeaderBarStyle();
  }
});
