from fastapi import FastAPI
from routes.worflow import router as workflow_router

app = FastAPI(
    title="SchneiderFlow AI",
    description="AI Workflow Architect for Microsoft Power Platform",
    version="1.0"
)

app.include_router(workflow_router)

@app.get("/")
async def root():
    return {
        "status": "Backend Running",
        "project": "SchneiderFlowAI"
    }

@app.get("/health")
async def health():
    return {
        "health": "OK"
    }