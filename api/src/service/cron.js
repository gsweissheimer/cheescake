const CronJob = require('cron').CronJob;
const axios = require('axios');

const getNews = async () => {

    const news = await axios.get('http://newsapi.org/v2/top-headlines?country=us&apiKey=d8e8fad17815471c9812da5bc8d22069');

    organizeNews(news.data.articles)
    
}

const organizeNews = (news) => {

    const categories = ['Business','Science','Politics','Tech','Sports']

    news.map((e,i) => {

        var random = Math.floor(Math.random() * categories.length)

        delete e.source

        e.category = categories[random]

        e.author_img = 'https://i.pinimg.com/736x/0e/c6/6b/0ec66b439eb296c4f69cc261e44a785b.jpg'

        saveNews(news)

    })
    
}

const saveNews = async (news) => {

    const status = await axios.post('http://localhost:3001/api/news', news);

    return status
    
}



const job = new CronJob('00 12 * * * 1-5', async function() {

    getNews()


}, null, true, 'America/Los_Angeles');

job.start();