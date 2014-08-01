Template.sidebarRight.rendered = function() {
  $('.ui.right.sidebar').first()
  .sidebar('attach events', '.right.toggle.button')
;
  $('.right.toggle.button')
    .removeClass('disabled')
  ;
}
