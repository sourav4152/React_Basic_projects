
import Card from './Card'

function Tours({ tours, removetour }) {

    return (
        <div className='flex flex-col justify-center items-center '>
            <h2 className="border-[7px] border-dashed border-[#0111a0] rounded-[20px] text-[3rem] text-[#0111a0] font-bold text-center m-[6vh] px-[5vw] py-[1vh] bg-[#0111a010] shadow-md transition-all duration-200 hover:shadow-lg hover:scale-[1.01]">
                Plane with love
            </h2>
            <div className='flex items-center justify-center flex-wrap max-w-[1300px] m-auto'>
                {
                    tours.map((tours) => {
                        return <Card key={tours.id} {...tours} removetour={removetour}></Card>
                    })
                }

            </div>
        </div>
    )


}
export default Tours;