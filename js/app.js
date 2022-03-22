import Alert from "../src/Alert.js";
import Storage from "../src/Storage.js";

// get element
const staffAddForm = document.querySelector('#staffAddForm');
const uploadStaffData = document.querySelector('#uploadStaffData');

// staff add form from LS
staffAddForm.addEventListener('submit', function(event){

    event.preventDefault();
    const confirmation = document.querySelector('#confirmation');

    let formData = new FormData(event.target);
    let data = Object.fromEntries(formData.entries());
    
    let { nam, rollNo, location, photo } = data;

    if( nam == '' || rollNo == '' || location == '' ){
        confirmation.innerHTML = Alert.danger('All fields are required!');
    }else{
        Storage.set('student', data);
        staffAddForm.reset();
        allStaffData();
    }

});


allStaffData()
function allStaffData(){

    let data = Storage.get('student');
    let emptyToLoadData = '';

    data.map((staffDataItem, index) => {

        const { nam, rollNo, location, photo } = staffDataItem;

        emptyToLoadData += `
        
            <tr>
                <td>${ (index < 10) ? '0' + (index + 1) : index + 1 }</td>
                <td>${nam}</td>
                <td>${rollNo}</td>
                <td>${location}</td>
                <td><img style="width: 35px;height: 35px; object-fit: cover;border-radius: 50%;border: 2px solid rgb(255, 2, 247);" src="${(photo) ? photo : './img/defaultProfile.jpg'}" alt="Avatar"></td>
                <td>
                    <button id="view" class="btn btn-success btn-sm view" view-index="${index}" data-bs-toggle="modal" data-bs-target="#myModal"><i class="fas fa-eye"></i></button>
                    <button class="btn btn-primary btn-sm"><i class="fas fa-edit"></i></button>
                    <button class="btn btn-danger btn-sm"><i class="fas fa-trash"></i></button>
                </td>
            </tr>
        
        `;

    });

    uploadStaffData.innerHTML = emptyToLoadData;

}



