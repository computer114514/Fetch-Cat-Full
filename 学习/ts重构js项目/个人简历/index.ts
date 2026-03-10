    // let xiangmu:string[]=[];
    // if(localStorage.getItem('xiangmu')){
    //     xiangmu=JSON.parse(localStorage.getItem('xiangmu'));
    // }
    //这边的错误是因为localStorage.getItem('xiangmu') 的返回值在编译的时候就已经被判断是string|null了
    // 而JSON.parse只能接收string

    const addxiangmu:Element|null = document.querySelector(".xiangmu button");
    const projectArea:Element|null = document.querySelector(".xiangmu div");

    let xiangmu:string[]=JSON.parse(localStorage.getItem('xiangmu')??'[]');

    // let zhengshu:string[]=JSON.parse(localStorage.getItem('zhengshu')??"[]");
    let zhengshu:Array<string>=JSON.parse(localStorage.getItem('zhengshu')??"[]");

    if(addxiangmu&&projectArea){
        projectArea.innerHTML = xiangmu.map((item)=>`<br>>${item}`).join('')
        // projectArea.innerHTML = xiangmu.map(item => `<br>> ${item}`).join('');
        addxiangmu.addEventListener('click', () => {
            console.log("clicked")
        // let projectInfo=prompt("请输入项目信息")??"未成功录入项目信息";
        let projectInfo:string|null=prompt("请输入项目信息");

        if(projectInfo){
            xiangmu.push(projectInfo);
            const newArr:string[] = xiangmu.map(function (item) {
                    return "<br>" + ">" + item
            })
            //处理回车
            projectArea.innerHTML = newArr.join('')
            localStorage.setItem('xiangmu', JSON.stringify(xiangmu));
            //由于本地存储只能存字符串，所以要先把数组元素JSON化
            // 默认的tostring()只是字面量，无法JSON.parse重塑
        }
    })
    }
    //xiangmu
    const addzhengshu:Element|null = document.querySelector(".certificate button")
    const zhengshuArea:Element|null =document.querySelector(".certificate div")
    if(addzhengshu&&zhengshuArea){
        zhengshuArea.innerHTML = zhengshu.map((item)=>`<br>>${item}`).join('')    
        addzhengshu.addEventListener('click', () => {
           const certInfo:string|null=prompt("请输入证书信息");
           if(certInfo){
                zhengshu.push(certInfo);
                const newArr2:string[] = zhengshu.map(function (item, index) {
                    return "<br>" + ">" + item
                });
                zhengshuArea.innerHTML = newArr2.join('');
                localStorage.setItem('zhengshu', JSON.stringify(zhengshu));
           }
    })
    }
    //zhengshu