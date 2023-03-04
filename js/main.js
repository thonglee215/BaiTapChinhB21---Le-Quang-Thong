const employeeList = new EmployeeArray();
const validation = new Validation();
function getEle(id) {
    return document.getElementById(id);
}

function empAdd() {
    var acc = getEle("tknv").value;
    var fullName = getEle("name").value;
    var email = getEle("email").value;
    var pass = getEle("password").value;
    var day = getEle("datepicker").value;
    var salary = getEle("luongCB").value;
    var position = getEle("chucvu").value;
    var hour = getEle("gioLam").value;

    //VALIDATION 
    var isValid = true;

    isValid = validation.checkEmpty(acc, "tbTKNV", "Tài khoảng nhân viên không được để trống");
    isValid = validation.checkEmpty(fullName, "tbTen", "Tên nhân viên không được để trống");
    isValid = validation.checkEmpty(email, "tbEmail", "Email nhân viên không được để trống");
    isValid = validation.checkEmpty(pass, "tbMatKhau", "Mật khẩu nhân viên không được để trống");
    isValid = validation.checkEmpty(day, "tbNgay", "Ngày làm việc nhân viên không được để trống");
    isValid = validation.checkEmpty(salary, "tbLuongCB", "Lương cơ bản nhân viên không được để trống");
    isValid = validation.checkEmpty(position, "tbChucVu", "Chức vụ không hợp lệ");
    isValid = validation.checkEmpty(hour, "tbGiolam", "Giờ làm việc nhân viên không được để trống");

    if (isValid){
        var emp = new Employee(acc, fullName, email, pass, day, salary, position, hour);
        employeeList.arrAdd(emp);
        emp.totalSalary();
        emp.rank();
        showList(employeeList.empArr);
        setLocal(employeeList.empArr);
    }

};
getEle("btnThemNV").onclick = empAdd;

function showList(array) {
    var content = "";
    array.map(function (emp, index) {
        var trEle = `<tr>
                <td>${emp.acc}</td> 
                <td>${emp.fullName}</td>
                <td>${emp.email}</td>
                <td>${emp.day}</td>
                <td>${emp.position}</td>
                <td>${emp.total}</td>
                <td>${emp.rank}</td>
                <td>
                    <button onclick="check('${emp.acc}')" class= "btn btn-info" id= "open">Xem</button>
                    <button onclick="del('${emp.acc}')" class= "btn btn-danger" >Xóa</button>
                </td>
            </tr>`
        content += trEle;
    })

    getEle("tableDanhSach").innerHTML = content;

};
getEle("btnThemNV").onlick = showList;

function setLocal(array) {
    localStorage.setItem("employeeList", JSON.stringify(array))
};

function getLocal() {
    employeeList.empArr = JSON.parse(localStorage.getItem("employeeList"));
    showList(employeeList.empArr);
}
getLocal();


function del(acc) {

    employeeList.empDel(acc);
    setLocal(employeeList.empArr);
    getLocal(employeeList.empArr);
}

function check(acc) {
    var index = employeeList.empFind(acc);
    if (index != -1) {
        getEle("tknv").value = employeeList.empArr[index].acc;
        getEle("tknv").disabled = true;
        getEle("name").value = employeeList.empArr[index].fullName;
        getEle("email").value = employeeList.empArr[index].email;
        getEle("password").value = employeeList.empArr[index].pass;
        getEle("datepicker").value = employeeList.empArr[index].day;
        getEle("luongCB").value = employeeList.empArr[index].salary;
        getEle("chucvu").value = employeeList.empArr[index].position;
        getEle("gioLam").value = employeeList.empArr[index].hour;
    }
}

function update() {
    var acc = getEle("tknv").value;
    var fullName = getEle("name").value;
    var email = getEle("email").value;
    var pass = getEle("password").value;
    var day = getEle("datepicker").value;
    var salary = getEle("luongCB").value;
    var position = getEle("chucvu").value;
    var hour = getEle("gioLam").value;
    var emp = new Employee(acc, fullName, email, pass, day, salary, position, hour);
    emp.totalSalary();
    emp.rank();
    employeeList.updateEmp(emp);
    setLocal(employeeList.empArr);
    getLocal(employeeList.empArr);

}
getEle("btnCapNhat").onclick = update;



