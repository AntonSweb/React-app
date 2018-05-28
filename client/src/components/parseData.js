import {gridHeadings} from "../constans/const";

export const parseFile = string => {
    const cells = string.split('\n\n').map(el => {
            return el.split('\n').map(item => {
                return item.split(':').splice(1, 1).toString().trim()
            });
    });
    cells.forEach((item, index) => {
        if (item.length === 1){
           cells.splice(index, 2);
       }
    });
    // let headings = cells.shift();
    return cells.map(el => {
        let obj = {};
        for (let i = 0, l = el.length; i < l; i++) {
            obj[gridHeadings[i]] = isNaN(Number(el[i])) ? el[i] : +el[i];
        }
        return obj;
    });
};
