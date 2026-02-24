/**
 * 目标1：默认显示-北京市天气
 *  1.1 获取北京市天气数据
 *  1.2 数据展示到页面
 */

function getWeather(city) {
    myAxios({
        url: 'https://hmajax.itheima.net/api/weather',
        params: {
            city
        }
    }).then(result => {
        // console.log(result.data.dayForecast)
        console.log(result)

        //由于整个返回值有大部分我们都需要，所以要进行解构
        // console.log(Object.keys(result.data))
        const reskeys = Object.keys(result.data)
        console.log(reskeys)
        // console.log(result.data['area'])
        // console.log(result.data.area)
        // console.log('-------=======-------')
        
        
        
        reskeys.forEach((key) => {
            // console.log(key)
            // console.log('*****')
            // console.log(result.data[`${key}`])
            if (key !== 'dayForecast' && key !== 'date' && key !== 'weatherImg' && key !== 'todayWeather') {
                console.log(result.data[`${key}`])
                document.querySelector(`.${key}`).innerText = result.data[`${key}`]
                // console.log(key)
                // document.querySelector(`.${key}`)
            } else if (key === 'dayForecast') {
                console.log('/x/x/x/x//x/x/x/x/')
                console.log(result.data.dayForecast)
                const dayForecast = result.data.dayForecast
                document.querySelector('.week-wrap').innerHTML = dayForecast.map(
            (item) => {

                return `
                <li class="item">
                    <div class="date-box">
                        <span class="dateFormat">今天</span>
                        <span class="date">${item.date}</span>
                    </div>
                    <img src="${item.weatherImg}" alt="" class="weatherImg">
                    <span class="weather">${item.weather}</span>
                    <div class="temp">
                        <span class="temNight">${item.temNight}</span>-
                        <span class="temDay">${item.temDay}</span>
                        <span>℃</span>
                    </div>
                    <div class="wind">
                        <span class="windDirection">${item.windDirection}</span>
                        <span class="windPower">&lt;${item.windPower}</span>
                    </div>
                </li>
                `
            }
        ).join(' ')
            }else if(key === 'weatherImg'){
                document.querySelector('.weatherImg').src = result.data[`${key}`]
            }else if(key === 'todayWeather'){
                const todayWeather = result.data.todayWeather
                console.log('hahhahahha被调用了')
                console.log(todayWeather)
                const tWkeys = Object.keys(todayWeather)
                tWkeys.forEach((key) => {
                document.querySelector(`.${key}`).innerText = todayWeather[key]
            })
            }
        })


        // const { area, date, dateLunar, dateShort, dayForecast, psPm25, temperature, weather, psPm25Level, weatherImg, windDirection, windPower,  } = result.data

        /**[
            "date",
            "area",
            "dateShort",
            "dateLunar",
            "temperature",
            "weather",
            "weatherImg",
            "windPower",
            "windDirection",
            "psPm25Level",
            "psPm25",
            "todayWeather",
            "dayForecast"
        ]*/
        //完成顶部
        // console.log(dateShort)
        // console.log(dateLunar)
        // console.log(area)
        // document.querySelector('.dateShort').innerText = dateShort
        // document.querySelector('.dateLunar').innerText = dateLunar
        // document.querySelector('.area').innerText = area


        //完成当前天气部分
        // document.querySelector('.temperature').innerText = temperature
        // document.querySelector('.psPm25').innerText = psPm25
        // document.querySelector('.psPm25Level').innerHTML = psPm25Level
        // document.querySelector('.weatherImg').src = weatherImg
        // document.querySelector('.weather').innerText = weather
        // // windDirection,windPower,todayWeather
        // document.querySelector('.windDirection').innerText = windDirection
        // document.querySelector('.windPower').innerText = windPower




        //完成今日天气部分
        // console.log(Object.keys(todayWeather))
        // const tWkeys = Object.keys(todayWeather)
        // tWkeys.forEach((key) => {
        //     document.querySelector(`.${key}`).innerText = todayWeather[key]
        // })













        // console.log(dayForecast)
        // document.querySelector('.week-wrap').innerHTML = dayForecast.map(
        //     (item) => {

        //         return `
        //         <li class="item">
        //             <div class="date-box">
        //                 <span class="dateFormat">今天</span>
        //                 <span class="date">${item.date}</span>
        //             </div>
        //             <img src="${item.weatherImg}" alt="" class="weatherImg">
        //             <span class="weather">${item.weather}</span>
        //             <div class="temp">
        //                 <span class="temNight">${item.temNight}</span>-
        //                 <span class="temDay">${item.temDay}</span>
        //                 <span>℃</span>
        //             </div>
        //             <div class="wind">
        //                 <span class="windDirection">${item.windDirection}</span>
        //                 <span class="windPower">&lt;${item.windPower}</span>
        //             </div>
        //         </li>
        //         `
        //     }
        // ).join(' ')
    }).catch(error => {
        console.log(error)
    })
}

//首页默认获取北京的天气
getWeather('110100')

//接下来实现输入城市名称

document.querySelector('.search-city').addEventListener('input',function(e){
    console.log(e.target.value)
    
    // const city = document.querySelector('.search-city').value
    console.log('*####****####')
    // console.log(city)
    // console.log(city)
    myAxios({
        url:"https://hmajax.itheima.net/api/weather/city",
        params:{
            city:e.target.value
        }
    }).then(
        result=>{
            const searchlst = document.querySelector('.search-list')  
            console.log(result.data)
            searchlst.innerHTML = result.data.map((item)=>{
                return `
                    <li class="city-item" data-code='${item.code}'>${item.name}</li>
                `
                
            }).join(' ')
           
               
        
        }
    )

    
})

//事件委托，由于li是渲染出来的,所以要将事件监听委托给其父元素.search-list
document.querySelector('.search-list').addEventListener('click',e=>{
    if(e.target.classList.contains('city-item')){
        //只有点到li才会走这里
        const citycode = e.target.dataset.code
        console.log(citycode)
        getWeather(citycode)
    }
})