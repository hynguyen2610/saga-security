import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

function Profile() {
    const users = useSelector(state => state.users);
    const user = useSelector(state => state.authentication.user);

    return (
        <div className="col-lg-8 offset-lg-2">
            <h1>Profile</h1>
            <h1>Hello {user.firstName}!</h1>
            <p>This is your profile page</p>
            <p id="logout-div">
                <Link to="/login">Logout</Link>
            </p>
        </div>
    );

}

export { Profile };