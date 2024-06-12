import "../App.css"
import { useState } from "react"

function Table(){

const [date,setDate]=useState([
    
        { date: "2022-09-01", views: 100, article: "Article 1" },
    
        { date: "2023-09-01", views: 100, article: "Article 1" },
    
        { date: "2023-09-02", views: 150, article: "Article 2" },
    
        { date: "2023-09-02", views: 120, article: "Article 3" },
    
        { date: "2020-09-03", views: 200, article: "Article 4" }
    
    ])



const handleDate = () => {
   setDate([...date].sort((a,b)=>{
    const diff = new Date(b.date) - new Date(a.date)
    if(diff !=0){
        return diff
    }else{
        return b.views -a.views
    }
   }))
}

  const handleViews = () => {
    setDate([...date].sort((a, b) => {
      const viewsDiff = b.views - a.views;
      if (viewsDiff !== 0) {
        return viewsDiff;
      } else {
        return new Date(b.date) - new Date(a.date);
      }
    }));
  };


    return(
        <div className="App">
<h1>Date and Views Table</h1>
<div>
    <button onClick={handleDate}>Sort By Date  </button>
    <button onClick={handleViews}>Sort By Views  </button>

</div>

<div className="table-container">


<table className="xyz">

<thead>
<th>Date</th>
<th>Views</th>
<th>Article </th>
</thead>

{date.map((value)=>{
    return(
    <tbody>
    <td>{value.date}  </td>
    <td>{value.views} </td>
    <td>{value.article}   </td>
    </tbody>
    )
})}



</table>
</div>

        </div>
    )


}
export default Table