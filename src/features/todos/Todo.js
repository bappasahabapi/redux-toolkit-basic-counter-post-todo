import React,{useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux'
// import { fetchTodos } from './todoSlice';




const Todo = () => {

        const todo =useSelector((state)=>console.log(state))
        // const {isLoading,todos,error} =useSelector((state)=>state.todo);
        // const dispatch = useDispatch();

        // useEffect(() => {
        // dispatch(fetchTodos())
        // }, [])


  return (
    <div>
         <h1>Todos are comming ... </h1>
      {/*    {isLoading && <h4> Loading...</h4>}
         {error && <h4>{error}</h4>} 
     <section>
        {todos  && todos.map((todo)=>{
       return<article>
                <h1 style={{fontWeight:"bold"}}>{todo.title}</h1>
                <p>{todo.id}</p>
            </article>
    })}
     </section>
     */}
    </div>
  )
}

export default Todo