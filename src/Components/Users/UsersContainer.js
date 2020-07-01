import React from "react";
import {connect} from "react-redux";
import {
    follow,
    getTotalCount,
    setCurrentPage,
    setUsers,
    toggleIsFetching,
    unFollow
} from "../../Redux/usersReducer";
import * as axios from "axios";
import Users from "./Users";
import loader from "../../Assets/Images/loader.svg"
import Preloader from "../Preloader/Preloader";
import {getUsers} from "../../Api/Api";


class UsersAPIComponent extends React.Component {
    //no-useless-constructor
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.toggleIsFetching(true);
        getUsers(this.props.currentPage,this.props.pageSize).then(response => {
            this.props.setUsers(response.data.items);
            this.props.toggleIsFetching(false);
            this.props.getTotalCount(response.data.totalCount);
        })
    }

    follow = (id) => {
        axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${id}`,
            {},
            {
                withCredentials: true,
                headers: {
                    "API-KEY": "4a0b0c5d-a4c2-440e-ab78-7873188692cf"
                }
            })
            .then(response => {
                if (response.data.resultCode === 0) {
                    this.props.follow(id)
                }
            })
    }
    unFollow = (id) => {
        axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${id}`, {
            withCredentials: true,
            headers: {
                "API-KEY": "4a0b0c5d-a4c2-440e-ab78-7873188692cf"
            }
        })
            .then(response => {
                if (response.data.resultCode === 0) {
                    this.props.unFollow(id)
                }
            })
    }

    onCurrentPage = (page) => {
        this.props.setCurrentPage(page);
        this.props.toggleIsFetching(true);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${page}&count=${this.props.pageSize}`).then(response => {
            this.props.toggleIsFetching(false);
            this.props.setUsers(response.data.items)
        })
    }

    pages = (pages) => {
        if (pages > 50)
            return `...${50}`
    }

    render() {
        let pagesCount = Math.ceil(this.props.totalUsersCount / this.props.pageSize)
        let pages = [];
        for (let i = 1; i <= pagesCount; i++) {
            if (i > 10)
                break
            else
                pages.push(i);
        }

        return (
            <>
                {this.props.isFetching ? <Preloader/> : null}
                <Users totalUsersCount={this.props.totalUsersCount}
                       pageSize={this.props.pageSize}
                       onCurrentPage={this.onCurrentPage}
                       users={this.props.users}
                       follow={this.follow}
                       unFollow={this.unFollow}
                       currentPage={this.props.currentPage}

                />
            </>
        )
    }
}

let mapStateToProps = (state) => {
    return {
        users: state.usersData.users,
        pageSize: state.usersData.pageSize,
        totalUsersCount: state.usersData.totalUsersCount,
        currentPage: state.usersData.currentPage,
        isFetching: state.usersData.isFetching
    }
}

/*let mapDispatchToProps = (dispatch) => {
    return {
        follow: (userId) => {
            dispatch(followAC(userId))
        },
        unFollow: (userId) => {
            dispatch(unfollowAC(userId))
        },
        setUsers: (users) => {
            dispatch(setUsersAC(users))
        },
        setCurrentPage: (page) => {
            dispatch(setCurrentPageAC(page))
        },
        getTotalCount: (totalCount) => {
            dispatch(getTotalCountAC(totalCount));
        },
        toggleIsFetching: (isFetching) => {
            dispatch(toggleIsFetching(isFetching));
        }
    }
}*/


const UsersContainer = connect(mapStateToProps,
    {
        follow,
        unFollow, setUsers, setCurrentPage, getTotalCount, toggleIsFetching
    })(UsersAPIComponent);

export default UsersContainer;





