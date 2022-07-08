const TechAssessment =() => {
    
    //1. create a function that takes two num as arguments and return their sum
    (() => {
        const takes2 = (one, two) => one + two;
        console.log("1. Takes two num as arguments:",takes2(1, 2));
    })();
    
    //2. create a function that takes a number as its only argument and returns true if it's less than or equal to zero otherwise return false
    (() => {
        const bool = (num) => {
            if(num <= 0 ) return true
            else return false;
        }
        console.log("2. Takes a number as its only argument:",bool(2));
    })();
    
    
    //3. create a function that takes the age in years and returns the age in days
    (() => {
        const yearsToDays = (years) => years * 365
        console.log("3. Years to days:",yearsToDays(2));
    })();

    //4. Try finding your ancestors and offspring with code. //TODO: if they are a male then select from an array the positin of the random number.
    (function() {
        console.group("4. Try finding your ancestors");
            const getRndInteger = (min, max) => {
                // console.log(`get: ${min} ${max}`);
                let y = Math.floor(Math.random() * (max - min + 1)) + min;
                return y;
            }
            //make a function that splits a sting to an array
            const splitString = (array) => {
                return array.split(",");
            }
            const generation = (min, max, x) => {
                // console.log(min, max);
                let y = getRndInteger(min, max);//calls the function and returns a random number
                console.log(y,x);
                
                const stringMale = "Lucycan,Great Grandfather,Grandfather,Father,Son,GrandSon";
                const arrayMale = splitString(stringMale);
                console.log(arrayMale);
                const stringFemale = "Lucycan,Great Grandmother,Grandmother,Mother,Daughter,GrandDaughter";
                const arrayFemale = splitString(stringFemale);
                console.log(arrayFemale);


                if(x) {
                    const a = arrayMale[y];
                    console.log(a);
                }else {
                    const b = arrayFemale[y];
                    console.log(b);
                };
                // if(x === true && y === 0) {
                //     console.log("Lucycan LY");
                // }else if(x && y === -3) {
                //     console.log("Great Grandfather");
                // }else if(x && y === -2) {
                //     console.log("GrandFather");
                // }else if(x && y === -1) {
                //     console.log("Father");

                // }else if(!x && y === -3) {
                //     console.log("Great GrandMother");
                // }else if(!x && y === -2) {
                //     console.log("Grandmother");
                // }else if(!x && y === -1) {
                //     console.log("mother");
                // }else{
                //     console.log("Your descendant");
                // }
            }
            const bool = Math.random() < 0.5;//generate a random true, false
            // const gen = generation(-3, 3, bool);
            // console.log(gen);//why wont it let me do this
            generation(0, 5, bool);//min, max, bool
        console.groupEnd();
    })();

    /*5. Create a function that takes a "base number" as an argument. This function should return another function which takes
        a new argument, and returns the sum of the "base number* and the new argument.*/
    (() => {
        console.group("5. Create a function that takes a baseNumber");
            const newFunction = (baseNumber, newArgument) => {
                return baseNumber + newArgument;
            }
            
            const makePlusFunction = (baseNumber) => {
                return newFunction(baseNumber, 5);
            };

            console.log(makePlusFunction(5))
        console.groupEnd();    
    })();

    /*6. Create a function that takes an array of strings and returns an array with only the strings that have numbers in them
        If there are no strings containing numbers, return an empty array*/
    (() => {
        console.group('6. Create a functinn that takes an array of strings');
            const numsOnly = (array) => {
                console.log(array);
                const r = /\d+/;
                for(let item of array) {
                    // console.log(item);
                    if(item.match(r)) {
                        console.log(item);
                        
                    }
                    
                    // var r = /\d+/;
                    // var s = "you can enter maximum 500 choices";
                    // alert (s.match(r));
                }
            };

            const randString = "129jkwk949ry9gwn9103nfg94ho9w4you9are8mothers1maiden1979fun";
            const randString2 = randString.split("9");//splits the string where the number 9 is
            // console.log(randString2);
            numsOnly(randString2);
        console.groupEnd()
    })();

};


export {TechAssessment};