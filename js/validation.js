function Validation() {
    // Phương thức kiểm tra
    // input: valueInput, spanId, message
    // output: true, false
    this.checkEmpty = function (valueInput, spanId, message) {
        if (valueInput == "") {
            // Không hợp lệ
            document.getElementById(spanId).style.display = "block";
            document.getElementById(spanId).innerHTML = message;
            return false;
        }
        document.getElementById(spanId).style.display = "none";
        document.getElementById(spanId).innerHTML = "";
        return true;
    }

    this.checkDup = function (valueInput, spanId, message, array) {
        var isExist = false;
        isExist = array.some(function (emp) {
            return valueInput === emp.acc;
        });
        if (isExist) {
            document.getElementById(spanId).style.display = "block";
            document.getElementById(spanId).innerHTML = message;
            return false;
        } else {
            document.getElementById(spanId).style.display = "none";
            document.getElementById(spanId).innerHTML = "";
            return true;
        }
    }

    this.checkAccChar = function (valueInput, spanId, message) {
        var pattern = /^(?=.*\d)(?=.*[A-Z]).{4,6}$/;
        if (valueInput.match(pattern)) {
            document.getElementById(spanId).style.display = "none";
            document.getElementById(spanId).innerHTML = "";
            return true;
        } else {
            document.getElementById(spanId).style.display = "block";
            document.getElementById(spanId).innerHTML = message;
            return false;
        }
    }

    this.checkName = function (valueInput, spanId, message) {
        var pattern = /^[a-z A-Z_ÀÁÂÃÈÉÊẾÌÍÒÓÔÕÙÚĂĐĨŨƠàáâãèéêìíòóôõùúăđĩũơƯĂẠẢẤẦẨẪẬẮẰẲẴẶẸẺẼỀỀỂưăạảấầẩẫậắằẳẵặẹẻẽề ềểếỄỆỈỊỌỎỐỒỔỖỘỚỜỞỠỢỤỦỨỪễệỉịọỏốồổỗộớờởỡợụủứừỬỮỰỲỴÝỶỸửữựỳỵỷỹý\\s]+$/;
        if (valueInput.match(pattern)) {
            document.getElementById(spanId).style.display = "none";
            document.getElementById(spanId).innerHTML = "";
            return true;
        } else {
            document.getElementById(spanId).style.display = "block";
            document.getElementById(spanId).innerHTML = message;
            return false;
        }
    }

    this.checkMail = function (valueInput, spanId, message) {
        var pattern = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        if (valueInput.match(pattern)) {
            document.getElementById(spanId).style.display = "none";
            document.getElementById(spanId).innerHTML = "";
            return true;
        } else {
            document.getElementById(spanId).style.display = "block";
            document.getElementById(spanId).innerHTML = message;
            return false;
        }
    }

    this.checkPass = function (valueInput, spanId, message) {
        var pattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{6,10}$/;
        if (valueInput.match(pattern)) {
            document.getElementById(spanId).style.display = "none";
            document.getElementById(spanId).innerHTML = "";
            return true;
        } else {
            document.getElementById(spanId).style.display = "block";
            document.getElementById(spanId).innerHTML = message;
            return false;
        }
    }

    this.checkSalary = function (valueInput, spanId, message) {
        var pattern = /^(\d{1,9}(\.\d{1,9})?)$/;
        if (valueInput.match(pattern) && valueInput >= 1000000 && valueInput <= 20000000) {
            document.getElementById(spanId).style.display = "none";
            document.getElementById(spanId).innerHTML = "";
            return true;
        } else {
            document.getElementById(spanId).style.display = "block";
            document.getElementById(spanId).innerHTML = message;
            return false;
        }
    }

    this.checkHour = function (valueInput, spanId, message) {
        var pattern = /^(\d{1,9}(\.\d{1,9})?)$/;
        if (valueInput.match(pattern) && valueInput >= 80 && valueInput <= 200) {
            document.getElementById(spanId).style.display = "none";
            document.getElementById(spanId).innerHTML = "";
            return true;
        } else {
            document.getElementById(spanId).style.display = "block";
            document.getElementById(spanId).innerHTML = message;
            return false;
        }
    }

    this.checkSelected = function (selectId, spanId, message) {
        var indexOption = document.getElementById("chucvu").selectedIndex;
        if (indexOption != 0) {
            document.getElementById(spanId).style.display = "none";
            document.getElementById(spanId).innerHTML = "";
            return true;
        } else {
            document.getElementById(spanId).style.display = "block";
            document.getElementById(spanId).innerHTML = message;
            return false;
        }
    }
}