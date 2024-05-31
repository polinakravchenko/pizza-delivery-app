export default function MenuItem(){
    return (
        <div className="bg-gray-100 p-4 rounded-lg text-center
        hover:bg-white hover:shadow-md hover:shadow-black/25 transition-all">
                <div className="text-center">
                <img src="./pizza-image-png.png" class="max-h-auto max-h-40 block mx-auto" alt="pizza"/>
                </div>
                <h4 className="font-semibold text-xl my-3">Pepperoni Pizza</h4>
                <p className="text-gray-500 text-sm">
                   Pepperoni is a variety of spicy salami 
                   made from cured pork and beef 
                   seasoned with paprika and chili peppers.
                </p>
                <button className="mt-4 bg-red-600 text-white rounded-full px-8 py-2">
                  Add to cart
                </button>
            </div>
    );
}