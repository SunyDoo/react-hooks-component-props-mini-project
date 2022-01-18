import React from "react";
import Article from "./Article";


function ArticleList({ articles }){
    const articleObj = articles.map((article) => {
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