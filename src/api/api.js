import * as axios from "axios"


const instance = axios.create({
    baseURL:`http://newsapi.org/v2/top-headlines?` +
        'country=ru&'
        // 'category=sports&'+
        // 'q=путин&' +
        })
export const newsAPI = {
    getNews: () => {
        debugger;
        return (
            instance.get('&apiKey=e09d633000034edcb94b88e6ee66ee9a')
                .then(response => {
                    return response.data
                })
        )
    },
    getSportNews: () => {
        debugger;
        return (
            // eslint-disable-next-line no-useless-concat
            instance.get('&category=sports&'+'apiKey=e09d633000034edcb94b88e6ee66ee9a')
                .then(response => {
                    return response.data
                })
        )
    },
    getTechnologyNews: () => {
        debugger;
        return (
            // eslint-disable-next-line no-useless-concat
            instance.get('&category=technology&'+'apiKey=e09d633000034edcb94b88e6ee66ee9a')
                .then(response => {
                    return response.data
                })
        )
    },

}


