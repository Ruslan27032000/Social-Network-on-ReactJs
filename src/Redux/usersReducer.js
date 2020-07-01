const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';
const CURRENT_PAGE = 'CURRENT_PAGE';
const GET_TOTAL_COUNT = 'GET_TOTAL_COUNT';
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING';

let initialState = {
    users: [],
    totalUsersCount:0,
    pageSize:5,
    currentPage:1,
    isFetching:false
}

export const usersReducer = (state = initialState, action) => { /*в state получаем messageData*/
    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return {
                            ...u,
                            following: true
                        }
                    }
                    return u;
                })
            }
        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return {
                            ...u,
                            following: false
                        }
                    }
                    return u;
                })
            }
        case SET_USERS:
            return {
                ...state,
                users:action.users
            }
        case CURRENT_PAGE:
            return{
                ...state,
                currentPage: action.page
            }
        case GET_TOTAL_COUNT:
            return {
                ...state,
                totalUsersCount:action.totalCount
            }
        case TOGGLE_IS_FETCHING:
            return{
                ...state,
                isFetching: action.isFetching
            }
        default:
            return state;
    }
}

export const follow = (userId) => {
    return {type: FOLLOW, userId}
};

export const unFollow = (userId) => {
    return {type: UNFOLLOW, userId}
}

export const setUsers = (users) => {
    return {type: SET_USERS, users}
}

export const setCurrentPage =(page)=>{
    return{type:CURRENT_PAGE,page}
}

export const getTotalCount = (totalCount)=>{
    return{type:GET_TOTAL_COUNT,totalCount}
}

export const toggleIsFetching = (isFetching)=>{
    return{type:TOGGLE_IS_FETCHING,isFetching}
}