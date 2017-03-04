$(document).ready(function() {
  var loading = $('.loading');
  var mask = $('.mask');
  var instroduction = $('.instroduction')
  var skill = $('.skill');
  var body = $('body');
  var win = $(window);
  var s0 = $('#entry-template').html();
  var s1 = $('#easyui-ul').html();
  var uilist, docHeight, scrollHeight, winHeight;
  getTemplateData($('.skill'), s0, skillData);
  getTemplateData($('.easyui-content'), s1, easyuilists);


  function getTemplateData(container, source, context) {
    var template = Handlebars.compile(source)
    var html = template(context);
    container.html(html);

  }
  uilist = $('.easyui-list');
  body.css({'overflow-y': 'hidden', 'overflow-x': 'hidden'});
  win.on('load resize', function() {

    docHeight = $(document).outerHeight();
    scrollHeight = $('html,body').scrollTop();
    winHeight = $(window).outerHeight();
    mask.css({height: docHeight});
    loading.css({top:  scrollHeight + (winHeight / 2) });
  });

  var loader = setTimeout(function(){

    loading.css('transform', 'rotate(360deg)');

    var scaler = setTimeout(function() {
      loading.css('transform', 'rotate(0deg)');
      loading.fadeOut(1000);
      clearTimeout(scaler);
      var masker = setTimeout(function() {
          mask.fadeOut(600);
          mask.remove();
          loading.remove();
          var skiller = setTimeout(function() {

            instroduction.animate({opacity: 1}, { duration: 600, complete: function() {

              skill.animate({opacity: 1} , {duration: 600, complete: function() {

                uilist.each(function(index) {
                  var _this = $(this);
                  if(index < 4) {
                      $(this).delay(300*(index+1)).animate({opacity: 1},{duration: 600});
                      $('body').css('overflow-y', 'auto');
                  }else{
                    if((uilist[4].getBoundingClientRect()).top <= winHeight){
                      _this.delay(300*(index+1)).animate({opacity: 1}, {duration: 600});
                    }else{
                      $(document).on('scroll', function() {
                        var getBoundClent = uilist[4].getBoundingClientRect();

                        if(getBoundClent.top <= winHeight){
                            _this.delay(180*(index+1)).animate({opacity: 1}, {duration: 600});
                        }
                      });
                    }
                  }
                });
              }});
            }});
            clearTimeout(skiller);
          }, 300);
          clearTimeout(masker);
      }, 2000);
      clearTimeout(loader);
    }, 2000);
  }, 3000);
});
