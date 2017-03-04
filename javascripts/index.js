$(document).ready(function() {
  let loading = $('.loading');
  
  $('body').css('overflow-y', 'hidden');
  function getTemplateData(container, source, context) {
    let template = Handlebars.compile(source)
    let html = template(context);
    container.html(html);
  }

  let s0 = $('#entry-template').html();
  let s1 = $('#easyui-ul').html();
  getTemplateData($('.skill'), s0, skillData);
  getTemplateData($('.easyui-content'), s1, easyuilists);
  var loader = setTimeout(function(){
    $('.loading').css('transform', 'rotate(360deg)');

    let scaler = setTimeout(function() {
      $('.loading').css('transform', 'rotate(0deg)');
      $('.loading').fadeOut(1000);
      clearTimeout(scaler);
      let masker = setTimeout(function() {
          $('.mask').fadeOut(600);
          let skiller = setTimeout(function() {
            $('.instroduction').animate({opacity: 1}, { duration: 600, complete: function() {

              $('.skill').animate({opacity: 1} , {duration: 600, complete: function() {

                $('.easyui-list').each(function(index) {
                  let _this = $(this);
                  if(index < 4) {
                      $(this).delay(300*(index+1)).animate({opacity: 1},{duration: 600});
                      $('body').css('overflow-y', 'auto');
                  }else{
                    $(document).on('scroll', function() {
                      let getBoundClent = $('.easyui-list')[4].getBoundingClientRect();
                      let getWinClent = $(window).height();
                      if(getBoundClent.top <= getWinClent){
                          _this.delay(300*(index+1)).animate({opacity: 1}, {duration: 600});
                      }
                    });
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
