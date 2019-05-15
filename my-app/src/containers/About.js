import React from "react"
import Header from "../components/Header"
import Footer from "../components/Footer"

const About = () => {
return(
    <div>
        <Header />
            <div className="container col-md-5">
                <h3>About us</h3>
                <p>เวปไซท์เกี่ยวกับการขายกาแฟ เค๊ก อาหารทานเล่นต่างๆ</p>
            </div>
        <Footer username= "Assadawoot Poprakod" email="awboy005@gmail.com"/>
    </div>

)
}
export default About