class Alert {

    static danger(dangerMsg){
        return `<h6 class="alert alert-danger d-flex justify-content-between mt-3">${dangerMsg} <button class="btn-close" data-bs-dismiss="alert"></button> </h6>`;
    }

    static warning(warningMsg){
        return `<h6 class="alert alert-warning d-flex justify-content-between mt-3">${warningMsg} <button class="btn-close" data-bs-dismiss="alert"></button> </h6>`;
    }

    static success(successMsg){
        return `<h6 class="alert alert-success d-flex justify-content-between mt-3">${successMsg} <button class="btn-close" data-bs-dismiss="alert"></button> </h6>`;
    }

}


export default Alert;

