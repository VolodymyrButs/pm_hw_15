import styled from "styled-components";

export const Title = styled.h1`
  width: 100%;
  text-align: center;
`;
export const SubTitle = styled(Title)`
  font-size: 20px;
`;
export const FormBlock = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid #333;
  border-radius: 10px;
  padding: 20px;
  margin: 5px 0;
  button {
    align-self: flex-end;
  }
`;
export const BottomBlock = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 12px;
`;
export const Button = styled.button`
  background-color: #333;
  padding: 5px 8px;
  color: #fff;
  font-size: 16px;
  border: none;
  border-radius: 5px;
  :focus {
    outline: none;
  }
  cursor: pointer;
`;
export const getToday = () => {
  let today = new Date();
  let day = today.getDate();

  // Set month to string to add leading 0
  var mon = (today.getMonth() + 1).toString(); //January is 0!
  var yr = today.getFullYear();

  if (mon.length < 2) {
    mon = "0" + mon;
  }
  if (day.length < 2) {
    day = "0" + day;
  }

  var date = yr + "-" + mon + "-" + day;
  return date;
};

export const getTodayMonth = () => {
  let today = new Date();

  var mon = (today.getMonth() + 1).toString();
  var yr = today.getFullYear();

  if (mon.length < 2) {
    mon = "0" + mon;
  }

  var date = yr + "-" + mon;
  return date;
};
