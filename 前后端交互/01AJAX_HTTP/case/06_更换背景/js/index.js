/**
 * 目标：网站-更换背景
 *  1. 选择图片上传，设置body背景
 *  2. 上传成功时，"保存"图片url网址
 *  3. 网页运行后，"获取"url网址使用
 * */
//定义一个读取本地图片的函数
function getlocalbk(){
    const localbacc = localStorage.getItem('baccimg')
    localbacc && (document.body.style.backgroundImage = `url(${localbacc})`) //利用逻辑与运算符,避免首次从本地读取读不到而报错的情况
    // localbacc 
}
getlocalbk()
document.querySelector('.bg-ipt').addEventListener(
    'change',(e)=>{
        //1获取图片
        console.log(e.target.files[0])
        const fd = new FormData()//准备一个form-data对象
        fd.append('img',e.target.files[0])

        axios({
            url:'https://hmajax.itheima.net/api/uploadimg',
            method:'post',
            data:fd
        }).then(result=>{
            console.log(result.data.data.url)
            
            const imgsrc = result.data.data.url

            document.body.style.backgroundImage = `url(${imgsrc})`
            localStorage.setItem('baccimg',imgsrc)  //上传成功后本地存一下链接

        }).catch(error=>{
            console.log(error)
        })
    }
)