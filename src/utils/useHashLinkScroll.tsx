import { useEffect } from "react";
import { useLocation } from "react-router-dom"

const useHashLinkScroll = () =>{
    const location = useLocation();

    useEffect(()=>{
        if(location.hash){
            const element = document.getElementById(location.hash.substring(1)); // Remove #

            if(element){
        
                // Set timeout ensure browser registers the hash change 
                setTimeout(() => {
                    // Scroll the element in to view smoothly
                    element.scrollIntoView({behavior: 'smooth'});
                }, 100);
            }

            window.scrollTo(0,0);
        }
    },[location]); // Re-run effect only when hash changed
};

export default useHashLinkScroll;