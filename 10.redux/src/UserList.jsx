import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllUsers } from "./redux/userSlice";

function UserList() {
    const dispatch = useDispatch();

    const { users } = useSelector((store) => store.user);
    console.log(users);

    useEffect(() => {
        dispatch(getAllUsers())
    }, [])

    return (
        <div>UserList</div>
    )
}

export default UserList;