define(["joshlib!ui/slidepanel","joshlib!vendor/underscore"], function(UISlidePanel,_) {

  var UITvSlidePanel = UISlidePanel.extend({

    showChildren:function(childrenId) {
      console.log(childrenId)
      this.activeId = childrenId;

      return UISlidePanel.prototype.showChildren.call(this, childrenId);
    },

    navFocus: function(origin) {
      UISlidePanel.prototype.navFocus.call(this, origin);

      this.children[this.activeId].navFocus(origin);
    },

    navBlur: function() {
      this.children[this.activeId].navBlur();

      UISlidePanel.prototype.navBlur.call(this);
    }/*,

    navLeft: function() {
      var offset = this.childrenOffsets[this.childrenId];
      if(this.offset > 0) {
        this.showChildren(this.childrenByOffset[offset - 1]);
      }
    }*/

  });

  return UITvSlidePanel;

});