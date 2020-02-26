import React from 'react'

function MyNavbar(){
   
    const styles = {
        color: "#FF8C00",
        backgroundColor: "black"
    }

    return(
        <div >
            <nav style={styles}>
                <ul>
                    <li> About Me </li>
                </ul>
                <ul>
                    <li> Projects </li>
                </ul>
                <ul>
                    <li> Contacts </li>
                </ul>
            </nav>           
        </div>
    )
}

export default MyNavbar
