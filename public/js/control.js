$(document).ready( () => {

  const modal = $("#modal-box")[0];
  const formEdit = $("#editForm");

  $(document).on("click", ".edit-btn", () => {
    modal.style.display = "block";
   
    // Get data-id of edit-button and assign it to edit-form 
    let studentId = $(event.target).attr('data-id'); 
    formEdit.attr('data-id', studentId);

    // Get data-name of edit-button and assign it to edit-form
    // to use it instead of empty input
    let studentName = $(event.target).attr('data-name'); 
    formEdit.attr('data-name', studentName);
    $("#editName").attr('value', studentName);
    
    // Get data-surname of edit-button and assign it to edit-form
    // to use it instead of empty input
    let studentSurname = $(event.target).attr('data-surname'); 
    formEdit.attr('data-surname', studentSurname);
    $("#editSurname").attr('value', studentSurname);
  });

  // close modal-box --> click close-button or click outside modal-box
  const closeBtn = document.getElementsByClassName("close")[0];
  closeBtn.onclick = () => {
    modal.style.display = "none";
  }

  window.onclick = (event) => {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  }
   
});