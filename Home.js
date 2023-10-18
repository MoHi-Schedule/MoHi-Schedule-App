 
export const Home = () => {
    //hardcoding all 7 period variables
  const per1 = Period("1st", "8:35", "9:27");
  const per2 = Period("2nd", "9:32", "10:24");
  const per3 = Period("3rd", "10:29", "11:27");
  const per4 = Period("4th", "12:12", "1:04");
  const per5 = Period("5th", "1:09", "2:01");
  const per6 = Period("6th", "2:06", "2:58");
  const per7 = Period("7th", "3:03", "3:55");
   //create an array "schedule" that contains 7 periods
  const schedule = [per1, per2, per3, per4, per5, per6, per7];
    return(
    <View>
    {schedule.map(periods =>{
        return(
        <Text>
        {period.periodNumber} Period {'\n'} 
        Time: {period.startTime} - {period.endTime}  
        </Text>
        )})}
    </View>
    )   
    

}