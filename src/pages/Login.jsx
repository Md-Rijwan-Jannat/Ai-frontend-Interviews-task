import { FaGithub, FaGoogle } from "react-icons/fa";
import ailogo from '../../src/assets/images/header-icon.png'
import toast from 'react-hot-toast';
import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";
import {  useLocation, useNavigate } from 'react-router-dom';


const Login = () => {
const {googleUser, githubUser} = useContext(AuthContext)
const navigate = useNavigate();
    const location = useLocation()
    const from = location.state?.from?.pathname || "/";

    const googleHandler = () => {
        // google login 
        googleUser()
            .then(result => {
                console.log(result)
                toast.success('Successfully login')
                navigate(from, {replace:true})
            })
            .catch(error => {
                console.log(error)
                toast.error(error.message);
            })
    }
    const githubHandler = () => {
        // git hub 
        githubUser()
            .then(result => {
                console.log(result)
                toast.success('Successfully login')
                navigate(from, {replace:true})
            })
            .catch(error => {
                console.log(error)
                toast.error(error.message);
            })
    }
    return (
        <div className="w-full h-screen flex flex-col space-y-10 items-center justify-center">
            <img className="border border-gray-400 rounded  focus:border-[#12A9BC] px-3 py-2" src={ailogo} alt="" />
            <div className="flex items-center gap-3 sm:gap-x-5 bg-[#12A9BC] rounded md:p-10 p-5">
                <button onClick={googleHandler} className="bg-white dark:bg-gray-900 dark:border-gray-700 dark:hover:bg-gray-800 rounded-lg hover:bg-gray-100 duration-300 transition-colors border px-8 py-2.5">
                    <FaGoogle className="text-xl md:text-2xl"></FaGoogle>
                </button>

                <button onClick={githubHandler} className="bg-white dark:bg-gray-900 dark:border-gray-700 dark:hover:bg-gray-800 rounded-lg hover:bg-gray-100 duration-300 transition-colors border px-8 py-2.5">
                    <FaGithub className="text-xl md:text-2xl"></FaGithub>
                </button>
            </div>
        </div>
    );
};

export default Login;