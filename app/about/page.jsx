import Heading from "../../components/Heading"
export const metadata = {
    title: "About Page",
    description: "About page",

}
export default function ReviewsPage(){
    console.log('[About] rendering')

    return(
        <>
        <Heading title="About Page"/>
        <p>Best indie games</p>
        </>
    )
}