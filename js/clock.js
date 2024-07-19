(function(){
  const dateElement = document.getElementById("date");
  const timeElement = document.getElementById("time");

  const modifyNumber = (number) => {
    return parseInt(number) < 10 ? `0${number}` : `${number}`;
  }

  const setNowDate = (month, date, day) => {
    dateElement.textContent = `${month}월 ${date}일 ${day}`;
  }
  const getNowDate = () => {
    const nowDate = new Date();
    let week = ['일요일', '월요일', '화요일', '수요일', '목요일', '금요일', '토요일',];
    let month = modifyNumber(nowDate.getMonth()+1);
    let date = modifyNumber(nowDate.getDate());
    let day = nowDate.getDay();

    setNowDate(month, date, week[day]);
  };

  const setNowTime = (hour, minute) => {
    timeElement.textContent = `${hour} : ${minute}`
  }
  const getNowTime = () => {
    const nowDate = new Date();
    let hour = modifyNumber(nowDate.getHours());
    let minute = modifyNumber(nowDate.getMinutes());
    setNowTime(hour, minute);
  };

  getNowDate();
  getNowTime();
  setInterval(getNowTime, 1000);
})();