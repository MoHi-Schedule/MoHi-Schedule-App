from fastapi import FastAPI, Path
from typing import Optional
from pydantic import BaseModel


app = FastAPI()

Period = {
    1: {
        "time": "8:35-9:35",
        "period_number": 1,
        "is_current": False,
    }
}
    
class Period(BaseModel):
    time: str
    period_number: int
    is_current: bool
    time: Optional[str] = None
    period_number: Optional[int] = None
    is_current: Optional[bool] = None


@app.get("/")
async def root():
    return {"message": "Testing"}

@app.get("/get-student/{period_id}")
def get_period(period_id: int = Path(description="ID of period you want to view", gt=0,le=7)):
    return periods[period_id]

@app.get("/get-by-name/{period_id}")
def get_period(*, period_id: int, time: Optional[str] = None, period_number: int):
    for period_id in periods:
        if periods[period_id]["time"] == time:
            return periods[period_id]
    return {"Data": "Does not exist"}

@app.post("/create-period/{period_id}")
def create_period(period_id: int, period: Period):
    if period_id in periods:
        return {"Error": "This period already exists"}
    
    periods[period_id] = period
    return periods[period_id]

@app.put("/update-period/{period_id}")
def update_period(period_id: int, period: UpdatePeriod):
    if period_id not in periods:
        return{"Error": "This period does not current exist"}
    
    if period.time != None:
        periods[period_id].time = period.time

    if period.period_number != None:
        periods[period_id].period_number = period.period_number

    if period.is_current != None:
        periods[period_id].is_current = period.is_current
        
    return periods[period_id]

@app.delete("/delete-period/{period_id}")
def delete_period(period_id: int):
    if period_id not in periods:
        return {"Error": "That period does not exist"}
    del periods[period_id]
    return {"Message": "Period deleted successfully"}