$(document).ready(function() {

  setTimeout(function() {
    $('#skill').addClass('skill-animate');
  }, 300);
  
  function getTemplateData(container, source, context) {
    let template = Handlebars.compile(source)
    let html = template(context);
    // console.log(html);
    container.html(html);
  }

  let s0 = $('#entry-template').html();
  let s1 = $('#easyui-ul').html();
  getTemplateData($('.skill'), s0, skillData);
  getTemplateData($('.easyui-content'), s1, easyuilists);

});
