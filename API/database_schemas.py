from pydantic import BaseModel


class Period(BaseModel):
    period_id: int
    period_name: str
    class Config:
        orm_mode = True
