const React = require('react');
const style2 = `position: 'absolute', top: 0, left:0,bottom:0,right:0, boxSizing: border-box, padding:0, border:'none', margin:'auto', display:'block', width:0, height:0, minWidth:'100%', maxWidth:'100%', minHeight:'100%', maxHeight:'100%'`;
const style1 = `display: 'block',  overflow:'hidden', position:'absolute', top:0, left:0, bottom:0, right:0, boxSizing: 'border-box', margin: 0`;


const StoreFront = () => {
  return (
    `<div className="flex flex-row grid grid-cols-3 gap-32 sm:grid-cols-2 lg:grid-cols-3 ">
        <div className="py-12 max-w-6xl mx-auto grid grid-cols-1 gap-x-4 gap-y-8">
            <a className="h-120 w-72 rounded shadow-lg mx-auto border border-palette-lighter" href="/api/products/the-unicorn">
                <div className="h-72 border-b-2 border-palette-lighter relative">
                    {/* <div style={{}}> */}
                    <div style={{style1}}>
                        <img alt="test-text" src="https://doggystickers.vercel.app/_next/image?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F2800%2F2014%2Fproducts%2Fmockup-6aeffeca.jpg%3Fv%3D1617396810&w=2048&q=75" decoding="async" className="transform duration-500 ease-in-out hover:scale-110" style={{style2}} sizes="100vw" srcSet="" />
                    </div>
                </div>
                            
                <div className="h-48 relative">
                    <div className="font-primary text-palette-primary text-2xl pt-4 px-4 font-semibold">The Unicorn</div>
                    <div className="text-lg text-gray-600 p-4 font-primary font-light">They exist!</div>
                    <div className="text-palette-dark font-primary font-medium text-base absolute bottom-0 right-0 mb-4 pl-8 pr-4 pb-1 pt-2 bg-palette-lighter  rounded-tl-sm triangle">$<span className="text-lg">9.99</span></div>
                </div>
            </a>
        </div>


        <div className="py-12 max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-4 gap-y-8">
            <a className="h-120 w-72 rounded shadow-lg mx-auto border border-palette-lighter" href="http://localhost:3000/products/the-unicorn">
                <div className="h-72 border-b-2 border-palette-lighter relative">
                    <div style={{style1}}>
                        <img alt="test-text" src="https://doggystickers.vercel.app/_next/image?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F2800%2F2014%2Fproducts%2Fmockup-6aeffeca.jpg%3Fv%3D1617396810&w=2048&q=75" decoding="async" className="transform duration-500 ease-in-out hover:scale-110" style={{style2}} sizes="100vw" srcSet="" />
                    </div>
                </div>
                            
                <div className="h-48 relative">
                    <div className="font-primary text-palette-primary text-2xl pt-4 px-4 font-semibold">The Unicorn</div>
                    <div className="text-lg text-gray-600 p-4 font-primary font-light">They exist!</div>
                    <div className="text-palette-dark font-primary font-medium text-base absolute bottom-0 right-0 mb-4 pl-8 pr-4 pb-1 pt-2 bg-palette-lighter  rounded-tl-sm triangle">$<span className="text-lg">9.99</span></div>
                </div>  
            </a>    
        </div>
    </div>`
  )
}

// module.exports = renderToString(StoreFront)