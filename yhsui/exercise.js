var exercise = {};

exercise.salaries = null;
exercise.salary = null;

// load salary and data
exercise.load = function(salary, boston){
    exercise.salaries = boston.data;
    exercise.salary = salary;
};

// get salaries larger than given salary
exercise.findBiggerSalaries = function(){

    return exercise.salaries.filter(exercise.largerSalary);

};

// filter function
exercise.largerSalary = function largerSalary(item){

    return item[18]>exercise.salary;

};