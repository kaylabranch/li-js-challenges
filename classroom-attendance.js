// Create a function, getStudents, which takes one argument: Classroom
// Classroom has a bool 'hasTeachingAssistant' and an array of people in the classroom: 'classList'
// First person in classList is teacher
// If there is a teaching assistant, the second value is that person
// If there is no assistant, the second value is a student
// All the remaining values are students
// Return list of students
// Use destructuring

class Classroom {
    constructor(hasTeachingAssistant, classList) {
        this.hasTeachingAssistant = hasTeachingAssistant;
        this.classList = classList;
    }

    get students() {
        let teacher = null; let assistant = null; let students = 'no students';

        if (this.hasTeachingAssistant && this.classList.length > 2) {
            [teacher, assistant, ...students] = this.classList;
        }
        else if (!this.hasTeachingAssistant && this.classList.length > 1) {
            [teacher, ...students] = this.classList;
        }

        return students;
    }
}