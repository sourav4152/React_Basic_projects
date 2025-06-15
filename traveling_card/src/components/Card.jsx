import { useState } from "react";

function Card({ id, image, info, price, name, removetour }) {

    const [readmore, setReadmore] = useState(false);
    function readmoreHandler() {
        setReadmore(!readmore);
    }

    const description = readmore ? info : `${info.substring(0, 200)}...`;

    return (


        <div className="w-[400px] h-max m-4 p-4 flex flex-col items-center rounded-[10px] shadow-md hover:scale-[1.05] hover:shadow-lg transition-all duration-200 ease-in-out">
            <img src={image} alt="" className="w-[380px] aspect-square object-cover " />
            <div className="my-[20px] mx-[5px] ">
                <div className="">
                    <h4 className="text-[#1faa59] text-2xl font-bold ">₹ {price}</h4>
                    <h4 className="text-2xl font-bold ">{name}</h4>
                </div>
                <div className="">
                    {description}
                    <span onClick={readmoreHandler} className="text-[#12b0e8] cursor-pointer" >
                        {readmore ? `Show Less` : `Read More`}
                    </span>
                </div>
            </div>

            <button
                onClick={() => removetour(id)}
                className="cursor-pointer mt-[18px] px-[80px] py-[10px] bg-[#b4161b21] text-black border border-[#b4161b] rounded-[10px] text-lg font-bold shadow-sm hover:bg-[#b4161b] hover:text-white hover:shadow-lg transition-all duration-200 ease-in-out active:scale-95 focus:outline-none focus:ring-2 focus:ring-[#b4161b]/50"
            >
                Not Interested
            </button>

        </div>





    );

}
export default Card;