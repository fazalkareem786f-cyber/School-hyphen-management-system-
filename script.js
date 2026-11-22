// School Management System
const schoolData = {
    name: "Mehmoodia Public School",
    students: [],
    teachers: []
};

// Add Student Function
function addStudent(id, name, grade) {
    schoolData.students.push({ id, name, grade });
    console.log(`Student ${name} added.`);
}

// Trigger Alert (Placeholder for actual Twilio integration)
function triggerAutomatedCall(studentName) {
    console.log(`[ALERT] Initiating automated call for ${studentName}'s attendance/fee.`);
}

// Test Data
addStudent("S101", "Ali Khan", "10th");
triggerAutomatedCall("Ali Khan");



