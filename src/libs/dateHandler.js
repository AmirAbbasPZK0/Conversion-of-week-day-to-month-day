export const dateHandler = (target , value) => {
    switch(target.getDay()){
        case 6:
            if(value === 0){
                return target.getDate() + 1
            }else if(value === 1){
                return target.getDate() + 2
            }else if(value === 2){
                return target.getDate() + 3
            }else if(value === 3){
                return target.getDate() + 4
            }else if(value === 4){
                return target.getDate() + 5
            }else if(value === 5){
                return target.getDate() + 6
            }else if(value === 6){
                return target.getDate() + 7 - 7
            }
            break
        case 0:
            if(value === 0){
                return target.getDate()
            }else if(value === 1){
                return target.getDate() + 1
            }else if(value === 2){
                return target.getDate() + 2
            }else if(value === 3){
                return target.getDate() + 3
            }else if(value === 4){
                return target.getDate() + 4
            }else if(value === 5){
                return target.getDate() + 5
            }else{
                return target.getDate() + 6 - 7
            }
        case 1:
            if(value === 0){
                return target.getDate() - 1
            }else if(value === 1){
                return target.getDate()
            }else if(value === 2){
                return target.getDate() + 1
            }else if(value === 3){
                return target.getDate() + 2
            }else if(value === 4){
                return target.getDate() + 3
            }else if(value === 5){
                return target.getDate() + 4
            }else{
                return target.getDate() + 5 - 7
            }
        case 2:
            if(value === 0){
                return target.getDate() - 2
            }else if(value === 1){
                return target.getDate() - 1
            }else if(value === 2){
                return target.getDate()
            }else if(value === 3){
                return target.getDate() + 1
            }else if(value === 4){
                return target.getDate() + 2
            }else if(value === 5){
                return target.getDate() + 3
            }else{
                return target.getDate() + 4 - 7
            }
        case 3:
            if(value === 0){
                return target.getDate() - 3
            }else if(value === 1){
                return target.getDate() - 2
            }else if(value === 2){
                return target.getDate() - 1
            }else if(value === 3){
                return target.getDate() 
            }else if(value === 4){
                return target.getDate() + 1
            }else if(value === 5){
                return target.getDate() + 2
            }else{
                return target.getDate() + 3 - 7
            }
        case 4:
            if(value === 0){
                return target.getDate() - 4
            }else if(value === 1){
                return target.getDate() - 3
            }else if(value === 2){
                return target.getDate() - 2
            }else if(value === 3){
                return target.getDate() - 1
            }else if(value === 4){
                return target.getDate() 
            }else if(value === 5){
                return target.getDate() + 1
            }else{
                return target.getDate() + 2 - 7
            }
        case 5:
            if(value === 0){
                return target.getDate() - 5
            }else if(value === 1){
                return target.getDate() - 4
            }else if(value === 2){
                return target.getDate() - 3
            }else if(value === 3){
                return target.getDate() - 2
            }else if(value === 4){
                return target.getDate() - 1
            }else if(value === 5){
                return target.getDate()
            }else{
                return target.getDate() + 1 - 7
            }
        }
    }