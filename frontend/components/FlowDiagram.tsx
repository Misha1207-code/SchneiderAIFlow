type Props={

data:any

}

export default function FlowDiagram({data}:Props){

if(!data)return null;

return(

<div className="diagram">

<h2>Generated Flow</h2>

<div className="flow">

<div className="node start">

Start

</div>

↓

<div className="node">

{data.trigger}

</div>

{

data.actions.map((action:string)=>(

<div key={action}>

↓

<div className="node">

{action}

</div>

</div>

))

}

↓

<div className="node end">

End

</div>

</div>

</div>

)

}