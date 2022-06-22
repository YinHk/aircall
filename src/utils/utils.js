import moment from "moment";

export const transformDate = (date) => {
   const dateObj = new Date(date);
   return moment(dateObj).format("MMM, DD YYYY");
}

export const formatAMPM = (date) => {
   const dateObj = new Date(date);
   let hours = dateObj.getHours();
   let minutes = dateObj.getMinutes();    
   const ampm = hours >= 12 ? 'pm' : 'am';
   
   hours %= 12;
   hours = hours || 12;    
   minutes = minutes < 10 ? `0${minutes}` : minutes;
   const strTime = `${hours}:${minutes} ${ampm}`;
   return strTime;
}