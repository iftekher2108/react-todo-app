
import { memo } from "react";


// eslint-disable-next-line react/prop-types
function TodoList({todos,setTodos})
{

    const todoDelete = (id) => {
        // eslint-disable-next-line react/prop-types
        setTodos(todos.filter((value,index) => index !== id));
      };
    
    
    return(
        <>
         <div className='row align-items-center justify-content-center mt-5'>
          <h1 className='text-center tw-bold text-white'>Todo List</h1>
          <div className='col-md-6'>
            <table className="table table-bordered">
              <thead>
                <tr >
                  <th className='bg-primary text-white' scope="col">#</th>
                  <th className='bg-primary text-white' scope="col">First</th>
                  <th className='bg-primary text-white' scope="col">Action</th>
                </tr>
              </thead>
              <tbody>
                {
                  // eslint-disable-next-line react/prop-types
                  todos.map((value,index) => (
                    <tr key={index}>
                      <th scope="row">{index}</th>
                      <td>{value}</td>
                      <td><button onClick={() => todoDelete(index)} className='btn btn-danger'>delete</button></td>
                    </tr>
                  ))
                }
              </tbody>
            </table>
          </div>
        </div>
        </>
    )
}

export default memo(TodoList)