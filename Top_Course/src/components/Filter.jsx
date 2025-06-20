
import React from "react";

const Filter = (props) => {

    let filterData= props.filterData;
    let category =props.category;
    let setCategory= props.setCategory;

    function filterHandeler(title){
        setCategory(title);
    }

    
    return (
        <div className="w-11/12 flex flex-wrap max-w-max space-x-4 gap-y-4 mx-auto py-4 justify-center">
            {
                filterData.map((data) => {
                    return (
                        <button onClick={()=> filterHandeler(data.title)}
                         className={`text-lg px-2 py-1 rounded-md font-medium text-white bg-[#000]  hover:bg-black/50
                            border-2 transition-all duration-300 cursor-pointer
                                ${category === data.title ? "bg-black/60 border-white" : "bg-black/40 border-transparent"}`}
                        key={data.id} >
                            {data.title}
                        </button>
                    )
                })
            }
        </div>
    );

}
export default Filter;