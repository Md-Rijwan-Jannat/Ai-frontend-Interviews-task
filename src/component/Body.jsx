import { BsChatSquare, BsPatchQuestion, BsPencil } from "react-icons/bs";
import { VscSend } from "react-icons/vsc";


const Body = () => {
    return (
        <div className="md:space-y-5">
            {/* Body Header */}
            <div className="border rounded border-gray-500 flex flex-col w-full md:w-11/12 p-3">
                <p className="text-sm font-semibold text-[#171A1F] font-bold">Introduce yourself to AlWorkSquad <span className="text-xl ml-3">i</span></p>
                <p className="flex items-center text-[8px] mt-2">I am Nithin. SCO of an IT startup company in India <BsPencil className="ml-2 text-lg"></BsPencil></p>
            </div>

            {/* Question ? */}
            <div className="w-11/12 flex justify-end">
                <div className="flex items-center gap-3 bg-[#12A9BC] px-4 py-3  text-white rounded mt-5">
                    <p >What is marketing</p>
                    <BsPatchQuestion className="w-8 text-xl"></BsPatchQuestion>
                </div>
            </div>

            {/* Answer */}
            <div className="w-10/12">
                <div className="flex flex-row border p-3 text-[#12A9BC] border-[#12A9BC] rounded mt-5">
                    <BsChatSquare className="w-5 mt-2 mx-2"></BsChatSquare>
                    <p className="w-full">Marketing furs to the process of promoting and selling products or services to customers It involves researching customer needs and wants, developing products and services that, meet masa roads pricing products and sorvices appropriately creating marketing matenats to promote products and services and distibuting those materials through various chanses ts reach potential customers. The mate goal of markating is to generata intrest and Increase sales for a business or organization</p>
                </div>
            </div>


            {/* Question ? */}
            <div className="w-11/12 flex justify-end">
                <div className="flex items-center gap-3 bg-[#12A9BC] px-4 py-3  text-white rounded mt-5">
                    <p >Give me a list of top 5 digital marketing agencies near me who offers services like social media marketing, content marketing and influencer marketing</p>
                    <BsPatchQuestion className="w-8 text-xl"></BsPatchQuestion>
                </div>
            </div>


            {/* Asl Input */}
            <div className="relative w-10/12 mt-5 text-lg text-[#12A9BC]">
                <BsPatchQuestion className='absolute left-5 bottom-4 text-[23px]'></BsPatchQuestion>
                <input
                    className="rounded placeholder:text-[#12A9BC] pl-[52px] py-3 w-full border border-gray-400 focus:border-2 focus:border-[#12A9BC] focus:outline-none"
                    type="search"
                    placeholder="Enter your query here..."
                    name=""
                    id=""
                />
                <VscSend className='absolute right-5 bottom-4 text-[23px]'></VscSend>
            </div>

        </div>
    );
};

export default Body;

