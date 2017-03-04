$(document).ready(function() {
  let loading = $('.loading');
  let mask = $('.mask');
  let instroduction = $('.instroduction')
  let skill = $('.skill');
  let body = $('body');
  let win = $(window);
  let s0 = $('#entry-template').html();
  let s1 = $('#easyui-ul').html();
  let uilist, docHeight, scrollHeight, winHeight;
  getTemplateData($('.skill'), s0, skillData);
  getTemplateData($('.easyui-content'), s1, easyuilists);


  function getTemplateData(container, source, context) {
    let template = Handlebars.compile(source)
    let html = template(context);
    container.html(html);
  }
  uilist = $('.easyui-list');
  body.css('overflow-y', 'hidden');
  win.on('load resize', function() {

    docHeight = $(document).outerHeight();
    scrollHeight = $('html,body').scrollTop();
    winHeight = $(window).outerHeight();
    mask.css({height: docHeight});
    loading.css({top:  scrollHeight + (winHeight / 2) });
  });

  let loader = setTimeout(function(){

    loading.css('transform', 'rotate(360deg)');

    let scaler = setTimeout(function() {
      loading.css('transform', 'rotate(0deg)');
      loading.fadeOut(1000);
      clearTimeout(scaler);
      let masker = setTimeout(function() {
          mask.fadeOut(600);
          let skiller = setTimeout(function() {
            instroduction.animate({opacity: 1}, { duration: 600, complete: function() {

              skill.animate({opacity: 1} , {duration: 600, complete: function() {

                uilist.each(function(index) {
                  let _this = $(this);
                  if(index < 4) {
                      $(this).delay(300*(index+1)).animate({opacity: 1},{duration: 600});
                      $('body').css('overflow-y', 'auto');
                  }else{
                    if((uilist[4].getBoundingClientRect()).top <= winHeight){
                      _this.delay(300*(index+1)).animate({opacity: 1}, {duration: 600});
                    }else{
                      $(document).on('scroll', function() {
                        let getBoundClent = uilist[4].getBoundingClientRect();

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
  }, 1000);
});
