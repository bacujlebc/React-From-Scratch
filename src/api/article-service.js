import { articles } from "../data/article-json";

export const fetchArticleList = _ => {
    return new Promise((resolve, reject) => {
        resolve(articles);
    });
};

export const fetchArticleById = articleId => {
    return new Promise((resolve, reject) => {
        fetch(`https://dagblader.no/article/${articleId}`)
            .then(result =>
                resolve({
                    originalText:
                        "It was amazing way. Sun was shining brightly.",
                    suggestions: []
                })
            )
            .catch(e => e);
    });
};

/*

https://lohikaonline.sharepoint.com/Policies/Home.aspx // Time off policy
http://blog.lohika.com // Lohika blog
https://portal.lohika.com/dispay.lhkhr/Discount+program //Discount programm
https://lohikaonline.sharepoint.com/HowTo/Office%20map%map20-%20Odessa.aspx //Lohika Odessa office plan
https://portal.lohika.com/display/lhkhr/Technical+Skills+Matrix //Technical promotion requirements
https://portal.lohika.com/display/lhkhr/Training+and+Development //training politics
https://portal.lohika.com/display/lhkhr/English+Learning+Department //English
www.cube.lohika.com //Cube
https://ideabox.lohika.com/login //Ideabox
https://bookshelf.lohika.com/login //Books sharing

*/