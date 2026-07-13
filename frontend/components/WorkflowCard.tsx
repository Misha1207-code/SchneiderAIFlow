type Props={

data:any

}

export default function WorkflowCard({data}:Props){

if(!data)return null;

return(

<div className="summary">

<h2>Workflow Summary</h2>

<div className="grid">

<div>

<h3>Name</h3>

<p>{data.workflow_name}</p>

</div>

<div>

<h3>Trigger</h3>

<p>{data.trigger}</p>

</div>

<div>

<h3>Conditions</h3>

<p>{data.conditions.join(", ")}</p>

</div>

</div>

<h3>Actions</h3>

<ul>

{

data.actions.map((action:string)=>(

<li key={action}>✅ {action}</li>

))

}

</ul>

</div>

)

}