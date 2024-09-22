import { userAgent } from "next/server";
import { rule } from "postcss";

export default function robots() {
    return{
        rule:{
            userAgent:'*',
            allow:['/'],
            disallow:[],
        },
        sitemap:"https://filmonelias.com/"
    }
}