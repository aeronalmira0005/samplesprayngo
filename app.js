$(".btn img").click(function() {

  var x = $(this).attr('src');

  openModal(x);

 });

var dialog = document.getElementById("dialog");

function openModal(image) {

      $("#dialog img").attr("src",image);
      dialog.showModal();
}

function closeModal() {
    dialog.close();
}
