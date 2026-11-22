// School Management System with Text-to-Speech
const schoolData = {
    name: "Mehmoodia Public School",
    students: [],
    teachers: []
};

function speakAlert(text) {
    if ('speechSynthesis' in window) {
        const utterance = new SpeechSynthesisUtterance(text);
        utterance.lang = 'en-US'; 
        window.speechSynthesis.speak(utterance);
    }
}

function appendLog(message) {
    console.log(message);
    const logContainer = document.getElementById('app-logs');
    if (logContainer) {
        const p = document.createElement('p');
        p.textContent = message;
        logContainer.appendChild(p);
    }
}

function registerStudent(id, name, grade, parentPhone) {
    const student = { id, name, grade, parentPhone, status: "Active" };
    schoolData.students.push(student);
    const msg = `Registration successful for ${name}.`;
    appendLog(msg);
    speakAlert(msg);
    triggerAutomatedAlert(student, "WELCOME");
}

function triggerAutomatedAlert(student, type) {
    let alertMessage = "";
    if (type === "WELCOME") {
        alertMessage = `Welcome ${student.name} to ${schoolData.name}.`;
    } else if (type === "FEE_DUE") {
        alertMessage = `Reminder for ${student.name}'s parents, school fee is due.`;
    } else if (type === "ABSENT") {
        alertMessage = `Alert: ${student.name} is marked absent today.`;
    }
    appendLog(alertMessage);
    speakAlert(alertMessage);
    alert(alertMessage);
}

function markAttendance(studentId, status) {
    const student = schoolData.students.find(s => s.id === studentId);
    if (!student) return;
    if (status === "Absent") {
        triggerAutomatedAlert(student, "ABSENT");
    }
}

appendLog("System Initialized.");
registerStudent("S001", "Ayesha Khan", "9th", "03001234567");
registerStudent("S002", "Bilal Ahmed", "10th", "03007654321");
markAttendance("S002", "Absent");




