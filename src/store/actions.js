

export function toggleLog(status) {

    return {

        type: 'TOGGLE_LOG',
        status

    }

}

export function toggleUserInfos(id, name, user, token) {

    return {

        type: 'TOGGLE_USER_INFOS',
        userInfos: {
            _id: id,
            name: name,
            username: user,
            token: token
        }

    }

}

export function toggleNews(big, medium, small) {

    return {

        type: 'TOGGLE_NEWS',
        big,
        medium,
        small

    }

}

export function toggleInterests(interests) {

    return {

        type: 'TOGGLE_INTERESTS',
        interests: [{
                _id: 321,
                name: "Politics",
                class: "red-news",
                status: interests.politics
            },{
                _id: 322,
                name: "Business",
                class: "purple-news",
                status: interests.business
            },{
                _id: 323,
                name: "Tech",
                class: "blue-news",
                status: interests.tech
            },{
                _id: 324,
                name: "Science",
                class: "green-news",
                status: interests.science
            },{
                _id: 325,
                name: "Sports",
                class: "orange-news",
                status: interests.sports
            }]

    }

}