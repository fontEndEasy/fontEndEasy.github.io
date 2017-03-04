$(document).ready(function() {
  let loading = $('.loading');
  /*setTimeout(function() {
    $('#skill').addClass('skill-animate');
  }, 300);*/

  function getTemplateData(container, source, context) {
    let template = Handlebars.compile(source)
    let html = template(context);
    container.html(html);
  }

  let s0 = $('#entry-template').html();
  // let s1 = $('#easyui-ul').html();
  getTemplateData($('.skill'), s0, skillData);
  // getTemplateData($('.easyui-content'), s1, easyuilists);
  var loader = setTimeout(function(){
    $('.loading').css('transform', 'rotate(360deg)');

    let scaler = setTimeout(function() {
      $('.loading').css('transform', 'rotate(0deg)');
      $('.loading').fadeOut(1000);
      clearTimeout(scaler);
      let masker = setTimeout(function() {
          $('.mask').fadeOut(800);
          let skiller = setTimeout(function() {
            $('.instroduction').animate({opacity: 1}, { duration: 600, complete: function() {

              $('.skill').animate({opacity: 1} , {duration: 600});
            }});
            clearTimeout(skiller);
          }, 1000);
          clearTimeout(masker);
      }, 2000);
      clearTimeout(loader);
    }, 2000);
  }, 5000);

});
