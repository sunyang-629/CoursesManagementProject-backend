# CoursesManagementProject-backend

this is a server for LMS

you can add a new user through 'api/users', your new username and password should be added in req.body in json.

you could login through 'api/auth', your login username and password should be added in req.body in json.

then you can get your token in your response, you could add it in your head.authorization(don't forget adding 'Bearer' before your token) to continue your following requests.

all the routes you need to know
getAllCourses: /api/courses
getCourseById: /api/courses/:id
addCourse: /api/courses
updateCourse: /api/courses/:id
deleteCourse: /api/courses/:id
getAllStudents: /api/students
getStudentById: /api/students/:id
addStudent: /api/students
updateStudent: /api/students/:id
deleteStudent: /api/students/:id
addCourseToStudent: /api/students/:id/courses/:code
deleteCourseForStudent: /api/students/:id/courses/:code
