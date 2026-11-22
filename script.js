// School Management System - Complete Implementation
const schoolData = {
    name: "Mehmoodia Public School",
    students: [],
    teachers: []
};

// Function to Register a New Student
function registerStudent(id, name, grade, parentPhone) {
    const student = {
        id: id,
        name: name, grade: grade,
        parentPhone: parentPhone,
        status: "Active"
    };
    schoolData.students.push(student);
    console.log(`[REGISTRATION SUCCESS] Student ${name} (ID: ${id}) has been registered.`);
    
    // Automatically trigger notification after registration
    triggerAutomatedAlert(student, "WELCOME");
}

// Function to Trigger Automated Alerts (Call/SMS Simulaton)
function triggerAutomatedAlert(student, type) {
    console.log(`\n--- Initiating Automated System Communication ---`);
    console.log(`Target: ${student.name}`);
    console.log(`Contact Number: ${student.parentPhone}`);
    
    if (type === "WELCOME") {
        console.log(`[automated-call]: "Hello ${student.name}, welcome to ${schoolData.name}. Your registration is confirmed."`);
    } else if (type === "FEE_DUE") {
        console.log(`[automated-call]: "Dear parent of ${student.name}, this is a reminder that school fees are due."`);
    } else if (type === "ABSENT") {
        console.log(`[automated-call]: "Alert: ${student.name} is marked absent today at ${schoolData.name}."`);
    }
    console.log(`-----------------------------------------------\n`);
}

// Function to Mark Attendance and Trigger Absentee Alert
function markAttendance(studentId, status) {
    const student = schoolData.students.find(s => s.id === studentId);
    if (!student) {
        console.log(`[ERROR] Student ID ${studentId} not found.`);
        return;
    }
    
    if (status === "Absent") {
        console.log(`[ATTENDANCE] ${student.name} is marked Absent.`);
        triggerAutomatedAlert(student, "ABSENT");
    } else {
        console.log(`[ATTENDANCE] ${student.name} is marked Present.`);
    }
}

// Demonstration of the Complete System
console.log("Initializing School Management System Functions...");

// 1. Registering Students
registerStudent("S001", "Ayesha Khan", "9th", "03001234567");
registerStudent("S002", "Bilal Ahmed", "10th", "03007654321");

// 2. Simulating Fee Reminder
triggerAutomatedAlert(schoolData.students[0], "FEE_DUE");

// 3. Simulating Absenteeism Triggering Call
markAttendance("S002", "Absent");

