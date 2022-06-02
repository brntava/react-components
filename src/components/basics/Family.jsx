import React, { cloneElement } from "react"
import FamilyMember from "./FamilyMember"

const Family = (props) => {
    return(
        <div>
            {/* Clona os elementos filhos e bota as props neles */}
            {
                React.Children.map(props.children, child => {
                    return cloneElement(child, props)
                })
            } 
        </div>
    )
}

export default Family