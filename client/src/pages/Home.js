import React from "react";
import CategoryPage from "../components/CategoryPage";
import Album from "../components/Homepage";
import SignUp from "../components/SignUpComp";
import { useStoreContext } from "../utils/globalstate";

const Homepage = () => {
    const { category } = useStoreContext();
    console.log(category);
    if (category === 'all') {
    return (
       
        <Album/>
        
    )
    } else {
        return (
        <CategoryPage/>
        )
    }
};

export default Homepage;