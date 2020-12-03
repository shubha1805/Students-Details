

const college = {
    collegeItems: [],
    studentsItems: {},
    studentIndex: {}
}

const collegeReducer = (state = college, action) => {
    switch (action.type) {
        case "COLLEGE":

            return {
                ...state,
                collegeItems: [...state.collegeItems, action.payload.collegeDetails]
            }
        case "CLEAR_COLLEGE":
            return {
                ...state,
                collegeItems: {}
            }
        case "SINGLE_STUDENTS_DETAILS":
            return {
                ...state,
                studentsItems: action.payload.singleStudentsDetails ? action.payload.singleStudentsDetails : state.studentsItems,
                index: action.payload.studentIndex
            }
        case "UPDATE_STUDENTS":
            return {
                ...state,
               collegeItems: state.collegeItems.map((studentData,studentIndex)=>{
                   if(studentIndex  ===  action.payload.updateIndex){
                       return action.payload.updateStudents
                   }
                    return studentData
               })
            }
        default:
            return state

    }

}
export default collegeReducer;