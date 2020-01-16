console.log("This is Hash Table ");

class HashTable{
    constructor(size){
        this.data = new Array(size);
    }

    _hash(key){
        let hash = 0;
        for (let i = 0; i < key.length; i++) {
            hash = (hash + key.charCodeAt(i)*i) % this.data.length;            
        }
        return hash;
    }

    set(key,value){
        console.log(key,value);
        let address = this._hash(key);
        if (!this.data[address]){
            this.data[address] = []
        }
        this.data[address].push([key,value])

        return this.data;
    }

    get(key){
        let address = this._hash(key);
        const currentBucket = this.data[address];
        if (currentBucket){
            for (let i = 0; i  < currentBucket.length; i++){
                const item = currentBucket[i] 
                if (item[0] === key){
                    return item;
                }              
            }
        }
        return undefined
    }

    keys(){
        let result = []
        for (let i = 0; i < this.data.length; i++) {
            const element = this.data[i];
            if(element){
                for (let j = 0; j < element.length; j++) {
                    const demo = element[j];
                    result.push(demo[0])
                    
                }
            }
        }
        return result;
    }
}

let myHashTable = new HashTable(50);
console.log(myHashTable._hash("Give me my Hash Code"));
console.log(myHashTable.set("demo",1000));
console.log(myHashTable.set("demo_2",10003));
console.log(myHashTable.get("demo"))
console.log(myHashTable.get("demo1"))
console.log(myHashTable.keys())