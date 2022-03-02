const BASE_URL = "http://13.127.102.34:8082"
const AUTH_URL = 'http://13.126.35.191:8180'
export const getSections = async (tokenId) => {
    try {
        const uri = `${BASE_URL}/ta/mst/cls_section/list`
        const res = await fetch(uri, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                tokenId: tokenId

            }
        });
        const result = await res.json();
        return result;
    } catch(error){
        console.log(error);
    }
}

export const markStudent = async (studentId, date, attendance, tokenId) => {
    try {
        const uri = `${BASE_URL}/ta/attendance/mark/student`
        const res = await fetch(uri, {
            method: "POST",
            body: `dt=${date}&studentId=${studentId}&attendance=${attendance}`,
            headers: {
                "Content-Type": "application/x-www-form-urlencoded",
                tokenId: tokenId
            }
        });
        const result = await res.json();
        return result;
    } catch(error){
        console.log(error);
    }
}


export const loginWithEmailAndPassword = async (email, password) => {
    const data = JSON.stringify({email, password});
   const uri = `${AUTH_URL}/sms/school/login`
   try {
        const res = await fetch(uri, {
            method: "post",
            body: `school=${data}`,
            headers: {
                'Content-Type': "application/x-www-form-urlencoded"
            },   
        });

        const result = await res.json();
        const tokenId = res.headers.get('tokenId');
        return {...result, tokenId};

   } catch(error){
       console.log(error);
   }
}

export const updateSchedule = async (sectionId, scheduleDt, periodId, status, tokenId) => {
    const uri = `${BASE_URL}/ta/attendance/tch/daily_schedule/save`;
    const schedule = JSON.stringify({sectionId, scheduleDt, periodId, status});
    try {
        const res = await fetch(uri, {
            method: 'POST',
            body: `schedule=${schedule}`,
            headers: {
                'Content-Type': "application/x-www-form-urlencoded",
                tokenId: tokenId  
            }
        })

        const result = res.json();
        return result;

    } catch(error){
        console.log(error);
    }
}

export const fetchSchedule = async (date, tokenId) => {
    const uri = `${BASE_URL}/ta/attendance/tch/daily_schedule`;
    try {
        const res = await fetch(uri, {
            method: 'post',
            body: `scheduleDt=${date}`,
            headers: {
                'Content-Type': "application/x-www-form-urlencoded",
                tokenId: tokenId  
            }
        })

        const result = await res.json();
        return result;

    } catch(error){
        console.log(error);
    }
}


export const inform = async (date, studentId, attendance, tokenId) => {
    const uri = `${BASE_URL}/ta/attendance/student/inform`;
    try {
        const res = await fetch(uri, {
            method: 'POST',
            body: `dt=${date}&studentId=${studentId}&attendance=${attendance}`,
            headers: {
                'Content-Type': "application/x-www-form-urlencoded",
                tokenId: tokenId
            }
        })

        const result = await res.json();
        return result;
    } catch(error){
        console.log(error);
    }
}

export const resetPassword = async (email) => {
    const uri = `${AUTH_URL}/sms/school/forgotpassword`
    try {
         const res = await fetch(uri, {
             method: "POST",
             body: `email=${email}`,
             headers: {
                 'Content-Type': "application/x-www-form-urlencoded",
             }
         });
 
         const result = await res.json();
         return result;
 
    } catch(error){
        console.log(error);
    }
}

export const saveAttendance = async (date, sectionId, tokenId) => {
    const uri = `${BASE_URL}/ta/attendance/mark/cls`;

    try {
        const res = await fetch(uri, {
            method: 'POST',
            body: `dt=${date}&sectionId=${sectionId}`,
            headers: {
                'Content-Type': "application/x-www-form-urlencoded",
                tokenId: tokenId
            }
        })

        const result = await res.json();
        return result;

    } catch(error){
        console.log(error);
    }
    

}

export const getStudents = async (sectionId, date, tokenId) => {
    try {
        const uri = `${BASE_URL}/ta/attendance/student/list`

        const res = await fetch(uri, {
            method: "POST",
            body: `sectionId=${sectionId}&dt=${date}`,
            headers: {
                "Content-Type": "application/x-www-form-urlencoded",
                tokenId: tokenId
                
            }
        });
        const result = await res.json();
        return result;
    } catch(error){
        console.log(error);
    }
}