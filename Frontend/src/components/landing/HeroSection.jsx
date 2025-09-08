import React from "react";
import { useNavigate } from "react-router-dom";
import { useClerk } from "@clerk/clerk-react";
import { useUser } from "@clerk/clerk-react";

const HeroSection =({openSignIn,openSignUp}) =>{
 return(
    <div className="landing-page-content relative">
        <div className="absolute insert-0 bg-gradient-10-r from-blue-50 to-indigo-50 opacity-80 z-0 pointer-events-none"> </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="pt-20 pb-16 sm:pt-24 sm:pb-20 lg:pt-32 lg:pb-28">
                <div className="text-center">
                      
                        <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
                            <span className="block">Share files Securely with</span>
                            <span className="block text-purple-500">CloudShare</span>
                        </h1>
                        <p className="mt-3 max-w-md mx-auto text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
                            Upload,manage and share your files securely . Accessible anywhere,anytime.
                        </p>
                       <div className="mt-10 max-w-ms mx-auto sm:max-w-none sm:flex sm:justify-center">
                        <div className="space-y-4 sm:space-y-0 sm:mx-auto sm:inline-grid sm:grid-cols-2 gap-5">
                            <button onClick={()=>openSignUp()} className="flex items-center justify-center px-4 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-purple-600 hover:bg-purple-700 sm:px-8 ">
                                Get Stared
                            </button>
                            <button onClick={()=>openSignIn()}className="flex i>tems-center justify-center px-4 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-black bg-white-600 hover:bg-white-700 sm:px-8">
                                Sign In
                            </button>
                        </div>
                       </div>
                    </div>           
                    
                     </div>
            <div className="relative">
                  <div className="aspect-w-16 rounded-lg shadow-xl overflow-hidden">
                    <img src="https://images.unsplash.com/photo-1506765515384-028b60a970df?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80" alt="dashboard" className="w-full h-full object-cover"/>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black opacity-10 rounded-lg"></div>
            </div>
            <div className="mt-8 text-center">
                <p className="text-base text-gray-500">
                    all your files are encrypted and stored securely with enterprise-grads securely protocols.
                </p>
            </div>
        </div>
    </div>
   
 )
}

export default HeroSection;