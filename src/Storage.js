
class Storage {


    /**
     * check data from LS
     * @param {*} key 
     * @returns 
     */

    static has(key){
        return (localStorage.getItem(key)) ? localStorage.getItem(key) : false;
    }


    /**
     * get data from LS
     * @param {*} key 
     */

    static get(key){
        if( this.has(key) ){
            return JSON.parse( this.has(key) );
        }else{
            return 'No data found!';
        }
    }

    /**
     * set data from LS
     * @param {*} key 
     * @param {*} arrData 
     */

    static set(key, arrData){
        
        let localData = [];

        if( this.has(key) ){
            localData = JSON.parse(this.has(key));
        }

        localData.push(arrData);
        localStorage.setItem(key, JSON.stringify(localData));

    }

}


export default Storage;


