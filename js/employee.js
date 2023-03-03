function Employee(acc,fullName,email,pass,day,salary,type,hour ){
    this.acc = acc;
    this.fullName = fullName;
    this.email = email;
    this.pass = pass;
    this.day = day;
    this.salary = salary;
    this.type = type;
    this.hour = hour;
    this.total = 0;
    this.rank = "";

    this.totalSalary = function (){
        if (this.type == "Sếp") {
            this.total = this.salary*3;
        } else if (this.type == "Trưởng phòng") {
            this.total = this.salary*2;
        } else if (this.type == "Nhân viên") {
            this.total = this.salary;
        }
    }

    this.rank = function (){
        if (this.hour >= 192) {
            this.rank = "Xuất sắc";
        } else if (this.hour >= 176) {
            this.rank = "Giỏi";
        } else if (this.hour >= 160) {
            this.rank = "Khá";
        } else if (this.hour < 160) {
            this.rank = "Trung bình";
        }
    }

   

}