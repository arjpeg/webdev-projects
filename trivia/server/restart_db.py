import os

from src import db

if os.path.exists("src/db.sqlite"):
    os.remove("src/db.sqlite")
    db.create_all()
