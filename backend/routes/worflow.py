from fastapi import APIRouter

router = APIRouter()

@router.post("/analyze")
async def analyze_workflow():

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