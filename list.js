$(function(){
    var item = '';
    var $list = $('ul#sortable');
    var $listComplete = $('ul#complete');
  
    $('li').hide().each(function(index) {
    $(this).delay(150 * index).fadeIn(700);
    });

    $list.on('click', 'span.fa-check', function(){
      var $this = $(this).parent();
      item = $this.text();
        $this.remove();
        $listComplete.append('<li class=\"complete\">' + item + '<span class="fa fa-trash-o"></span><span class="fa fa-arrow-up"></span></li>').hide().fadeIn(300);
        updateCount();
    });
    
    $listComplete.on('click', 'span.fa-trash-o', function(){
      var $this = $(this).parent();
      $this.animate ({
      opacity: 0.0,
      paddingLeft: '+=180'
    }, 500, 'swing', function() {
      $this.remove();
    });
    });
    
    $listComplete.on('click', 'span.fa-arrow-up', function(){
      var $this = $(this).parent();
      item = $this.text();
      $this.remove();
      $list.prepend('<li>' + item + '<span class="fa fa-check"></span></li>').hide().fadeIn(300);
      updateCount();
    });
});