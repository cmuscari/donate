import React from "react";
import Album from "../components/Homepage";
import SignUp from "../components/SignUpComp";
import { useStoreContext } from "../utils/globalstate";

const Homepage = () => {
    const { category } = useStoreContext();

    if (category === 'all') {
    return (
       
        <Album/>
        
    )
    } else {
        return (
        <SignUp/>
        )
    }
};

export default Homepage;