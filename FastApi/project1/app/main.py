from app.config import settings
from fastapi import FastAPI

app=FastAPI(title=settings.APP_NAME,debug=settings.APP_NAME)

@app.get('/')
def root():
    return {'message':'hello world'}