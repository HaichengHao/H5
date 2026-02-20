/**
 * 目标1：渲染图书列表
 *  1.1 获取数据
 *  1.2 渲染数据
 */

//封装一个获取并渲染图书列表的函数
const creator = 'niko'
function getBookList() {
    //实现获取并渲染
    axios({
        url: 'https://hmajax.itheima.net/api/books',
        method: 'get', //默认get,不写也行
        params: {
            // 'creator':creator 属性变量同名,那么简写就行
            creator
        }

    }).then(result => {
        console.log(result)
        const bookList = result.data.data
        console.log(bookList)
        //开始映射所有
        document.querySelector('.list').innerHTML = bookList.map((item, index) => {//map中有索引参数,可以利用其来生成序号,索引从0开始,所以我们让它+1
            return `
            <tr>
                <td>${index + 1}</td> 
                <td>${item.bookname}</td>
                <td>${item.author}</td>
                <td>${item.publisher}</td>
                <td data-id=${item.id}>
                    <span class="del">删除</span>
                    <span class="edit">编辑</span>
                </td>
                </tr>`
        }).join(' ')
    }).catch(error => {
        console.log(error)
    })
}
//页面打开就渲染一次
getBookList()


/*
目标2:新增图书
2.1新增弹框->显示和隐藏
2.2 收集表单数据,并提交到服务器保存
2.3 刷新图书列表

*/

//一些按钮已经用bootstrap弹框属性设置好了
//而如保存和确认修改的逻辑则需要用js控制弹框  


//2.1创建弹框对象
const addModalDom = document.querySelector('.add-modal')
const addMoadl = new bootstrap.Modal(addModalDom)


//保存按钮->点击->隐藏弹框
document.querySelector('.add-btn').addEventListener('click', () => {
    //给添加表单做表序列化
    const addForm = document.querySelector('.add-form')
    const bookObj = serialize(addForm, { hash: true, empty: true })

    axios({
        url: 'https://hmajax.itheima.net/api/books',
        method: 'POST',
        data: {
            ...bookObj,//展开运算符,这里可理解为python的解包赋值
            creator  //还要创建一个创建者

        }
    }).then(
        result => {
            console.log(result),
                //2.3添加成功之后调用渲染函数
                getBookList()

            //由于再次点击添加会有上次添加的信息,所以我们要重置表单后再隐藏
            addForm.reset()

            //隐藏
            addMoadl.hide()
        }).catch(error => {
            console.log(error)
        })

})

//3.删除图书
/**
 * 1.绑定点击事件->获取图书id
 * 2.调用删除接口
 * 3.刷新图书列表
 */

//由于数据是动态获取的,所以要想获取可以使用事件委托给父级元素
//利用事件对象来获取触发事件的目标元素
document.querySelector('tbody').addEventListener('click', e => {
    console.log(e.target.classList) //获取目标事件的类
    const { classList } = e.target  //解构

    //判断点击的是删除元素再走后面的逻辑
    if (classList.contains('del')) {
        console.log('点击了删除按钮')

        //获取图书id
        const theID = e.target.parentNode.dataset.id //由于span是被td包含的,且td有图书id,所以用父节点获取，回忆丢失就去看webapi的35
        console.log(theID)


        //获取之后进行删除,和后端联合
        axios({
            url: `https://hmajax.itheima.net/api/books/${theID}`,
            method: 'delete'

        }).then(
            result => {
                console.log(result)
                //删除后再次进行渲染
                getBookList()
            }
        ).catch(
            error => {
                console.log(error)
            }
        )
    } else if (classList.contains('edit')) {  //实现编辑图书的功能
        console.log('点了编辑按钮')
        //获取图书id进行数据的回显
        const theID = e.target.parentNode.dataset.id
        console.log(theID)
        //获取之后查询图书详情然后返回
        axios({
            url: `https://hmajax.itheima.net/api/books/${theID}`
        }).then(result => {
            console.log(result)
            const bookObj = result.data.data
            console.log(bookObj)

            //接下来做回显

            // document.querySelector('.edit-form .bookname').value=bookObj.bookname,
            // document.querySelector('.edit-form .author').value = bookObj.author,
            // document.querySelector('.edit-form .publisher').value = bookObj.publisher
            //数据对象的属性和标签的类名一致

            //遍历数据对象，使用属性去获取对应的标签，快速赋值
            const keys = Object.keys(bookObj)
            /**
                         * [
                "id",
                "bookname",
                "author",
                "publisher"
            ]
                        */
            console.log(keys)
            keys.forEach(key => {
                document.querySelector(`.edit-form .${key}`).value = bookObj[key]
            })

        }).catch(error => {
            console.log(error)
        })

        //构造编辑modal
        const editDom = document.querySelector('.edit-modal')
        const editModal = new bootstrap.Modal(editDom)
        editModal.show()

        const editbtn = document.querySelector('.edit-btn')
        editbtn.addEventListener('click', () => {
            const editform = document.querySelector('.edit-form')
            const editdata = serialize(editform, { hash: true, empty: true })
            console.log(editdata)


            //实现修改axios
            axios({
                url: `https://hmajax.itheima.net/api/books/${theID}`,
                method: 'put',
                data: {
                    ...editdata,
                    creator
                }

            }).then(result => {
                console.log(result)
                editform.reset()
                getBookList()
                editModal.hide()
                console.log('修改完毕按钮被点击')
            }).catch(error => {
                console.log(error)
            })


        })



    }
})

/**
 * 编辑图书
 * 
 */