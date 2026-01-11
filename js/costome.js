
$(".toggle_button button").on("click", function(){
  $(".menu").addClass("active");
});
$(".clo_button button").on("click", function(){
  $(".menu").removeClass("active")
});





 $(document).ready(function() {

  function Countdown($el) {
    this.$el = $el;
    this.values = {
      hours: parseInt($el.find('.bloc-time.hours').attr('data-init-value')),
      minutes: parseInt($el.find('.bloc-time.min').attr('data-init-value')),
      seconds: parseInt($el.find('.bloc-time.sec').attr('data-init-value'))
    };
    this.total_seconds = this.values.hours * 3600 + this.values.minutes * 60 + this.values.seconds;
    this.$figures = {
      hours: $el.find('.bloc-time.hours .figure'),
      minutes: $el.find('.bloc-time.min .figure'),
      seconds: $el.find('.bloc-time.sec .figure')
    };
    this.start();
  }

  Countdown.prototype.start = function() {
    var that = this;
    setInterval(function() {
      if(that.total_seconds <= 0) return;

      that.total_seconds--;
      that.values.hours = Math.floor(that.total_seconds / 3600);
      that.values.minutes = Math.floor((that.total_seconds % 3600) / 60);
      that.values.seconds = that.total_seconds % 60;

      that.updateFigure(that.values.hours, that.$figures.hours);
      that.updateFigure(that.values.minutes, that.$figures.minutes);
      that.updateFigure(that.values.seconds, that.$figures.seconds);

    }, 1000);
  }

  Countdown.prototype.updateFigure = function(value, $el) {
    var valStr = String(value).padStart(2, '0');
    var digits = valStr.split('');

    $el.each(function(i){
      var $top = $(this).find('.top span');
      var $bottom = $(this).find('.bottom span');
      var $topBack = $(this).find('.top-back span');
      var $bottomBack = $(this).find('.bottom-back span');

      if($top.text() !== digits[i]){
        $topBack.text(digits[i]);
        $bottomBack.text(digits[i]);

        $(this).find('.top').addClass('flip-top');
        $(this).find('.bottom-back').addClass('flip-bottom');

        setTimeout(function(){
          $top.text(digits[i]);
          $bottom.text(digits[i]);
          $(this).find('.top').removeClass('flip-top');
          $(this).find('.bottom-back').removeClass('flip-bottom');
        }.bind(this), 600);
      }
    });
  }

  new Countdown($('.countdown'));
});






