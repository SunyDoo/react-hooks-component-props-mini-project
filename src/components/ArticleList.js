import React from "react";
import Article from "./Article";


function ArticleList({ posts }){
    const articleObj = posts.map((article) => {
        return ( 
            <Article key = {article.id} title = {article.title} date = {article.date} preview ={article.preview} />
        )
    })
    return (
        <main>
            {articleObj}
        </main>
    )
}





export default ArticleList