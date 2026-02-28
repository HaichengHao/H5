/**
 * 目标1：信息渲染
 *  1.1 获取用户的数据
 *  1.2 回显数据到标签上
 * 目标2: 实现头像更换
 * 目标3: 实现修改逻辑   
 * 定位到form并进行修改设置
 * */

const creator = 'niko'

axios({
    url:'https://hmajax.itheima.net/api/settings',
    method:'get',
    params:{
        creator
    }
}).then(result=>{
    //做数据回显
    // document.querySelector('.prew').src=result.data.data.avatar
    console.log(result)
    console.log(result.data.data)
    const theData = result.data.data
    console.log(Object.keys(theData))
    /**[
    "avatar",
    "nickname",
    "email",
    "desc",
    "gender"
] */
    keys = Object.keys(theData)
    // document.querySelector('.form-item .email').value = theData.email
    //做遍历作赋值
    keys.forEach((key)=>{
        console.log(key)
        if(key === 'avatar'){
            document.querySelector('.prew').src = theData[key]
        }else if(key === 'gender'){
            //赋予默认性别
            //[男单选框元素，女单选框元素]
            const genderRadiolst = document.querySelectorAll('.gender') //获取俩input标签
            //获取性别的数字0男1女
            const gNum = theData[key]  //这里其实就是theData['gender'] 也就是0或者1咯,然后我们利用其作为下标
            //通过性别数字作为下标找到对应性别的单选框,设置选中状态
            genderRadiolst[gNum].checked = true
        }
        else{
            document.querySelector(`.form-item .${key}`).value = theData[key]
        }
        
    })


})

//实现本地读取
function getlocalava(){
    const avatar = localStorage.getItem('myava')
    console.log(avatar)
    avatar && (document.querySelector('.prew').src = avatar)
}
getlocalava()

//实现头像更换
document.querySelector('.upload').addEventListener(
    'change',(e)=>{
        console.log(e.target.files[0])

        //创建表单对象
        const fd = new FormData()
        fd.append('avatar',e.target.files[0])
        fd.append('creator',creator)
        console.log(fd)
        axios({
            url:'https://hmajax.itheima.net/api/avatar',
            method:'put',
            data:fd,
        }).then(result=>{
            console.log(result.data.data.avatar)
            const avatarsrc = result.data.data.avatar
            document.querySelector('.prew').src = avatarsrc
            localStorage.setItem('myava',avatarsrc)

        }).catch(error=>{
            console.log(error)
        })
    }
)

//实现修改表单

//使用serialize


//定位到提交按钮并添加点击事件

document.querySelector('.submit').addEventListener('click',()=>{
   const userform = document.querySelector('.user-form')
   const userObj = serialize(userform,{hash:true,empty:true})
   userObj.creator = creator
   //处理性别编号,将字符串类型转换为数字类型
   userObj.gender = +userObj.gender
   console.log(userObj)
   axios({
    url:'https://hmajax.itheima.net/api/settings',
    method:'put',
    headers: { 
      'Content-Type': 'application/json'
   },
    data:userObj
   }).then(result=>{
    console.log(result)

    //成功后显示提示框  
    //烤面包机的吐司面包ding~~~~~

    const toastDom = document.querySelector('.my-toast')
    const toast = new bootstrap.Toast(toastDom)
    toast.show()

   })
})

//个人信息设置-提示框
//<div class="toast" data-bs-delay="1500">提示框内容</div>