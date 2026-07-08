from fastapi import APIRouter
from models.request import WorkflowRequest

router = APIRouter()

@router.post("/analyze")
async def analyze_workflow(request: WorkflowRequest):

    print(request.prompt)

    return {
        "workflow_name": "Purchase Order Processing",
        "trigger": "SharePoint Upload",
        "actions": [
            "Validate PO",
            "Update Master Tracker",
            "Notify Manager",
            "Archive File"
        ],
        "conditions": [
            "After Approval"
        ]
    }