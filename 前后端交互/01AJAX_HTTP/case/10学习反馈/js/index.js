/**
 * 目标1：完成省市区下拉列表切换
 *  1.1 设置省份下拉菜单数据
 *  1.2 切换省份，设置城市下拉菜单数据，清空地区下拉菜单
 *  1.3 切换城市，设置地区下拉菜单数据
 */


//设置省份下拉菜单数据

axios({
    url:'https://hmajax.itheima.net/api/province'
}).then(result=>{


    const optionStr = result.data.list.map(item=>{
        return `<option value="${item}">${item}</option>`
    }).join(' ')
    // console.log(optionStr)
    document.querySelector('.province').innerHTML = `<option value="">省份</option>`+optionStr

    //1.2切换省份,设置城市下拉菜单数据,清空地区下拉菜单

    // document.querySelector('.province').addEventListener(
    //     'change',async e=>{
    //         console.log(e.target.value) //这样进行事件委托,之后就拿到了点击选中的省份
    //         const pname = e.target.value 

    //         //然后发起城市请求

    //         axios({
    //             url:'https://hmajax.itheima.net/api/city',
    //             params:{
    //                 pname
    //             }
    //         }).then(result=>{
    //             console.log(result.data.list)
    //             const city_lst = result.data.list
    //             citystr = city_lst.map(item=>{
    //                 return `
    //                     <option value="${item}">${item}</option>
    //                 `
    //             }).join(' ')
    //             document.querySelector('.city').innerHTML = `<option value="">城市</option>`+citystr

    //             document.querySelector('.city').addEventListener('change',e=>{
    //                 console.log(e.target.value)

    //                 const cname = e.target.value

    //                 //拿到了pname和cname,接下来发起地区请求

    //                 console.log(pname)

    //                 axios({
    //                     url:'https://hmajax.itheima.net/api/area',
    //                     params:{
    //                         pname,
    //                         cname
    //                     }

    //                 }).then(result=>{
    //                     console.log(result)
    //                     const area_str=result.data.list.map(item=>{
    //                         return `
    //                             <option value="${item}">${item}</option>
    //                         `
    //                     }).join(' ')
    //                     console.log(area_str)
        

    //                     document.querySelector('.area').innerHTML = `<option value="">地区</option>`+area_str
                        
    //                     //构造表进行提交

    //                     document.querySelector('.submit').addEventListener('click',()=>{
    //                         const tform = document.querySelector('.info-form')
    //                         const tform_data = serialize(tform,{hash:true,empty:true})
    //                         console.log(tform_data)

    //                         //ok,拿到数据后作最后的axios
    //                         axios({
    //                             url:'https://hmajax.itheima.net/api/feedback',
    //                             method:'post',
    //                             data:{
    //                                 ...tform_data
    //                             }
    //                         }).then(result=>{
    //                             console.log(result)
    //                             tform.reset()
    //                         })
    //                     })
                        
    //                 })
                    
    //             })
    //         })
    //     }
    // )

    document.querySelector('.province').addEventListener(
        'change',async e => {
            const pname = e.target.value
            console.log(e.target.value)

            const result = await axios({
                url:'https://hmajax.itheima.net/api/city',
                params:{
                    pname
                }
            })

            console.log(result)
            console.log(result.data.list)
            const optionStr = result.data.list.map(item=>{
                return`
                <option value="${item}">${item}</option>
                `
            }).join(' ')

            // console.log(cname)

            //把默认城市选项+下属城市数据插入到select中   
            document.querySelector('.city').innerHTML = `<option value="">城市</option>` + optionStr

            //清空地区的数据   
            document.querySelector('.area').innerHTML = `<option value="">地区</option>`


            //请求城市和省份拿到地区

            document.querySelector('.city').addEventListener('change',async e=>{
                const cname = e.target.value  
                console.log(pname)
                console.log(cname)


                const result = await axios({
                    url:'https://hmajax.itheima.net/api/area',
                    params:{
                        pname,
                        cname
                    }
                })

                console.log(result.data.list)
                const areastr = result.data.list.map(item=>{
                    return `<option value="${item}">${item}</option>`
                }).join(' ')
                document.querySelector('.area').innerHTML = `<option value="地区">地区</option>` + areastr
            })

            
            
        }
    )
})

document.querySelector('.submit').addEventListener('click',async ()=>{
    const tform = document.querySelector('.info-form')
    const tdata = serialize(tform,{hash:true,empty:true})

    try{
    const result = await axios({
        url:'https://hmajax.itheima.net/api/feedback',
        method:'post',
        data:{
            ...tdata
        }
    })

    console.log(result)
    alert(result.data.message)}
    catch(error){
        console.dir(error)
        alert(error.response.data.message)
    }
})
