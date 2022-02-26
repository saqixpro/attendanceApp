const BASE_URL = "http://13.127.102.34:8082"

export const getSections = async (sectionId, date) => {
    try {
        const uri = `${BASE_URL}/ta/mst/cls_section/list`
        const res = await fetch(uri, {
            method: "POST",
            headers: {
                Accept: 'application/json',
                "Content-Type": "application/json"
            }
        });
        const result = await res.json();
        return result;
    } catch(error){
        console.log(error);
    }
}

export const markStudent = async (studentId, date, attendance) => {
    try {
        const uri = `${BASE_URL}/ta/attendance/mark/student`
        const res = await fetch(uri, {
            method: "POST",
            body: `dt=${date}&studentId=${studentId}&attendance=${attendance}`,
            headers: {
                Accept: 'application/json',
                "Content-Type": "application/x-www-form-urlencoded"
            }
        });
        const result = await res.json();
        return result;
    } catch(error){
        console.log(error);
    }
}


export const loginWithEmailAndPassword = async (email, password) => {
   const uri = `${BASE_URL}/ta/staff/login`
   try {
        const res = await fetch(uri, {
            method: "POST",
            body: `eMail=${email}&password=${password}`,
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            }
        });

        const result = await res.json();
        return result;

   } catch(error){
       console.log(error);
   }
}


export const inform = async (date, studentId, attendance) => {
    const uri = `${BASE_URL}/ta/attendance/student/inform`;
    try {
        const res = await fetch(uri, {
            method: 'POST',
            body: `dt=${date}&studentId=${studentId}&attendance=${attendance}`,
            headers: {
                'Content-Type': "application/x-www-form-urlencoded"
            }
        })

        const result = await res.json();
        return result;
    } catch(error){
        console.log(error);
    }
}

export const resetPassword = async (email) => {
    const uri = `${BASE_URL}/ta/staff/forgotPassword`
    try {
         const res = await fetch(uri, {
             method: "POST",
             body: `eMail=${email}`,
             headers: {
                 'Content-Type': 'application/x-www-form-urlencoded'
             }
         });
 
         const result = await res.json();
         return result;
 
    } catch(error){
        console.log(error);
    }
}

export const saveAttendance = async (date, sectionId) => {
    const uri = `${BASE_URL}/ta/attendance/mark/cls`;

    try {
        const res = await fetch(uri, {
            method: 'POST',
            body: `dt=${date}&sectionId=${sectionId}`,
            headers: {
                'Content-Type': "application/x-www-form-urlencoded"
            }
        })

        const result = await res.json();
        return result;

    } catch(error){
        console.log(error);
    }
    

}

export const getStudents = async (sectionId, date) => {
    try {
        const uri = `${BASE_URL}/ta/attendance/student/list`

        const res = await fetch(uri, {
            method: "POST",
            body: `sectionId=${sectionId}&dt=${date}`,
            headers: {
                Accept: 'application/json',
                "Content-Type": "application/x-www-form-urlencoded"
            }
        });
        const result = await res.json();
        return result;
    } catch(error){
        console.log(error);
    }
}