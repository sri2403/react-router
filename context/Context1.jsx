import { createContext, useEffect, useState } from "react";

const Context1 = createContext({});
export const DataProvider = ({ children }) => {
    const[posts,setPosts]=useState([]);
    const[search,setSearch]=useState("");
    const[searchResults,setSearchResults]=useState("");
    const[postName,setPostName]=useState("");
    const[postEdu,setPostEdu]=useState("");
    useEffect(()=>{
        const filteredResults=posts.filter((post)=>((post.name).toLowerCase()).includes(search.toLowerCase()) ||
        ((post.edu).toLowerCase()).includes(search.toLowerCase()));

        setSearchResults(filteredResults.reverse());
    },[posts,search]);
    
    useEffect(() => {
        fetch('http://localhost:3500/posts')
            .then(response => response.json())
            .then(searchResults => {
                setPosts(searchResults); 
            })
            .catch(error => console.error('Error fetching data:', error));
    }, []);
    

    const handleSubmit=(e)=>{
        e.preventDefault();
        const id=posts.length ? posts[posts.length-1].id +1: 1;
        const newPost={id,name:postName,edu:postEdu};
        const allPosts=[...posts,newPost];
        setPosts(allPosts);
        setPostName("");
        setPostEdu("");
    }
    return (
        <Context1.Provider value={{
            search,setSearch,searchResults,
            handleSubmit,postName,setPostName,postEdu,setPostEdu
        }}>
            {children}
        </Context1.Provider>
    );
};

export default Context1;