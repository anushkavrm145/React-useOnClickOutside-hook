import { useRef } from "react";
import { useState } from "react";
import useOutsideClick from ".";

export default function UseOnClickOutsideTest(){
    const [showContent,setShowContent] = useState(false);
    const ref = useRef();

    useOutsideClick(ref,()=>setShowContent(false))

    return (
        <div>
        {
            showContent?
            ( 
                <div ref={ref}>
                <h1>this is a random content</h1>
                <p>click outside of this to close this content</p></div>) : (<button onClick={()=> setShowContent(true)}> show content
            </button>)
        }
        </div>
    )
}