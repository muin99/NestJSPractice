class student{
    constructor(name, age){
        this.name = name;
        this.age = age;
    }
    study(){
        console.log(this.name+"IS studying"+this.age);
    }
}

const st = new student("HI",33);
st.study();

// function downloadFile(callback){

//     console.log("Downloading...");


//     setTimeout(()=>{

//         console.log("Download complete");

//         callback();

//     },3000);

// }



// downloadFile(()=>{

//     console.log("Open file");

// });

// console.log("Start downloading");

// downloadFile(); // takes 5 seconds

// console.log("Finished");

// console.log("Continue");