import Link from "next/link"
import { getReviews } from "../../lib/reviews"
export default async function ReviewsPage(){
    console.log('[HReviewsPage] rendering')
    const review = await getReviews();

    return(
        <>
                
            <ul className="flex flex-col gap-3">
                {review.map((review) => (
                    <li key={review.slug} className="border w-80 bg-white rounded shadow hover:shadow-xl font-orbitron font-bold text-center">
                    <Link href={`reviews/${review.slug}`}><img src={review.image} alt="" width="320" height="180" className="rounded-t mb-2"/><h2>{review.title}</h2></Link>
                    </li>
                ))    
                }
            </ul>
            
        
        </>
    )
}