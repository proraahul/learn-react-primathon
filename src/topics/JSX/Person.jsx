// import React from 'react'

const Person = ({ data }) => {
    // console.log(props);
    // console.log(props.data);
    // console.log(props.title);


  return (
    <div>

        {/* { name: 'Rahul', age : 22 }, */}
        {/* { name: 'Raaj', age : 25 }, */}


        {
            data.map((item, index)=>{
                return(
                    <div key={index}>
                        <h1>{item.name}</h1>
                        <h2>{item.age}</h2>
                    </div>
                )
            })
        }
    </div>
  )
}

export default Person