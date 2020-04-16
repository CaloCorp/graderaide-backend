/******************
 * YOUR CODE HERE *
 ******************/
const Grade = function (assignment, score){

  return {

    assignment : assignment,
    score: score
  }
}

const Term = function(hours){
 return  {

    hours: hours,
    grades: [],
    addGrade (str, num){
      
        
      
    this.grades.push(Grade(str,num))
    }
  }
  
}
const Course = function (name,){

  return {
    name: name,
    terms: [],
  addTerm (hours){

    this.terms.push(Term(hours))
  }
  }
}

const Student = function (name, course, term=1){

  return {

    name : name,
    getAverage(name, termIndex){
      
      if (this.courses.includes(name))







         copyofGrades= []
         copyofGrades= copyofGrades.push(this.courses.terms[termIndex].grades.slice()) 
         let average = 0
          let sum =0 
        
        
          for ( let i=0;i<copyofGrades.length;i++)
        
        
          
          sum += copyofGrades[i]
          
          average= sum/ copyofGrades.length
          return average
          
        },

course: course,
term:term,
courses: [],
addCourse(name){
  this.courses.push(Course(name))
}

  }

}

/*********************************
 * OUR CODE BELOW; DO NOT TOUCH! *
 *********************************/

if (typeof Grade === 'undefined') {
  Grade = undefined;
}

if (typeof Term === 'undefined') {
  Term = undefined;
}

if (typeof Course === 'undefined') {
  Course = undefined;
}

if (typeof Student === 'undefined') {
  Student = undefined;
}


module.exports = {
  Grade,
  Term,
  Course,
  Student,
}
