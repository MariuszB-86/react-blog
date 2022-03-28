export const dateToStr = (dateObj) => {
    
    const date = dateObj.getDate();
    const month = dateObj.getMonth() + 1;
    const year = dateObj.getFullYear();
    
    return `${month}/${date}/${year}`;
};