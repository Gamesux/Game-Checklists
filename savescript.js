jQuery($ => {
  var arr = JSON.parse(localStorage.getItem('checked')) || [];
  arr.forEach(function(checked, i) {
    $('.box').eq(i).prop('checked', checked);
  });

  $(".box").click(() => {  
    var arr = $('.box').map((i, el) => el.checked).get();
    localStorage.setItem("checked", JSON.stringify(arr));
  });
});