import React from "react"
import Name from "./Name.jsx";
import Email from "./Email.jsx";
import Description from "./Description.jsx";

export default function MainPage() {
    
    return (
        <form action='/api/tickets' method="POST">
            <Name />
            <Email />
            <Description />
            <button type="submit">Submit</button>
        </form>
    );
};