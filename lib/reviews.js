import { readFile } from "node:fs/promises"
import { marked } from "marked"
import matter from "gray-matter"
import { readdir } from "node:fs/promises"


export async function getReview(slug){
    const text = await readFile(`content/reviews/${slug}.md`, 'utf-8')
    const {content, data: {title, date, image}} = matter(text)
    const html = marked(content, {headerIds: false, mangle: false})
    return {slug, title, date, image, html};
}

export async function getReviews(){
    const files = await readdir('content/reviews')
    const slugs = files.map(file => file.replace(/\.md$/, ''))
    const reviews = [];
    for (const slug of slugs){
        const review = await getReview(slug)
        reviews.push(review)
    }
    return reviews;
}

export async function getSlugs(){
    const files = await readdir('content/reviews')
    return files.filter((file) => file.endsWith('.md')).map((file) => file.slice(0, -'.md'.length));
}