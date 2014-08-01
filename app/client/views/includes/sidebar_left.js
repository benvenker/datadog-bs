Template.sidebarLeft.rendered = function() {
  $('.ui.sidebar').first()
  .sidebar('attach events', '.toggle.button')
;
  $('.toggle.button')
    .removeClass('disabled')
  ;
}
