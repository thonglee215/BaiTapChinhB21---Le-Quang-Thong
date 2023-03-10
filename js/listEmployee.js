function EmployeeArray(array) {
    this.empArr = [];

    this.arrAdd = function (emp) {
        this.empArr.push(emp);
    };

    this.empFind = function (acc) {
        var find = -1;
        find = this.empArr.findIndex(function (emp) {
            return emp.acc == acc;
        })
        return find;
    }

    this.empDel = function (acc) {
        var index = this.empFind(acc);
        if (index != -1) {
            this.empArr.splice(index, 1);
        }
    }

    this.updateEmp = function (emp) {
        var index = this.empFind(emp.acc)
        if (index != -1) {
            this.empArr[index] = emp;
        }
    }
    
}


EmployeeArray.prototype.searchRank = function (keyword) {
    var newArr = [];
    var keywordLowerCase = keyword.toLowerCase();
    keywordLowerCase.replace(/\s/g,"");
    employeeList.empArr.map(function (emp) {
        console.log(emp.rank);
        var findEmp = emp.rank.toLowerCase();
        findEmp.replace(/\s/g,"");
        if (findEmp.indexOf(keywordLowerCase) > -1) {
            newArr.push(emp);
        }
    })
    return newArr;
}