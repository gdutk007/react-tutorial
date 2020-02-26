import React from 'react'

function Checkboxes(){
    return (
        <div>
            <body>
                <ul>
                    <p><input type="checkbox" id="box1" checked/>  This is where the normal list goes. What happens 
                     if I add a space to my paragraph? </p>
                    <p><input type="checkbox" id="box2" checked/>  some else just got checked off</p>
                    <p><input type="checkbox" id="box3" checked/>  Final thing to check off over here </p>
                </ul>
            </body>
        </div>
    )
}
export default Checkboxes