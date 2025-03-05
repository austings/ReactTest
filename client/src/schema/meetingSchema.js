import * as yup from 'yup'

export const meetingSchema = yup.object({ //updated to match server side
    agenda: yup.string().required("Agenda Is required"),
    attendes: yup.array().of(yup.string().trim()),  
    attendesLead: yup.array().of(yup.string().trim()),  
    location: yup.string(),
    related: yup.string(),
    dateTime: yup.string().required("Date Time Is required"),
    notes: yup.string(),
    createFor: yup.string(),  
    createBy: yup.string().required(),  
});