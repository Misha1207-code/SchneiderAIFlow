type Props = {

prompt:string;

setPrompt:any;

generateWorkflow:any;

};

export default function PromptCard({

prompt,

setPrompt,

generateWorkflow

}:Props){

return(

<div className="card">

<h2>Describe your workflow</h2>

<textarea

rows={8}

value={prompt}

onChange={(e)=>setPrompt(e.target.value)}

placeholder="Example: When a Purchase Order is uploaded to SharePoint, validate it, update the Master Tracker and notify the manager."

/>

<button onClick={generateWorkflow}>

Generate Workflow

</button>

</div>

)

}