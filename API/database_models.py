from sqlalchemy import Boolean, Column, ForeignKey, Integer, String, Text, BigInteger
from sqlalchemy.orm import relationship

from .database import Base


class Period(Base):
    __tablename__ = "periods"

    period_id = Column(Integer, primary_key=True, index=True)
    period_name = Column(String)

    period_schedules = relationship("Period_Schedule", back_populates="period_id")


class Period_Schedule(Base):
    __tablename__ = "period_schedules"

    period_schedule_id = Column(Integer, primary_key=True, index=True)
    schedule_id = Column(String)
    period_id = Column(String)
    start = Column(Text)
    end = Column(Text)
    lunch_id = Column(BigInteger, nullable = True)

    date_schedules = relationship("Date_Schedule", back_populates="schedule_id")
