import * as axios from "axios"


const instance = axios.create({
    baseURL:`http://newsapi.org/v2/top-headlines?`
        })



export const newsAPI = {
    getNews: (language ="ru", category="general") => {

        return (
            // eslint-disable-next-line no-useless-concat
            instance.get(`&country=${language}` +`&category=${category}&`+'apiKey=e09d633000034edcb94b88e6ee66ee9a')
                .then(response => {
                    return response.data
                })
        )
    },

}
