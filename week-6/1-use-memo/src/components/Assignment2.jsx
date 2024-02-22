// import React, {  useState ,useMemo } from "react";

// // In this assignment, you will create a component that renders a large list of sentences and includes an input field for filtering these items. 
// // The goal is to use useMemo to optimize the filtering process, ensuring the list is only re-calculated when necessary (e.g., when the filter criteria changes).
// // You will learn something new here, specifically how you have to pass more than one value in the dependency array

// const words = ["hi", "my", "name", "is", "for", "to", "random", "word" ];
// const TOTAL_LINES = 1000;
// const ALL_WORDS = [];
// for (let i = 0; i < TOTAL_LINES; i++) {
//     let sentence = "";
//     for (let j = 0; j < words.length; j++) {
//         sentence += (words[Math.floor(words.length * Math.random())])
//         sentence += " "
//     }
//     ALL_WORDS.push(sentence);
// }

// export function Assignment2() {
//     const [sentences, setSentences] = useState(ALL_WORDS);
//     const [filter, setFilter] = useState("");

//     const filteredSentences = useMemo(()=> 
//     {
//         return sentences.filter(x => x.includes(filter));
//     })

//     return <div>
//         <input type="text" onChange={(e) => {
//             setFilter(e.target.value)
//         }}></input>
//         {filteredSentences.map(word => <div>
//             {word}    
//         </div>)}
//     </div>
// }

import React , {useState , useMemo} from "react";

const words = [ "Shubham" , "Gopal0" , "Kishan" , "Daman " , "love "];
const sentence = ""
const All_Words = [];
const total_lines = []
for(let i = 1; i<=total_lines; i++){
    
        for(let j =1; j <= words.length; i++){
    sentence += (words[Math.floor(words*Math.random())])
        sentence += " "
}

All_Words.push(sentence);
}


export function Assignment2(){
 const [sentences , setSentences] =    useState(All_Words);
 const [filter , setFilter] = useState("");

const filteredSentences = useMemo(function(){
    return sentences.filter(x => x.includes(filter));
})

 return <div>
    <input type="text" placeholder="Enter to find filtered sentence" onChange={function(e){return setFilter(e.target.value)}}></input>
    {filteredSentences.map(words =>  <div>{words}</div>)}
 </div>
}
