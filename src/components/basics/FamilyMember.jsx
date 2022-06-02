const FamilyMember = (props) => {
    return(
        <div className="familynames">
            {props.name} <strong>{props.subname}</strong>
        </div>
    )
}

export default FamilyMember