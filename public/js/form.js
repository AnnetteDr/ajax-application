$(document).ready(function() {

    //Rerender elements after server response
    const ul = $("#group-list");
    const rerender = (groupList) => {
        let li = '';

        groupList.map((student) => {        
            li += `<li data-id="${student.id}">
                <div class="student-name">
                    <p>${student.name}</p>
                </div>
                <div class="student-surname">
                    <p>${student.surname}</p>
                </div>
                <div class="button-container">
                    <div class="delete-btn-container">
                          
                        <a href="/" class="btn delete-btn" data-id="${student.id}">Delete</a>
                  
                    </div>
                    <div>
                        <button class="btn edit-btn" data-id="${student.id}" data-name="${student.name}" data-surname="${student.surname}">Edit</button>
                    </div>
                </div>
                </li>`;
        });

        ul.html(li);
    };

    //PUT --> Edit Student    
    const formEdit = $("#editForm");
    const modal = $("#modal-box")[0];

    formEdit.submit((event) => {
        event.preventDefault();

        let newName = $('#editName').val();
        let newSurname = $('#editSurname').val();
        let id = formEdit.attr('data-id');
        let url = formEdit.attr('action');

        if (newName === '') {
            newName = formEdit.attr('data-name');
        }  

        if (newSurname === '') {
            newSurname = formEdit.attr('data-surname');
        }   

        $.ajax({
            url,
            type: "PUT",
            data: {id, newName, newSurname},
        }).done((data) => {
            rerender(data);
            modal.style.display = "none"; 
            $("#editForm")[0].reset();         
        });
    });

    //POST --> Add Student
    const formAdd = $("#addForm");
        
    formAdd.submit((event) => {
        event.preventDefault();

        let liArray = document.querySelectorAll('li');
        let name = $('#addName').val();
        let surname = $('#addSurname').val();
        let id =  +liArray[liArray.length-1].dataset.id + 1;
        let url = formEdit.attr('action');
        
        $.ajax({
            url,
            type: "POST",
            data: {id, name, surname},
        }).done((data) => {
            rerender(data);
            $("#addForm")[0].reset();
        });       
    });

    //DELETE --> Delete Student
    // let formDelete = $(".deleteForm");
    // console.log(formDelete);
       
    $(document).on("click", ".delete-btn", (event) => {
        event.preventDefault();

        let id = $(event.target).attr('data-id');
        let url = $(event.target).attr('href');
        console.log(id);
        console.log(url);

        $.ajax({
            url,
            type: "DELETE",
            data: {id},
        }).done((data) => {
            rerender(data);
            console.log(data);
            
        });       
    });
});