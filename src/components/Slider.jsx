import "./Slider.css"
import test1 from "/sliderimages/test1.jpg"
import test2 from "/sliderimages/test2.jpg"
import test3 from "/sliderimages/test3.jpg"
import test4 from "/sliderimages/test4.jpg"
import test5 from "/sliderimages/test5.jpg"
import test6 from "/sliderimages/test6.jpg"
import test7 from "/sliderimages/test7.jpg"
import test8 from "/sliderimages/test8.jpg"
import test9 from "/sliderimages/test9.jpg"
import test10 from "/sliderimages/test10.jpg"
function Slider(){
    const data=[test1,test2,test3,test4,test5,test6,test7,test8,test9,test10]
    return (
            <div className="slider" >
                <div className="list">
                    {data.map((image,ind)=>
                    <div className="item" key={ind} style={{'--position':ind}}><img src={image} /></div>)}
                </div>
            </div>
    )
}
export default Slider;