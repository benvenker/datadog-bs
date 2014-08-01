Template.sidebarLeft.rendered = function() {
  $('.ui.left.sidebar').first()
  .sidebar('attach events', '.left.toggle.button')
;
  $('.left.toggle.button')
    .removeClass('disabled')
  ;

  $('.ui.left.sidebar').on("click").removeClass('open');
}
