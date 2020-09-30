

export function toggleLog(status) {

    return {

        type: 'TOGGLE_LOG',
        status

    }

}

export function toggleUserInfos(id, name, user, token) {

    return {

        type: 'TOGGLE_USER_INFOS',
        id,
        name,
        user,
        token

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
        interests

    }

}