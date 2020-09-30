import { createStore } from "redux";

function reducer() {

    return {
        
        headNews: {
            "author_img": "https://i.pinimg.com/736x/0e/c6/6b/0ec66b439eb296c4f69cc261e44a785b.jpg",
            "_id": "5f7251a04152854d5c747a4f",
            "author": "Damon Martin",
            "title": "Paulo Costa blasts ‘human trash’ Israel Adesanya for post-fight behavior, Adesanya responds - MMA Fighting",
            "description": "Paulo Costa is upset with Israel Adesanya’s post fight antics following their main event battle this past weekend and it didn’t take long for the middleweight champion to respond.",
            "url": "https://www.mmafighting.com/2020/9/28/21492349/paulo-costa-blasts-human-trash-israel-adesanya-for-post-fight-behavior-adesanya-responds",
            "urlToImage": "https://cdn.vox-cdn.com/thumbor/KRRnSto5qNUNREJYHCMUMW6tQfE=/0x0:4214x2206/fit-in/1200x630/cdn.vox-cdn.com/uploads/chorus_asset/file/21919198/1276895545.jpg.jpg",
            "publishedAt": "2020-09-28T20:14:59Z",
            "content": "Paulo Costa is already calling for a rematch against Israel Adesanya after falling to the reigning middleweight champion this past weekend at UFC 254.\r\nThe source of his anger stems from Adesanyas ch… [+2266 chars]",
            "category": "Politics",
            "createdAt": "2020-09-28T21:12:00.499Z",
            "__v": 0
        },
        secondaryNews: [{
            "author_img": "https://i.pinimg.com/736x/0e/c6/6b/0ec66b439eb296c4f69cc261e44a785b.jpg",
            "_id": "5f7251a04152854d5c747a50",
            "author": "Claire Colbert and Artemis Moshtaghian, CNN",
            "title": "Famed California winery destroyed as fast-moving fires take over wine country - CNN",
            "description": "The famed 41-year-old Chateau Boswell Winery in Napa Valley, California, was destroyed during the Glass Fire on Sunday evening, according to CNN affiliate KPIX.",
            "url": "https://www.cnn.com/2020/09/28/us/chateau-boswell-winery-california-fire/index.html",
            "urlToImage": "https://cdn.cnn.com/cnnnext/dam/assets/200928093952-02-california-wildfires-0927-glass-fire-super-tease.jpg",
            "publishedAt": "2020-09-28T20:07:00Z",
            "content": "(CNN)The famed 41-year-old Chateau Boswell Winery in Napa Valley, California, was destroyed during the Glass Fire on Sunday evening, according to CNN affiliate KPIX. \r\nThe private family-owned winery… [+1428 chars]",
            "category": "Business",
            "createdAt": "2020-09-28T21:12:00.500Z",
            "__v": 0
        },
        {
            "author_img": "https://i.pinimg.com/736x/0e/c6/6b/0ec66b439eb296c4f69cc261e44a785b.jpg",
            "_id": "5f7251a04152854d5c747a51",
            "author": null,
            "title": "Brad Parscale: Police video shows Trump's ex-campaign manager wrestled to ground during arrest - The Independent",
            "description": "<p>Wife claims former Trump staffer gave her cuts, bruises earlier in the week</p>",
            "url": "https://www.independent.co.uk/news/world/americas/brad-parscale-arrest-video-trump-police-b676075.html",
            "urlToImage": "https://static.independent.co.uk/2020/09/28/20/Brad%20Parscale.JPG",
            "publishedAt": "2020-09-28T19:46:00Z",
            "content": "Brad Parscale, the former manager of Donald Trump's digital campaign efforts, was wrestled to the ground and arrested by Fort Lauderdalepolice following a standoff with authorities.  \r\nFootage of the… [+4792 chars]",
            "category": "Sports",
            "createdAt": "2020-09-28T21:12:00.501Z",
            "__v": 0
        }],
        lastNews: [ {
            "author_img": "https://i.pinimg.com/736x/0e/c6/6b/0ec66b439eb296c4f69cc261e44a785b.jpg",
            "_id": "5f7251a04152854d5c747a52",
            "author": "Alexandria Hein",
            "title": "Coronavirus viral loads declining in US patients since start of pandemic, study finds - Fox News",
            "description": "By week 5 of the study, 70% of patients with coronavirus were categorized as initial low viral load.",
            "url": "https://www.foxnews.com/health/coronavirus-viral-loads-declining-us-patients-study",
            "urlToImage": "https://cf-images.us-east-1.prod.boltdns.net/v1/static/694940094001/67e6b9df-0d10-40f5-97d1-94650d01ad98/7dd02fd5-6928-403b-8a8c-cc42686295d7/1280x720/match/image.jpg",
            "publishedAt": "2020-09-28T19:29:06Z",
            "content": "The levels of the virus that causes COVID-19 has been declining in U.S. patients over time, which could account for the lower number of ICU admissions and overall death rate compared to when the viru… [+1692 chars]",
            "category": "Tech",
            "createdAt": "2020-09-28T21:12:00.502Z",
            "__v": 0
        },
        {
            "author_img": "https://i.pinimg.com/736x/0e/c6/6b/0ec66b439eb296c4f69cc261e44a785b.jpg",
            "_id": "5f7251a04152854d5c747a53",
            "author": "Mike Vulpo",
            "title": "Amanda Seyfried Gives Birth, Welcomes Baby No. 2 With Thomas Sadoski - E! NEWS",
            "description": "Mamma Mia star Amanda Seyfried and her husband Thomas Sadoski managed to secretly give birth to their second baby. See their special announcement with help from INARA and War Child USA.",
            "url": "https://www.eonline.com/news/1192668/amanda-seyfried-gives-birth-welcomes-baby-no-2-with-thomas-sadoski",
            "urlToImage": "https://akns-images.eonline.com/eol_images/Entire_Site/201847/rs_600x600-180507154749-600--amanda-seyfried-thomas-sadoski-050718.jpg?fit=around|1080:1080&output-quality=90&crop=1080:1080;center,top",
            "publishedAt": "2020-09-28T19:07:00Z",
            "content": "Mamma Mia! Baby No. 2 has arrived. \r\nOn Sept. 28, Amanda Seyfried shared some big news with her fans and followers. As it turns out, the A-list actress quietly gave birth to her second child with hus… [+735 chars]",
            "category": "Business",
            "createdAt": "2020-09-28T21:12:00.502Z",
            "__v": 0
        },
        {
            "author_img": "https://i.pinimg.com/736x/0e/c6/6b/0ec66b439eb296c4f69cc261e44a785b.jpg",
            "_id": "5f7251a04152854d5c747a54",
            "author": "Doha Madani",
            "title": "'Crying Nazi' Christopher Cantwell found guilty of extortion in rape threat case - NBC News",
            "description": "Christopher Cantwell, known for his involvement in the violent \"Unite the Right\" 2017 rally in Virginia, was found guilty of extortion Monday.",
            "url": "https://www.nbcnews.com/news/us-news/crying-nazi-christopher-cantwell-found-guilty-extortion-rape-threat-case-n1241263",
            "urlToImage": "https://media1.s-nbcnews.com/j/newscms/2020_40/2129616/170822-christopher-cantwell-ac-710p_397fe708ba565cfce25f7a34d700928c.nbcnews-fp-1200-630.jpg",
            "publishedAt": "2020-09-28T18:53:00Z",
            "content": "Christopher Cantwell, known for his involvement in the violent \"Unite the Right\" 2017 rally in Virginia, was found guilty Monday in a case related to a rape threat and extortion using the online mess… [+2783 chars]",
            "category": "Tech",
            "createdAt": "2020-09-28T21:12:00.502Z",
            "__v": 0
        }],
        interests: [{
            _id: 321,
            name: "Politics",
            color: "red",
            status: 0
        },{
            _id: 322,
            name: "Business",
            color: "purple",
            status: 0
        },{
            _id: 323,
            name: "Tech",
            color: "blue",
            status: 0
        },{
            _id: 324,
            name: "Science",
            color: "green",
            status: 0
        },{
            _id: 325,
            name: "Sports",
            color: "orange",
            status: 0
        }],
        logStatus: false
        
    }

}

const store = createStore(reducer);

export default store