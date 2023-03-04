function Validation() {
    // Phương thức kiểm tra
    // input: valueInput, spanId, message
    // output: true, false
    this.checkEmpty = function (valueInput, spanid, message) {
        if (valueInput == "" || valueInput == "Chọn chức vụ") {
            // Không hợp lệ
            document.getElementById(spanid).style.display = "block";
            document.getElementById(spanid).innerHTML = message;
            return false;
        }
        document.getElementById(spanid).style.display = "none";
        document.getElementById(spanid).innerHTML = "";
        return true;
    }
}