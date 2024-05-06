import Header from "./Header"
import Footer from "./Footer"
import { PageWrapper } from "./PageWrapper"
export default function Layout({children}) {
    return (
        <>
            <Header/>
            <PageWrapper>
                {children}
            </PageWrapper>
            <Footer/>
        </>
       
    )
}