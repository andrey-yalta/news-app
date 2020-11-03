import * as axios from "axios"


const instance = axios.create({
    baseURL:`http://newsapi.org/v2/top-headlines?` +
        'country=ru&'
        // 'category=sports&'+
        // 'q=путин&' +
        })
export const newsAPI = {
    getNews: () => {

        return (
            instance.get('&apiKey=e09d633000034edcb94b88e6ee66ee9a')
                .then(response => {
                    return response.data
                })
        )
    },
    getSportNews: () => {

        return (
            // eslint-disable-next-line no-useless-concat
            instance.get('&category=sports&'+'apiKey=e09d633000034edcb94b88e6ee66ee9a')
                .then(response => {
                    return response.data
                })
        )
    },
    getTechnologyNews: () => {

        return (
            // eslint-disable-next-line no-useless-concat
            instance.get('&category=technology&'+'apiKey=e09d633000034edcb94b88e6ee66ee9a')
                .then(response => {
                    return response.data
                })
        )
    },
    getScienceNews: () => {

        return (
            // eslint-disable-next-line no-useless-concat
            instance.get('&category=science&'+'apiKey=e09d633000034edcb94b88e6ee66ee9a')
                .then(response => {
                    return response.data
                })
        )
    },
    getHealthNews: () => {

        return (
            // eslint-disable-next-line no-useless-concat
            instance.get('&category=health&'+'apiKey=e09d633000034edcb94b88e6ee66ee9a')
                .then(response => {
                    return response.data
                })
        )
    },

}


