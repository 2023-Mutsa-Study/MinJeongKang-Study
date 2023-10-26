import React from "react";

import Card from "../UI/Card";
import classes from './Card.module.css';

const UsersList = props => {
    return (
        <Card className={classes.users}>
            <ul>
                {props.users.map((users) => (
                    <li key={user.id}>
                        {users.name} ((user.age) years old)
                    </li>
                ))}
            </ul>
        </Card>

    );
};

export default UsersList;