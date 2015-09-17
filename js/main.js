$(document).ready(function() { 

	var __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; };

	  var FileCounter = (function() {
      /* Requires Sugarjs */
	    function FileCounter(baseElement) {
	      this.step = __bind(this.step, this);
	      var _this = this;
	      this.view = $(baseElement);
	      this.viewBottomPosition = this.view.offset().top + this.view.outerHeight(true);
	      this.animating = true;
	      this.ratePerSecond = parseFloat(this.view.attr('data-rate'));
	      this.startFiles = parseFloat(this.view.html().stripTags().remove(/\ /g));
	      this.startTime = parseInt(this.view.attr('data-updated-at'));
	      this.step.every(1000 / 5);
	      $(window).scroll(function(event) {
	        var position = $(document).scrollTop();
	        $('.container-count').each(function() {
	          if (verge.inViewport(this, 100)) {
	            _this.animating = true;
	          } else {
	            _this.animating = false;
	          }
	        });
	      });
	    }

	    FileCounter.prototype.step = function() {
	      var characters, count, elapsed, now;
	      now = Date.now() / 1000;
	      elapsed = now - this.startTime;
	      count = this.startFiles + elapsed * this.ratePerSecond;
	      if (this.animating) {
	        characters = count.format(0, ' ').split('');
	        return this.view.html(characters.map(function(c) {
	          return "<span>" + (c.trim()) + "</span>";
	        }));
	      }
	    };

	    return FileCounter;

	  })();

	  $('.file-counter').toArray().forEach(function(counterView) {
	    return new FileCounter(counterView);
	  });

});
