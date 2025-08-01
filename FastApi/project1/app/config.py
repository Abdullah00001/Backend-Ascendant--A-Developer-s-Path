import os
from pathlib import Path
from dotenv import load_dotenv

ENV_FILE=Path(__file__).resolve().parent.parent / '.env'

load_dotenv(dotenv_path=ENV_FILE)

class Settings:
    
     # App
    APP_NAME: str = os.getenv("APP_NAME", "MyFastAPIApp")
    ENV: str = os.getenv("ENV", "development")
    DEBUG: bool = os.getenv("DEBUG", "false").lower() == "true"

    # Server
    HOST: str = os.getenv("HOST", "0.0.0.0")
    PORT: int = int(os.getenv("PORT", 8000))

settings=Settings()