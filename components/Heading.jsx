import { orbitron } from "../fonts"

export default function Heading({children}){
    return(
        <h1 className={`font-bold pb-3 text-2xl font-orbitron`}>{children}</h1>
    )

}