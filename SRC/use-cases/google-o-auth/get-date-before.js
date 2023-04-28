module.exports=function getAllUserusecases(){
    return async function getAllUserAction(){
            const today = new Date();
            const before60Days = new Date(today.setDate(today.getDate() - 760));
            const year = before60Days.getFullYear();
            const month = String(before60Days.getMonth() + 1).padStart(2, '0');
            const day = String(before60Days.getDate()).padStart(2, '0');
            const formattedDate = `${year}/${month}/${day}`;
            return formattedDate
    }
}