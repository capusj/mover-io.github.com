$(document).ready(function() { 

	$('[data-toggle="popover"]').popover();
	$('.collapse').collapse();

	$('#pricing-type, #pricing-source, #pricing-destination, #pricing-users, #pricing-gb').on('change', function() {
		var users = $('#pricing-users');
		var numUsers = Number(users.val());
		var gb = $('#pricing-gb');
		var extraData = Number(gb.val());
		var type = $('#pricing-type').val();
		var source = $('#pricing-source').val();
		var destination = $('#pricing-destination').val();
		var unitPrice;
		var includedData;
		var includedDataPerUser;
		var total;
		var enterprise = source == "enterprise" || destination == "enterprise";
		var premium = source != "enterprise" && destination != "enterprise";
		var free = source == "free" && destination == "free";

		if (type == "migrate") {
			if (enterprise) {
				$('#pricing-users-wrap').removeAttr('hidden');
				unitPrice = 20;
				includedDataPerUser = 20;
				includedData = numUsers * includedDataPerUser;
				extraData = Math.max(0, extraData - includedData);
				users.attr("min","1");
				total = (numUsers * unitPrice) + extraData;
				total = "Total one-time cost: $" + total;
			}
			if (premium) {
				$('#pricing-users-wrap').attr('hidden','hidden');
				unitPrice = 20;
				total = Math.max(unitPrice, extraData);
				total = "Total one-time cost: $" + total;
			}
			if (free) {
				total = "$0, this is free!";
			}
			$('#data-monthly').attr('hidden','hidden');


		} else if (type == "backup") {
			if (enterprise) {
				$('#pricing-users-wrap').removeAttr('hidden');
				unitPrice = 4;
				includedDataPerUser = 3;
				includedData = Math.max(5, numUsers) * includedDataPerUser;
				extraData = Math.max(0, extraData - includedData);
				if (numUsers < 5) {
					numUsers = 5;
					users.attr("min","5").val("5");
				}
				total = (numUsers * unitPrice) + extraData;
				total = "First month: $" + total;
			}
			if (premium) {
				$('#pricing-users-wrap').attr('hidden','hidden');
				unitPrice = 20;
				total = Math.max(unitPrice, extraData);
				total = "Total monthly cost: $" + total;
			}
			if (free) {
				total = "$0, this is free!";
			}
			$('#data-monthly').removeAttr('hidden');
		}

		$('#pricing-total').text(total);

	  if (numUsers > 100 || extraData > 1000) {
	  	$('#bulk-rate-cta').removeAttr('hidden');
	  } else {
	  	$('#bulk-rate-cta').attr('hidden','hidden');
	  }
	});

	// $('.about-card-columns').each(function(){
 //    var $divArr = $(this).children('.card');
 //    $divArr.sort(function(a,b){
 //          var temp = parseInt( Math.random()*10 );
 //          var isOddOrEven = temp%2;
 //          var isPosOrNeg = temp>5 ? 1 : -1;
 //          return( isOddOrEven*isPosOrNeg );
 //    })
 //    .appendTo($(this));            
 //  });

	var cards = $(".card-random-order");
	for(var i = 0; i < cards.length; i++){
	    var target = Math.floor(Math.random() * cards.length -1) + 1;
	    var target2 = Math.floor(Math.random() * cards.length -1) +1;
	    cards.eq(target).before(cards.eq(target2));
	}

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
