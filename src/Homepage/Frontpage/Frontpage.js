import "./Frontpage.css";
// const style={
//    frontpageImg_one:{
//     backgroundImage:"url(https://media.gettyimages.com/id/1283824346/photo/paragliding-pilot-with-customer-tandem-paragliding.jpg?s=612x612&w=0&k=20&c=0XU2yxXG3mxPzKV5OOtRqx3qIHSzX4jm41LkwlWxBlY=)",
//     height:"100%",
//     backgroundSize:"cover",
//     backgroundRepeate:"none",
    
// },
// frontpageImg_two:{
//     backgroundImage:"url(https://img.freepik.com/premium-photo/person-is-paragliding-front-sunset_25996-5827.jpg?size=626&ext=jpg)",
//     height:"100%",
//     backgroundSize:"cover",
//     backgroundRepeate:"none"
// },
// frontpageImg_three:{
//     backgroundImage:"url(https://st.depositphotos.com/2368137/2594/i/600/depositphotos_25940069-stock-photo-mountain-paragliding.jpg)",
//     height:"100%",
//     backgroundSize:"cover",
//     backgroundRepeate:"none"
// },
// frontpageImg_four:{
//     backgroundImage:"url(https://images.unsplash.com/photo-1621617286772-e748d40af584?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHBhcmFnbGlkaW5nfGVufDB8fDB8fHww&w=1000&q=80)",
//     height:"100%",
//     backgroundSize:"cover",
//     backgroundRepeate:"none"
// },
// }
export let Frontpage=()=>{
    
    return(
        <div id="frontTop">
            <div id="FrontLeft">
                <h2>Sky High Paragliding</h2>
            <p>
               Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
            </p>
            <p>
               Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
            </p>
            </div>
            <div id="FrontRight">
                <div className="frontpageimg frontpageimg-1" >
                    <span>ONE</span>
                    {/* <img src="https://media.gettyimages.com/id/1283824346/photo/paragliding-pilot-with-customer-tandem-paragliding.jpg?s=612x612&w=0&k=20&c=0XU2yxXG3mxPzKV5OOtRqx3qIHSzX4jm41LkwlWxBlY="/> */}
                </div>
                <div className="frontpageimg frontpageimg-2">TWO
                {/* <img src="https://img.freepik.com/premium-photo/person-is-paragliding-front-sunset_25996-5827.jpg?size=626&ext=jpg"/> */}
                </div>
                <div className="frontpageimg frontpageimg-3" ><span>THREE</span>
                {/* <img src="https://st.depositphotos.com/2368137/2594/i/600/depositphotos_25940069-stock-photo-mountain-paragliding.jpg"/> */}
                </div>
                <div className="frontpageimg frontpageimg-4" >FOUR
                {/* <img src="https://images.unsplash.com/photo-1621617286772-e748d40af584?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHBhcmFnbGlkaW5nfGVufDB8fDB8fHww&w=1000&q=80"/> */}
                </div>
            </div>
        </div>
    );
}