from fastapi import APIRouter

from models.request import WorkflowRequest

from services.analyzer import WorkflowAnalyzer

router = APIRouter()

engine = WorkflowAnalyzer()

@router.post("/analyze")
async def analyze_workflow(request: WorkflowRequest):

    return engine.analyze(request.prompt)