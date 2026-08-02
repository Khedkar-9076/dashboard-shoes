import { useEffect,useState } from "react";
import { useParams } from "react-router-dom";
import Navbar from "../comman/Navbar";
import Footer from "../comman/Footer";
import axios from "axios";
function Product_det(){
    return (
        <>
        <Navbar/>
        
        <br/>
        <br/>
        
        <h1 className="text-center text-4xl font-bold nb-8">Product Details</h1>
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 bg-white shadow-lg rounded-3g p-6">
                    
                    <img
                    src="https://a2zithub.org/dairy/uploads/168259075648183048.jpg"
                    className="w-full h-[400px] object-cover rounded-lg"/>

                    </div>
                    <div>
                        <h2 className="text-3xl font-bold mb-4">
                        ABC
                        </h2>
                        <p className="text-gray-600 mb-4">
                           details
                        </p>
                        <h3 className="text-2xl font-semibold text-green-600 mb-4">
                            $ 100
                        </h3>
                        <button className="bg-blue-600 text-white px-6 py-3 rounded-1g hover:bg-blue-600 mb-4">
                            Add To Cart
                        </button>

                    </div>
                    </div>
                    <br/>
                    <footer/>
                    </>
              
                    

    ); 
    
}