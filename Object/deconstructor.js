const course=
{
courseName:"js",
price:"999",
courseInstructor:"saif"
}
const {courseInstructor}=course;//by deconstructing you can access object like this but ,if you dont use deconstructing then you have to write "course.courseInstructor" every time you want to access it
console.log(courseInstructor)
//other way of deconstructing
const {courseInstructor:instructor}=course
console.log(instructor)