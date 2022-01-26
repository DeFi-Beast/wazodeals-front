import Header from "../../Header"
import Footer from "../../Footer"

const LayoutDefault = (props)  => {
    return <div>
        <Header></Header>
        {props.children}
        <Footer></Footer>

    </div>
}


export default LayoutDefault
