

function Employee(props) {
  return (
    <div className="employee">
       <h3>Name : {props.name}</h3>
       <h3>Age : {props.age}</h3>
    </div>
  )
}

export default Employee
