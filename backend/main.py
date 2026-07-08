from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from routes.workflow import router as workflow_router

app = FastAPI(
    title="SchneiderFlow AI",
    description="AI Workflow Architect for Microsoft Power Platform",
    version="1.0"
)

# Enable CORS (Development)
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Register all routes
app.include_router(workflow_router)

# Root Endpoint
@app.get("/")
async def root():
    return {
        "status": "Backend Running",
        "project": "SchneiderFlowAI"
    }

# Health Check Endpoint
@app.get("/health")
async def health():
    return {
        "health": "OK"
    }