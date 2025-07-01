export function convertDateToWeekDay(dateString: string){
    const dayMap = new Map([
        [0, "Sunday"],
        [1, "Monday"],
        [2, "Tuesday"],
        [3, "Wednesday"],
        [4, "Thursday"],
        [5, "Friday"],
        [6, "Saturday"],
      ]);

    const date = new Date(dateString);

    return dayMap.get(date.getDay());
}