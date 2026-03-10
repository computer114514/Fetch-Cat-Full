// let xiangmu:string[]=[];
// if(localStorage.getItem('xiangmu')){
//     xiangmu=JSON.parse(localStorage.getItem('xiangmu'));
// }
//这边的错误是因为localStorage.getItem('xiangmu') 的返回值在编译的时候就已经被判断是string|null了
// 而JSON.parse只能接收string
var _a, _b;
var addxiangmu = document.querySelector(".xiangmu button");
var projectArea = document.querySelector(".xiangmu div");
var xiangmu = JSON.parse((_a = localStorage.getItem('xiangmu')) !== null && _a !== void 0 ? _a : '[]');
// let zhengshu:string[]=JSON.parse(localStorage.getItem('zhengshu')??"[]");
var zhengshu = JSON.parse((_b = localStorage.getItem('zhengshu')) !== null && _b !== void 0 ? _b : "[]");
if (addxiangmu && projectArea) {
    projectArea.innerHTML = xiangmu.map(function (item) { return "<br>>".concat(item); }).join('');
    // projectArea.innerHTML = xiangmu.map(item => `<br>> ${item}`).join('');
    addxiangmu.addEventListener('click', function () {
        console.log("clicked");
        // let projectInfo=prompt("请输入项目信息")??"未成功录入项目信息";
        var projectInfo = prompt("请输入项目信息");
        if (projectInfo) {
            xiangmu.push(projectInfo);
            var newArr = xiangmu.map(function (item) {
                return "<br>" + ">" + item;
            });
            //处理回车
            projectArea.innerHTML = newArr.join('');
            localStorage.setItem('xiangmu', JSON.stringify(xiangmu));
            //由于本地存储只能存字符串，所以要先把数组元素JSON化
            // 默认的tostring()只是字面量，无法JSON.parse重塑
        }
    });
}
//xiangmu
var addzhengshu = document.querySelector(".certificate button");
var zhengshuArea = document.querySelector(".certificate div");
if (addzhengshu && zhengshuArea) {
    zhengshuArea.innerHTML = zhengshu.map(function (item) { return "<br>>".concat(item); }).join('');
    addzhengshu.addEventListener('click', function () {
        var certInfo = prompt("请输入证书信息");
        if (certInfo) {
            zhengshu.push(certInfo);
            var newArr2 = zhengshu.map(function (item, index) {
                return "<br>" + ">" + item;
            });
            zhengshuArea.innerHTML = newArr2.join('');
            localStorage.setItem('zhengshu', JSON.stringify(zhengshu));
        }
    });
}
//zhengshu
