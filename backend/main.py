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
    allow_origins=[
        "https://turbo-space-broccoli-pjg9w569rv9w2qq6-3000.app.github.dev"
    ],
    allow_credentials=False,
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