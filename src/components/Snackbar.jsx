import React, {useState, useEffect } from "react";
import '../styles/snackbar.scss'

export default function Snackbar({ message, show, type }) {
    const [visible, setVisible] = useState(show);

    useEffect(() => {
        if (show) {
        setVisible(true);
        const timer = setTimeout(() => {
            setVisible(false);
        }, 3000);
        return () => clearTimeout(timer); // Cleanup the timeout on component unmount or when show changes
        }
    }, [show]);

    return (
        <div id="snackbar" className={`${visible ? 'show' : ''} ${type}`}>
            {message}
        </div>
    );
};