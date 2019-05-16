
import React from "react"
import Header from "../../components/Header"
import Footer from "../../components/Footer"




const NotFound = () => {
    return (
        <div>
            <Header />
                <div className="container col-md-8" text-center>
                <h1 className="md-4">404</h1>
                <p className="title md-5">ขออภัย ไม่พบหน้าที่คุณค้นหา</p>
               </div>
            <Footer />
        </div>
    )
}

export default NotFound